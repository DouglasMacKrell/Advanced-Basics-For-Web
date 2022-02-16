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

#### TABLE: classes
| id | order_id | title |
|----|----------|-------|

#### TABLE: learning_objectives
| id | class_id | order_id | objective_text |
|----|----------|----------|----------------|

#### TABLE: video_recording
| id | class_id | video_url |
|----|----------|-----------|

#### TABLE: source_code
| id | class_id | code_url |
|----|----------|----------|

#### TABLE: outline
| id | class_id | outline_url |
|----|----------|-------------|

#### TABLE: linked_lessons
| id | class_id | order_id | link_text | link_url |
|----|----------|----------|-----------|----------|

## FUTURE FEATURES

* Implement testing on both the front and backend
* Portal to Jordan to POST, PUT, and DELETE

## TECHNICAL MILESTONES

* Using `gsap` to implement a timeline with a ScrollTrigger
* Hosting `.mp4` video in the public folder
* Adjusting the duration of animated elements within the `gsap` timeline
* Creating and implementing a full CRUD API
* Implementing SCSS for styling

## TECHNOLOGIES USED

* **React.js** For the front-end/client interface of this app
* **gsap** Javascript toolset for implementing CSS animations
* **JavaScript**
* **HTML5**
* **CSS3**
* **SASS**
* **Node.js && Express.js** HTTP back-end server
* **pg-promise**
* **PostreSQL** Database 

## LOCAL SETUP

**NOTE: You must install [Node.js](https://nodejs.org) as well as [PostgreSQL](https://www.postgresql.org/) in your computer for this to run.**

You can check for these dependencies with `node -v` and `psql -v`. If your shell/terminal doesn't complain and you see version numbers you are good to go!

1. Clone this repo into a folder of your choice:

       `git clone https://github.com/DouglasMacKrell/Advanced-Basics-For-Web.git`

2. Install dependencies:

       `cd frontend && npm install && cd .. && cd back-end && npm install`

3. Seed database:

       `cd database && psql -f ./seed.sql`

4. To launch the Express Server, enter:

       `cd .. && npm start`

5. In a new terminal window, head to `Advanced-Basics-for-Web/frontend` and enter:

       `npm start`

4. A new browser tab should have been opened and the React App should be running. If that is not the case check both of the terminals' output for errors, if you are unable to troubleshoot the problem, I would be happy to address issues so open [one](/issues)

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