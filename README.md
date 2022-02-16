# Advanced Basics for Web with Jordan Manley

[![Douglas MacKrell](https://www.douglasmackrell.com/Doug-Portfolio-Social.png)](https://dougmackrell.com)

**Douglas MacKrell** is a NYC based Full Stack Web Developer who is currently looking for work! 

<a href="https://www.linkedin.com/in/douglasmackrell/"><img src="https://dougs-crossing-game.netlify.app/linkedin.svg" alt="LinkedIn" width="25" height="25" /></a> [linkedin.com/in/douglasmackrell](https://www.linkedin.com/in/douglasmackrell/)

<a href="https://twitter.com/DouglasMacKrell"><img src="https://dougs-crossing-game.netlify.app/twitter.svg" alt="Twitter" width="25" height="25" /></a> [twitter.com/DouglasMacKrell](https://twitter.com/DouglasMacKrell)

<a href="https://youtube.com/bigmackrell"><img src="https://dougs-crossing-game.netlify.app/youtube.svg" alt="YouTube" width="25" height="25" /></a> [youtube.com/bigmackrell](https://youtube.com/bigmackrell)

<a href="mailto:bigmackrell+github@gmail.com?subject=[GitHub]"><img src="https://dougs-crossing-game.netlify.app/gmail.svg" alt="YouTube" width="25" height="25" /></a> [bigmackrell@gmail.com](mailto:bigmackrell+github@gmail.com?subject=[GitHub])

** **

## THE PROBLEM
Jordan Manley needed an inviting and engaging way to provide present and future students access to his previous and continuing classwork archives.

## THE SOLUTION
A single page application to display the data within a dynamic database accessed through an Restful API. This gives Jordan the ability to quickly update the Archive as new classes are completed and planned.

** **

## FEATURES

* FRONT-END
  * Front Page
    * A beautiful 3-stage animation triggered by a user's scroll
      * Clip-Path Circle enlarges to reveal a video background while the centered Pursuit Logo shrinks and disappears
      * Page title fades in
      * Page sub-title fades in
    * The animation completes, the Front Page is unpinned, and scrolling resumes
  * Second Page
    * Archive of Jordan Manley's Advanced DSA classwork
      * A ClassList fetches the classOverview of all available classes and sorts and maps over that data sending single classes to individual ClassCards
      * A ClassCard fetches the fullClass data via the classId of the single class, and checks to see if the returned data has any of the 5 possible datapoints to display
        * Learning Objectives (possible list of multiple)
        * Video Recording
        * Source Code
        * Objective
        * Linked Lessons (possible list of multiple)

* BACK-END
  * Express Server 
  * GET, POST, PUT, and DELETE routes and queries for classes

* DATABASE

### TABLE: classes
| id | order_id | title |
|----|----------|-------|



## FUTURE FEATURES

* Implement testing on both the front and backend
* 

## TECHNICAL MILESTONES

* Using `gsap` to implement a timeline with a ScrollTrigger
* Hosting `.mp4` video in the public folder
* Adjusting the duration of animated elements within the `gsap` timeline

## TECHNOLOGIES USED

* **React.js** For the front-end/client interface of this app
* **gsap** Javascript toolset for implementing CSS animations
* **JavaScript**
* **HTML5**
* **CSS3**
* **SASS** Currently unused, but incorporated to check for unexpected conflicts with `gsap`

## LOCAL SETUP

**NOTE: You must install [Node.js](https://nodejs.org) in your computer for this to run.**

You can check to see if you already have Node.js by typing `node -v` in your terminal. If your shell/terminal doesn't complain and you see version numbers you are good to go.

1. Clone this repo into a folder of your choice:

       `git clone https://github.com/DouglasMacKrell/gsap-test.git`

2. Install dependencies:

       `npm install`

3. To launch the React App, enter:

       `npm start`

4. A new browser tab should have been opened and the App should be running. If that is not the case check the terminals output for errors, if you are unable to troubleshoot the problem, I would be happy to address issues so open [one](/issues)

---

### Please check out one of my favorite projects, [DougTV!](https://dougtv.herokuapp.com)

---

[![DougTV Social Media](https://dougtv.herokuapp.com/DougTV-Social.png)](https://dougtv.herokuapp.com)

---

<details>
    <summary>
        Before you leave, please take note:
    </summary>

You're the best! Thank you for visiting!

Please give this project a star and be sure to check out my [YouTube Channel](https://youtube.com/BigMacKrell)!

</details>

** **