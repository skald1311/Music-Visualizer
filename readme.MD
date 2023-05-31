
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/skald1311/Music-Visualizer">
    <img src="https://github.com/skald1311/Music-Visualizer/assets/84189062/14873b98-43e3-41b5-8fce-fb8ceea24593" alt="Logo" width="100" height="100">
  </a>



<h3 align="center">Music Visualizer</h3>

  <p align="center">
    An audio visualizer app made with p5js
    <br />
    <a href="https://skald1311.github.io/music-visualizer/"><strong>LIVE DEMO</strong></a>
    <br />
    <br />
    <a href="https://github.com/skald1311/Music-Visualizer/issues">Report Bug</a>
    ·
    <a href="https://github.com/skald1311/Music-Visualizer/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#live-demo">Live demo</a>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Music Visualizer is a VanillaJS application created using p5js library, which provides users with visual input while they are listening to their music/audio. P5js provided FFT (Fast Fourier Transform), which were used to process and draw the waveform of the audio. Not only do the application comes with the waveform visualization, it also includes a background and particles that are responsive to the amplitude of a given sound.

How to use: Users have two options - load the audio themselves or load the predownloaded audio.

  Loading the predownloaded songs: In the top right corner, choose a song that you would like to demo. Click Load. A progress bar will appear with the loading progress. It will disappear after the song is loaded successfully. Click the play/pause button.

  Loading the audio yourself: The application only takes in .mp3 files. Download an .mp3 file. Drag and drop that .mp3 file into the drop zone. Click play/pause. Usually, you will have to wait a little for the file to load. So if it doesn't work the first time you click play, click again after a few seconds.





<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Javascript][Javascript]][Javascript-url]
* [![HTML5][HTML5]][HTML5-url]
* [![CSS][CSS]][CSS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Live Demo

**LIVE DEMO AVAILABLE [HERE](https://skald1311.github.io/music-visualizer/)**


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License.

Users uploading mp3s to the site should have legal permission of the files in doing so.

Credit to Alan Walker, Phil Smooth, Kordhell, Sia, and Zedd for their songs in the predownloaded section.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Duong Hoang - [LinkedIn](https://www.linkedin.com/in/hmd1311/)

Project Link: [https://github.com/skald1311/Music-Visualizer](https://github.com/skald1311/Music-Visualizer)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/hmd1311/
[Javascript]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[Javascript-url]: https://www.javascript.com/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/
[HTML5]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://en.wikipedia.org/wiki/HTML
[CSS]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://en.wikipedia.org/wiki/CSS
[logo]: https://github.com/skald1311/Music-Visualizer/assets/84189062/97092b3b-4f77-4a86-8c4e-fdfa5b2fafe1



url thing didn't work as for some reasons I couldn't import mongodb
and may have copyright issues
=> switched to drag and drop upload mp3
