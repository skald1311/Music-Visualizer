// Importing ytdl
// import ytdl from "ytdl-core";
// const fs = require("fs");
// const ytdl = require("ytdl-core");

// Selecting DOMs
const form = document.querySelector(".form--container");
const inputURL = document.querySelector(".form__input--url");
const playPauseButton = document.querySelector(".playpause");
const predownloadedForm = document.querySelector(".predownloaded--songs");
const loadSongButton = document.querySelector(".loadsong");
const loaderContainer = document.querySelector(".loader--container");

// Variables
let song;
let canvas;
let fft;
let particles = [];
let songFile;

// Success, Fail, In progress functions as arguments for loadSound()
// Loading progress bar
const showLoader = function (percentage) {
  if (loaderContainer.textContent === "") {
    const html = `
    <label >Loading progress:</label>
    <progress class="progress--bar" value="${percentage * 100}" max="100"> ${
      percentage * 100
    }% </progress>
  `;
    loaderContainer.insertAdjacentHTML("afterbegin", html);
  }
};

const hideLoader = function () {
  loaderContainer.textContent = "";
};

const errorDisplay = function () {
  alert("Couldn't load sound!");
};

// Drag and drop functionality
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("dragover", function (e) {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
  });

  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });

  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("drop-zone--over");
  });
});

function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  // console.log(file);
  if (dropZoneElement.querySelector(".drop-zone__prompt")) {
    dropZoneElement.querySelector(".drop-zone__prompt").remove();
  }
  if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    dropZoneElement.appendChild(thumbnailElement);
  }
  thumbnailElement.dataset.label = file.name;

  // Check if it's mp3 then load
  if (file.type.startsWith("audio/")) {
    if (song.isPlaying()) {
      song.stop();
    }
    thumbnailElement.style.backgroundImage = `url("src/img/mp3icon.png")`;
    songFile = file;
    song = loadSound(songFile);
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}

// Resize canvas if the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  if (!songFile) {
    song = loadSound(
      "demo library/fake love - phil smooth.mp3",
      hideLoader,
      errorDisplay,
      showLoader
    );
  }
}

// Play pause button
playPauseButton.addEventListener("click", function () {
  if (song.isPlaying()) {
    song.pause();
    noLoop(); // When song is paused, the sketch is paused as well
  } else {
    song.play();
    song.setVolume(0.7);
    loop(); // use with noLoop()
  }
});

// Load predownloaded songs

loadSongButton.addEventListener("click", function () {
  const songPath = predownloadedForm.value;
  if (songPath === "none") {
    return;
  }
  if (song.isPlaying()) {
    song.stop();
  }
  song = loadSound(songPath, hideLoader, errorDisplay, showLoader);
});

// Rendering p5js
function setup() {
  angleMode(DEGREES);
  rectMode(CENTER);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  fft = new p5.FFT(0.5); // Fast fourier transform // Default value is 0.8 // the lower the value, the faster the alpha layer fades out
}

// function draw() {
//   // For drawing a line
//   background(0);
//   stroke(255);
//   noFill();
//   let wave = fft.waveform();
//   beginShape();
//   for (let i = 0; i <= width; i++) {
//     let index = floor(map(i, 0, width, 0, wave.length));
//     let x = i;
//     let y = wave[index] * 300 + height / 2;
//     vertex(x, y);
//   }
//   endShape();
// }

function draw() {
  // For drawing a circle
  background(13, 128, 101);

  translate(width / 2, height / 2);

  // Beat detector process: Getting amplitudes
  fft.analyze();
  amp = fft.getEnergy(20, 200);

  // Responsive amplitude background
  let alpha = map(amp, 0, 255, 180, 150);
  fill(0, alpha);
  noStroke();
  rect(0, 0, width, height);

  stroke(175, 242, 234); // color of the circle
  strokeWeight(3);
  noFill();

  let wave = fft.waveform();

  for (let t = -1; t <= 1; t += 2) {
    // Drawing both half of the circle
    beginShape();
    for (let i = 0; i <= 180; i += 0.5) {
      // Can make the wave more complex by incrementing by 0.5 instead of 1
      let index = floor(map(i, 0, 180, 0, wave.length - 1));
      let r = map(wave[index], -1, 1, 150, 350);

      let x = r * sin(i) * t;
      let y = r * cos(i);
      vertex(x, y);
    }
    endShape();
  }
  let p = new Particle();
  particles.push(p);
  for (let i = particles.length - 1; i >= 0; i--) {
    // Iterating backward to fix flickering problem
    if (!particles[i].edges()) {
      particles[i].update(amp > 230); // Condition for beat detection // Whenever amplitude is greater than 230, we add velocity to the particles
      particles[i].show();
    } else {
      particles.splice(i, 1);
    }
  }
}

// Particles
class Particle {
  constructor() {
    this.pos = p5.Vector.random2D().mult(250);
    this.velocity = createVector(0, 0);
    this.acceleration = this.pos.copy().mult(random(0.0001, 0.00001));
    this.width = random(3, 5);
    this.color = [random(200, 255), random(200, 255), random(200, 255)];
  }
  update(cond) {
    this.velocity.add(this.acceleration);
    this.pos.add(this.velocity);
    if (cond) {
      this.pos.add(this.velocity);
      this.pos.add(this.velocity);
      this.pos.add(this.velocity);
    }
  }
  show() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.width);
  }
  edges() {
    // Remove particles that are outside of a certain range -> the particles list doesn't grow infinitely
    if (
      this.pos.x < -width / 2 ||
      this.pos.x > width / 2 ||
      this.pos.y < -height / 2 ||
      this.pos.y > height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }
}

// // Getting search URL
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const url = inputURL.value;
//   inputURL.value = "";
//   console.log(url);
//   // const audio = ytdl(url, { filter: "audioonly" });
//   // console.log(audio);
// });
