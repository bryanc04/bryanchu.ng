"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "~/components/ui/section-heading";
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

export default function Awards() {
  const data = [
    [
      "2nd Place in U.S. NorthEast/20th Place Internationally | AAPT PhysicsBowl",
      aapt,
    ],
    [
      "2nd Place in CT/Nationals Qualifier | TEAMS Engineering Competition",
      teams,
    ],
    ["USACO Platnium Division | USA Computing Olympiad", usaco],
    ["$1000 + $500 (3rd Place) Award | The Non-Trivial Fellowship", nontrivial],
    ["First Place/Highest Scorer on AMC 12 | MAA/Loomis Chaffee School", maa],

    ["Junior Math Departmental Award | Loomis Chaffee School", loomisLogo],
    ["Junior Science Departmental Award | Loomis Chaffee School", loomisLogo],
    ["CCIR STEM Scholar | Camrbidge Centre for International Research", ccir],
    [
      "American Invitational Mathematics Examination (AIME) Qualifier | MAA",
      maa,
    ],
    ["Finalist/Medalist | Connecticut Science and Engineering Fair", csef],
    ["3rd Place in CT/Internationals Qualifier | HOSA Math", hosa],
    ["Top 100 Kendrick Lamar Listener of 2024 | Apple Music", music],
    ["3x Math Departmental Honors | Loomis Chaffee School", loomisLogo],
    ["2x Science Departmental Honors | Loomis Chaffee School", loomisLogo],
    [
      "2x Social Science Departmental Honors | Loomis Chaffee School",
      loomisLogo,
    ],

    ["English Departmental Honor | Loomis Chaffee School", loomisLogo],
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-[#141414] pb-[100px] pt-[150px]">
      <div className="container mb-16">
        <SectionHeading title="Awards" />
      </div>

      <motion.div
        className="mx-auto w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {data.map((award) => (
          <motion.div
            key={award[0]}
            variants={itemVariants}
            className="mt-5 rounded-md border border-black bg-white px-4 py-3 font-mono text-sm text-black"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1 pr-4">{award[0]}</div>
              <div className="flex h-full items-center justify-end">
                <img
                  src={award[1].src}
                  alt=""
                  className="h-6 w-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
