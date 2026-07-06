"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "~/components/ui/section-heading";

// Images (assuming these imports work in your project structure)
import loomisLogo from "public/images/loomis.png";
import usaco from "public/images/usaco.png";
import teams from "public/images/teams.png";
import nontrivial from "public/images/nontrivial.svg";
import aapt from "public/images/aapt.jpg";
import maa from "public/images/maa.png";
import csef from "public/images/csef.png";
import music from "public/images/music.png";
import ccir from "public/images/ccir.png";

type Award = {
  logo: StaticImageData;
  text: string;
};

export default function Awards() {
  const data: Award[] = [
    {
      text: "USACO 80th Internationally | USA Computing Olympiad",
      logo: usaco,
    },
    { text: "USACO Platinum Division | USA Computing Olympiad", logo: usaco },
    { text: "Discover Citadel | Citadel", logo: nontrivial },
    {
      text: "18th Internationally, 2nd U.S. Northeast | AAPT PhysicsBowl",
      logo: aapt,
    },
    {
      text: "CCIR STEM Scholar in Quantum Computing | Cambridge Centre for International Research",
      logo: ccir,
    },
    {
      text: "First Place/Highest Scorer on AMC 12 | MAA/Loomis Chaffee School",
      logo: maa,
    },
    { text: "AIME Qualifier | MAA", logo: maa },
    { text: "Connecticut Math State Team and ARML | CT Math", logo: teams },
    {
      text: "2nd Place in CT/Nationals Qualifier | TEAMS Engineering Competition",
      logo: teams,
    },
    { text: "Award Recipient | The Non-Trivial Fellowship", logo: nontrivial },
    {
      text: "Junior Math Departmental Award | Loomis Chaffee School",
      logo: loomisLogo,
    },
    {
      text: "Junior Science Departmental Award | Loomis Chaffee School",
      logo: loomisLogo,
    },
    {
      text: "Finalist/Medalist | Connecticut Science and Engineering Fair",
      logo: csef,
    },
    {
      text: "Top 100 Kendrick Lamar Listener of 2024 | Apple Music",
      logo: music,
    },
    {
      text: "3x Math Departmental Honors | Loomis Chaffee School",
      logo: loomisLogo,
    },
    {
      text: "2x Science Departmental Honors | Loomis Chaffee School",
      logo: loomisLogo,
    },
    {
      text: "2x Social Science Departmental Honors | Loomis Chaffee School",
      logo: loomisLogo,
    },
    {
      text: "English Departmental Honor | Loomis Chaffee School",
      logo: loomisLogo,
    },
  ];

  return (
    <section className="perspective-[1000px] w-full bg-[#141414] pb-[100px] pt-[150px]">
      <div className="container mb-16">
        <SectionHeading title="Awards" />
      </div>

      <div className="mx-auto flex w-[min(92vw,900px)] flex-col gap-4">
        {data.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 56, rotateX: -18, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.025, 0.2) }}
            className="award-card group relative overflow-hidden rounded-lg p-[1px] transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20 transition-opacity group-hover:opacity-50" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: "-45% 0px -45% 0px" }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 rounded-lg bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0deg,rgba(45,212,191,0.8)_70deg,rgba(251,191,36,0.7)_130deg,transparent_200deg)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="relative flex items-center justify-between rounded-lg border border-white/5 bg-[#141414] px-4 py-4 font-mono text-sm text-gray-200 backdrop-blur-sm md:px-6">
              <div className="flex-1 pr-4">
                <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent transition-colors duration-300 group-hover:to-white">
                  {award.text}
                </span>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/5 p-1.5 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/10">
                <Image
                  src={award.logo}
                  alt=""
                  className="h-full w-full object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
