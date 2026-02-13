"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "~/components/ui/section-heading";

// Images (assuming these imports work in your project structure)
import loomisLogo from "public/images/loomis.png";
import usaco from "public/images/usaco.png";
import teams from "public/images/teams.png";
import nontrivial from "public/images/nontrivial.svg";
import aapt from "public/images/aapt.jpg";
import maa from "public/images/maa.png";
import hosa from "public/images/hosa.png";
import csef from "public/images/csef.png";
import music from "public/images/music.png";
import ccir from "public/images/ccir.png";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

export default function Awards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  const data = [
    ["2nd Place in U.S. NorthEast/20th Place Internationally | AAPT PhysicsBowl", aapt],
    ["2nd Place in CT/Nationals Qualifier | TEAMS Engineering Competition", teams],
    ["USACO Platnium Division | USA Computing Olympiad", usaco],
    ["$1000 + $500 (3rd Place) Award | The Non-Trivial Fellowship", nontrivial],
    ["First Place/Highest Scorer on AMC 12 | MAA/Loomis Chaffee School", maa],
    ["Junior Math Departmental Award | Loomis Chaffee School", loomisLogo],
    ["Junior Science Departmental Award | Loomis Chaffee School", loomisLogo],
    ["CCIR STEM Scholar | Camrbidge Centre for International Research", ccir],
    ["American Invitational Mathematics Examination (AIME) Qualifier | MAA", maa],
    ["Finalist/Medalist | Connecticut Science and Engineering Fair", csef],
    ["3rd Place in CT/Internationals Qualifier | HOSA Math", hosa],
    ["Top 100 Kendrick Lamar Listener of 2024 | Apple Music", music],
    ["3x Math Departmental Honors | Loomis Chaffee School", loomisLogo],
    ["2x Science Departmental Honors | Loomis Chaffee School", loomisLogo],
    ["2x Social Science Departmental Honors | Loomis Chaffee School", loomisLogo],
    ["English Departmental Honor | Loomis Chaffee School", loomisLogo],
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. ENTRANCE ANIMATION (The Flip Up)
      // This runs on the whole container to stagger them in
      gsap.fromTo(
        ".award-card",
        {
          y: 100,
          opacity: 0,
          rotateX: -45,
          scale: 0.8,
          transformOrigin: "top center",
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            // START: When top of container hits bottom of viewport (starts immediately)
            start: "top bottom", 
            // END: When top of container hits center of viewport
            end: "top center",   
            scrub: 1,            // Smooth scrubbing
          },
        }
      );

      // 2. ACTIVE BORDER ANIMATION (The "Focus" Effect)
      // We loop through each card and give it its own trigger
      cardsRef.current.forEach((card) => {
        if (!card) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top center+=100", // Activates when card is near center
          end: "bottom center-=100", 
          toggleClass: "active-card", // Adds this class when in view
          // markers: true, // Uncomment to debug positions
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-[#141414] pb-[100px] pt-[150px] perspective-[1000px]">
      <div className="container mb-16">
        <SectionHeading title="Awards" />
      </div>

      <div
        ref={containerRef}
        className="mx-auto w-3/5 flex flex-col gap-6"
      >
        {data.map((award, index) => (
          <div
            key={index}
            ref={(el) => { cardsRef.current[index] = el }} // Store ref
            className="award-card group relative p-[1px] rounded-xl overflow-hidden transition-all duration-500"
          >
            {/* ANIMATED BORDER GRADIENT */}
            {/* Default state: invisible/dark. Active state: spinning gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20 group-hover:opacity-50 transition-opacity" />
            
            {/* The "Cool Border" container - activated by GSAP toggleClass */}
            <div className="absolute inset-[-500%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#fff_50%,#00000000)] opacity-0 transition-opacity duration-500 [.active-card_&]:opacity-100" />
            
            {/* Inner Card Content */}
            <div className="relative flex items-center justify-between rounded-xl bg-[#141414] border border-white/5 px-6 py-4 font-mono text-sm text-gray-200 backdrop-blur-sm">
              <div className="flex-1 pr-4">
                <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent group-hover:to-white transition-colors duration-300">
                  {award[0]}
                </span>
              </div>
              
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 p-1.5 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/10">
                <img
                  src={(award[1] as any).src || award[1]}
                  alt="Award Logo"
                  className="h-full w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}