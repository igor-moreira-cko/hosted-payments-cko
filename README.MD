<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/igor-moreira-cko/hosted-payments-cko">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Checkout.com Hosted Payments</h3>

  <p align="center">
    A very simple HTML and JavaScript example for getting Hosted Payments links
    <br />
    <a href="https://www.checkout.com/docs/integrate/hosted-payments-page"><strong>Explore the Checkout.com Hosted Payments docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/igor-moreira-cko/hosted-payments-cko">View Demo</a>
    ·
    <a href="https://github.com/igor-moreira-cko/hosted-payments-cko/issues">Report Bug</a>
    ·
    <a href="https://github.com/igor-moreira-cko/hosted-payments-cko/issues">Request Feature</a>
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
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

### Built With

* [Node.js](https://nodejs.org/)
* [Axios.js](https://axios-http.com/)
* [Express.js](https://expressjs.com/)
* [Bootswatch](https://bootswatch.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites


* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [Checkout.com - Get test account](https://www.checkout.com/get-test-account)
2. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your Secret API key in `/node/server.js`
   ```js
   const API_KEY = 'ENTER YOUR SECRET KEY';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

<strong>Simple checkout page with buttons:</strong>
<br/>
![Checkout page](/screenshots/Checkout.png?raw=true "Checkout page")

<strong>Hosted Payments page:</strong>
<br/>
![Hosted Payments page](/screenshots/Payment.png?raw=true "Hosted Payments page")
_For more examples, please refer to the [Documentation](https://www.checkout.com/docs/integrate/hosted-payments-page)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Igor Quoos Moreira - [@iqmoreira](https://twitter.com/iqmoreira) - igor.moreira@checkout.com

Project Link: [https://github.com/igor-moreira-cko/hosted-payments-cko](https://github.com/igor-moreira-cko/hosted-payments-cko)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[forks-shield]: https://img.shields.io/github/forks/igor-moreira-cko/hosted-payments-cko
[forks-url]: https://github.com/igor-moreira-cko/hosted-payments-cko/network/members
[stars-shield]: https://img.shields.io/github/stars/igor-moreira-cko/hosted-payments-cko
[stars-url]: https://github.com/igor-moreira-cko/hosted-payments-cko/stargazers
[issues-shield]: https://img.shields.io/github/issues/igor-moreira-cko/hosted-payments-cko
[issues-url]: https://github.com/igor-moreira-cko/hosted-payments-cko/issues

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/igorqm
[product-screenshot]: screenshots/Checkout.png
