import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { SectionHeading } from "~/components/ui/section-heading";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const events = [
  "Software Developer @ Full Stack at Brown",
  "USACO Gold/Platium Tutor @ Pro HR Korea",
  "STEM Scholarship @ CCIR",
  "AI Research Intern @ UCSC",
  "Quantum Computing Research @ Cambridge Centre for International Research",
  "Soft. Eng Inern @ Samsung Cheil",
  "DS Intern @ CMU/RIT Primate Portal Lab",
  "Student @ International Math and Physics Summer Camp",
  "Fellow @ Non-Trivial",
  "Teaching Assistant for College Level Physics @ Loomis",
  "Go Club Leader @ Loomis",
  "Quantum Computing Research @ Cambridge Centre for International Research",
  "STEM Scholarship @ CCIR",
  "Student @ AwesomeMath Program",
  "Head Quantitative/Scientific Center Tutor @ Loomis",
  "Software Developer @ Loomis",
  "Web Dir. of The Log @ Loomis",
  "Web Dir. of The Hourglass @ Loomis",
  "Web Dir. of STEM Mag. @ Loomis",
  "Advisor to faculty AI Committee @ Loomis",
  "Advisor to the HoS @ Loomis",
  "Advisor to Financial Literacy @ Loomis",
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

    // Set up initial state for line drawing
    gsap.set(line, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Hide checkpoints initially
    gsap.set([".ball02", ".ball03", ".ball04", ".ball05", ".ball06"], {
      opacity: 0,
      scale: 0,
    });

    // Pulse animation for checkpoints
    const pulses = gsap
      .timeline({
        defaults: {
          duration: 0.1,
          autoAlpha: 1,
          scale: 1.5, // Reduced scale slightly for cleanliness
          transformOrigin: "center",
          ease: "elastic(2.5, 1)",
        },
      })
      .to(".ball02, .text01", {}, 0.05)
      .to(".ball03, .text02", {}, 0.1)
      .to(".ball04, .text03", {}, 0.15)
      .to(".ball05, .text04", {}, 0.2)
      .to(".ball06, .text05", {}, 0.25);

    // Main Scroll Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hi",
        scrub: 0.5, // Added smoothness
        start: "top center",
        end: "bottom center",
        invalidateOnRefresh: true,
      },
    });

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#hi",
        scrub: 0.5,
        start: "top center",
        end: "bottom center",
        invalidateOnRefresh: true,
      },
    });

    // Initial visibility
    tl.set([".ball01", ".ghost"], { opacity: 1 }, 0);

    // Animate the path drawing
    tl.to(line, { strokeDashoffset: 0, ease: "none" }, 0);

    // --- ANIMATE THE BALL & GHOSTS ---
    
    // Helper to add movement to timeline
    const animateAlongPath = (target: string, startOffset: number = 0) => {
      // We use the start/end properties of motionPath to create the lag/trail effect
      // while keeping them all synced to the same scrub timeline
      tl.to(
        target,
        {
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5],
            start: 0, // Always start at beginning
            end: 1 - startOffset, // Stop slightly earlier based on offset to create lag
          },
          ease: "none",
        },
        0 // All start at time 0
      );
    };

    // 1. The Main Ball
    animateAlongPath(".ball01", 0);

    // 2. The Ghost Trails (Fade Effect)
    // Note: In scrub, "lag" is tricky. We simulate it by creating separate tweens
    // that move slightly slower or to a slightly different 'end' progress.
    tl.to(".ghost01", {
      motionPath: { path: ".theLine", align: ".theLine", alignOrigin: [0.5, 0.5] },
      ease: "power1.in", // Slight ease change creates separation
    }, 0);
    
    tl.to(".ghost02", {
      motionPath: { path: ".theLine", align: ".theLine", alignOrigin: [0.5, 0.5] },
      ease: "power2.in", 
    }, 0);

    tl.add(pulses, 0);

    // Text Animation
    events.forEach((_, index) => {
      tl1.to(
        `.timeline-text-${index}`,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        index * 0.05
      );
    });

    const interval = setInterval(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      tl.kill();
      tl1.kill();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full bg-[#141414] pt-[300px] font-sans text-white">
      <SectionHeading title={"Experiences"} />
      <div className="grid grid-cols-[60%_40%]">
        <div id="hi" className="ml-auto mr-0 w-[100%]">
          <svg
            id="svg-stage"
            ref={svgRef}
            viewBox="0 0 600 1200"
            className=" mx-auto ml-auto mt-[0px] max-w-[600px] overflow-visible"
          >
            {/* DEFINITIONS FOR GRADIENTS AND FILTERS */}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" /> {/* Purple */}
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" /> {/* Blue */}
              </linearGradient>
              
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* BACKGROUND LINES */}
            <path className="fill-none stroke-white/20 stroke-[2px]" d="M 10 200 600 200" />
            <path className="fill-none stroke-white/20 stroke-[2px]" d="M 10 400 600 400" />
            <path className="fill-none stroke-white/20 stroke-[2px]" d="M 10 600 600 600" />
            <path className="fill-none stroke-white/20 stroke-[2px]" d="M 10 800 600 800" />
            <path className="fill-none stroke-white/20 stroke-[2px]" d="M 10 1000 600 1000" />

            {/* TEXT */}
            <text className="year-text fill-white/50 text-[15px]" x="30" y="190">2026</text>
            <text className="year-text fill-white/50 text-[15px]" x="30" y="390">2025</text>
            <text className="year-text fill-white/50 text-[15px]" x="30" y="590">2024</text>
            <text className="year-text fill-white/50 text-[15px]" x="30" y="790">2023</text>
            <text className="year-text fill-white/50 text-[15px]" x="30" y="990">2022</text>

            {/* MAIN PATH LINE */}
            <path
              ref={lineRef}
              className="theLine fill-none stroke-[6px]"
              stroke="url(#lineGradient)"
              filter="url(#glow)"
              d="M -5,0 Q 450 230 300 450 T 130 750 Q 100 850 300 1000 T 150 1200"
            />

            {/* GHOST TRAILS (Behind the main ball) */}
            <circle className="ghost ghost02 fill-purple-500 opacity-0" r="10" cx="0" cy="0" />
            <circle className="ghost ghost01 fill-blue-400 opacity-0" r="14" cx="0" cy="0" />

            {/* MAIN BALL (Rainbow Border Animation) */}
            {/* We use foreignObject to inject HTML/CSS animations into the SVG */}
            <foreignObject
              className="ball ball01 overflow-visible opacity-0"
              width="50"
              height="50"
              x="-25" // Center alignment offset (width/2)
              y="-25" // Center alignment offset (height/2)
            >
              <div className="group relative flex h-[50px] w-[50px] items-center justify-center">
                 {/* Spinning Rainbow Gradient */}
                <div className="absolute inset-0 animate-[spin_2s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,#ef4444,#eab308,#22c55e,#3b82f6,#a855f7,#ef4444)] blur-[2px]"></div>
                <div className="absolute inset-[3px] animate-[spin_2s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,#ef4444,#eab308,#22c55e,#3b82f6,#a855f7,#ef4444)]"></div>
                
                {/* Inner White Ball */}
                <div className="absolute inset-[6px] rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
              </div>
            </foreignObject>

            {/* STATIC CHECKPOINTS */}
          
          </svg>
        </div>
        
        {/* TEXT COLUMN */}
        <div>
          <div className="pt-[150px]">
            {events.map((event, index) => (
              <h3
                key={index}
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