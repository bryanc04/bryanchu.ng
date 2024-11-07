import React, { useEffect, useState } from "react";
import anime from "animejs";

const LoadingScreen = () => {
  const [letters] = useState("BRYAN".split(""));
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timeline = anime
      .timeline({ loop: true })
      .add({
        targets: ".ml1 .letter",
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i + 1),
      })
      .add({
        targets: ".ml1 .line",
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
        offset: "-=875",
        delay: (el, i, l) => 80 * (l - i),
      })
      .add({
        targets: ".ml1",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });

    setAnimationStarted(true);

    return () => timeline.pause();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className={`ml1 ${animationStarted ? "visible" : "invisible"}`}>
        <div className="text-wrapper">
          <div className="line line1"></div>
          <div className="letters">
            {letters.map((letter, index) => (
              <span key={index} className="letter">
                {letter}
              </span>
            ))}
          </div>
          <div className="line line2"></div>
        </div>
      </div>

      <style jsx>{`
        .ml1 {
          font-weight: 900;
          font-size: 3.5em;
          color: white;
        }

        .ml1 .letter {
          display: inline-block;
          line-height: 1em;
          opacity: 0; /* Ensure letters are initially invisible */
        }

        .ml1 .text-wrapper {
          position: relative;
          display: inline-block;
          padding-top: 0.1em;
          padding-right: 0.05em;
          padding-bottom: 0.15em;
        }

        .ml1 .line {
          opacity: 0;
          position: absolute;
          left: 0;
          height: 3px;
          width: 100%;
          background-color: #fff;
          transform-origin: 0 0;
        }

        .ml1 .line1 {
          top: 0;
        }
        .ml1 .line2 {
          bottom: 0;
        }

        /* Ensure that the animation won't display until it's triggered */
        .ml1.invisible {
          visibility: hidden;
        }
        .ml1.visible {
          visibility: visible;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
