
import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

function App() {
    let videoContainer = [
      "./closeup-coding.mp4",
      "./closeup-coding2.mp4",
      "./closeup-coding3.mp4",
      "./closeup-coding4.mp4",
      "./closeup-coding5.mp4",
      "./closeup-coding6.mp4",
      "./closeup-coding7.mp4",
      "./closeup-coding8.mp4",
    ];

    let random = Math.floor(Math.random() * 8);

    let randomVideo = videoContainer[random];


  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: element.querySelector(".front-page"),
        start: "top",
        end: "100%",
        // markers: true,
        scrub: true,
        pin: true,
      },
    });

    tl.fromTo(
      element.querySelector(".front-page"),
      { clipPath: "circle(5%)" },
      { clipPath: "circle(75%)", duration: "3" }
    );

    tl.fromTo(
      element.querySelector(".pursuit-logo"),
      { scale: "1" },
      { scale: "0", opacity: "0", duration: "1" },
      "-=3"
    );

    tl.fromTo(
      element.querySelector(".title"),
      { opacity: "0" },
      { opacity: "1", duration: "1" }
    );

    tl.fromTo(
      element.querySelector(".sub-title"),
      { opacity: "0" },
      { opacity: "1", duration: "1" }
    );
  }, []);

  return (
    <div className="App" ref={ref}>
      <div className="p1__wrapper">
        <div className="front-page">
          <div className="intro-text">
            <h1 className="title">Advanced Basics For Web</h1>
            <h2 className="sub-title">
              Jordan Manley's ongoing classwork and curriculum for Pursuit's job
              readiness program
            </h2>
          </div>
          <div className="blend"></div>
          <img
            className="pursuit-logo"
            src="./pursuit-monogram-black.svg"
            alt="Pursuit logo"
          />
          <video src={randomVideo} autoPlay loop muted />
        </div>
      </div>
      <div className="second-page">
        <h2 className="second-page__title">Archive</h2>
      </div>
    </div>
  );
}

export default App;
