"use client";

import { motion, Variants } from "framer-motion";
import { SectionHeading } from "~/components/ui/section-heading";

import loomisLogo from "public/images/loomis.png";
import rumseyLogo from "public/images/rumsey.png";
import asmp from "public/images/asmp.png";
import stanford from "public/images/stanford.png";

export default function Awards() {
  const data = [
    "2nd Place in U.S. NorthEast/20th Place Internationally | AAPT PhysicsBowl",
    "2nd Place in CT/Nationals Qualifier | TEAMS Engineering Competition",
    "USACO Platnium Division | USA Computing Olympiad",
    "$1000 + $500 (3rd Place) Award | The Non-Trivial Fellowship",
    "Junior Math Departmental Award | Loomis Chaffee School",
    "Junior Science Departmental Award | Loomis Chaffee School",
  ];
  return (
    <section className="w-full bg-[#141414]">
      <div className="container" style={{ marginBottom: "60px" }}>
        <SectionHeading title={"Awards"} />
      </div>

      <div
        style={{
          width: "60%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {data.map((d: any) => (
          <div
            key={d}
            style={{ marginTop: "20px" }}
            className="rounded-md border border-white bg-black px-4 py-3 font-mono text-sm text-white"
          >
            {d}
          </div>
        ))}
      </div>
    </section>
  );
}
