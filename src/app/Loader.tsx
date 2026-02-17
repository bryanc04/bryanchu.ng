import React, { useEffect, useState } from "react";
import anime from "animejs";

const LoadingScreen: React.FC = () => {
  const [letters] = useState("WELCOME!".split(""));
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timeline: anime.AnimeTimelineInstance = anime
      .timeline({ loop: false })
      .add({
        targets: ".ml1 .letter",
        scale: [0.7, 1],
        opacity: [0, 1],
        easing: "easeOutQuad",
        duration: 250,
        delay: (el, i) => 25 * i,
      })
      .add({
        targets: ".ml1 .line",
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutQuad",
        duration: 200,
        offset: "-=90",
      })
      .add({
        targets: ".ml1",
        opacity: 0,
        duration: 250,
        easing: "easeInQuad",
        delay: 200,
      });

    setAnimationStarted(true);

    return () => {
      timeline.pause();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
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


      </div>

      <style jsx>{`
        .ml1 {
          font-weight: 900;
          font-size: 3.5em;
          color: white;
          margin-bottom: 20px;
        }

        .ml1 .letter {
          display: inline-block;
          line-height: 1em;
          opacity: 0;
        }

        .ml1 .text-wrapper {
          position: relative;
          display: inline-block;
          padding: 0.1em 0.05em 0.15em;
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

        .ml1.invisible {
          visibility: hidden;
        }
        .ml1.visible {
          visibility: visible;
        }

        .image-slot {
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-image {
          max-height: 100%;
          max-width: 120px;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
