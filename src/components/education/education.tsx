import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { SectionHeading } from "~/components/ui/section-heading";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const events = [
  "Soft. Dev Inern @ Samsung Cheil",
  "DS Intern @ CMU/RIT Primate Portal Lab",
  "Go Club Leader @ Loomis",

  "Student @ AwesomeMath Program",
  "Research @ Cambridge Centre for International Research",
  "STEM Scholarship @ CCIR",
  "Research @ UCSC",
  "Student @ IMPSC",
  "Fellow @ Non-Trivial",

  "Software Developer @ Loomis",
  "Web Dir. of The Log @ Loomis",
  "Web Dir. of The Hourglass @ Loomis",
  "Web Dir. of STEM Mag. @ Loomis",
  "AI Committee @ Loomis",
  "Advisor to the HS @ Loomis",
  "Software Developer @ Loomis",
  "Advisor to Financial Literacy @ Loomis",
  "TA for CL Physics @ Loomis",
  "Head QSRC Tutor @ Loomis",
  "Volunteer ISA @ Loomis",
  "Tour Guide @ Loomis",
];

const TimelineAnimation = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const lineRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (!lineRef.current) return;

    const line = lineRef.current;
    const length = line.getTotalLength();

    // Set up initial state
    gsap.set(line, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Hide checkpoints initially
    gsap.set([".ball02", ".ball03", ".ball04", ".ball05", ".ball06"], {
      opacity: 0,
      scale: 0,
    });

    const pulses = gsap
      .timeline({
        defaults: {
          duration: 0.1,
          autoAlpha: 1,
          scale: 2,
          transformOrigin: "center",
          ease: "elastic(2.5, 1)",
        },
      })
      .to(".ball02, .text01", {}, 0.05)
      .to(".ball03, .text02", {}, 0.1)
      .to(".ball04, .text03", {}, 0.15)
      .to(".ball05, .text04", {}, 0.2)
      .to(".ball06, .text05", {}, 0.25);
    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#svg-stage",
        scrub: 1,
        start: "top center",
        end: "bottom center",
      },
    });
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#svg-stage",
        scrub: 1,
        start: "top center",
        end: "bottom center",
      },
    });

    // Initial ball visibility
    tl.set(".ball01", { opacity: 1 }, 0);

    // Animate the path drawing
    tl.to(line, { strokeDashoffset: 0 }, 0);

    // Track the moving ball position and trigger checkpoints

    // Animate the ball along the path
    tl.to(
      ".ball01",
      {
        motionPath: {
          path: ".theLine",
          align: ".theLine",
          alignOrigin: [0.5, 0.5],
        },
      },
      0,
    );
    tl.add(pulses, 0);
    events.forEach((_, index) => {
      tl1.to(
        `.timeline-text-${index}`,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        index * 0.1,
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="w-full bg-[#141414] font-sans text-white">
      <SectionHeading title={"Experiences"} />

      <div className="grid grid-cols-[60%_40%]">
        <div>
          <svg
            id="svg-stage"
            ref={svgRef}
            viewBox="0 0 600 1200"
            className="absolute mx-auto ml-0 mt-[0px] max-w-[600px] overflow-visible"
          >
            <path
              className="fill-none stroke-white stroke-[2px]"
              d="M 10 200 600 200"
            />
            <path
              className="fill-none stroke-white stroke-[2px]"
              d="M 10 400 600 400"
            />
            <path
              className="fill-none stroke-white stroke-[2px]"
              d="M 10 600 600 600"
            />
            <path
              className="fill-none stroke-white stroke-[2px]"
              d="M 10 800 600 800"
            />
            <path
              className="fill-none stroke-white stroke-[2px]"
              d="M 10 1000 600 1000"
            />
            <text className="year-text fill-white text-[15px]" x="30" y="190">
              2021
            </text>
            <text className="year-text fill-white text-[15px]" x="30" y="390">
              2022
            </text>
            <text className="year-text fill-white text-[15px]" x="30" y="590">
              2023
            </text>
            <text className="year-text fill-white text-[15px]" x="30" y="790">
              2024
            </text>
            <text className="year-text fill-white text-[15px]" x="30" y="990">
              2025
            </text>
            <path
              ref={lineRef}
              className="theLine fill-none stroke-white stroke-[10px]"
              d="M -5,0 Q 450 230 300 450 T 130 750 Q 100 850 300 1000 T 150 1200"
            />
            <circle
              className="ball ball01 fill-white opacity-0"
              r="20"
              cx="50"
              cy="100"
            />
            <circle
              className="ball ball02 fill-white opacity-0"
              r="20"
              cx="285"
              cy="211"
            />
            <circle
              className="ball ball03 fill-white opacity-0"
              r="20"
              cx="335"
              cy="410"
            />
            <circle
              className="ball ball04 fill-white opacity-0"
              r="20"
              cx="210"
              cy="611"
            />
            <circle
              className="ball ball05 fill-white opacity-0"
              r="20"
              cx="165"
              cy="811"
            />
            <circle
              className="ball ball06 fill-white opacity-0"
              r="20"
              cx="295"
              cy="1016"
            />
          </svg>
        </div>
        <div>
          <div className="pt-[150px]">
            {events.map((event, index) => (
              <h3
                className={`timeline-text mb-2 text-2xl font-bold text-white timeline-text-${index} opacity-0`}
              >
                {event}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineAnimation;
