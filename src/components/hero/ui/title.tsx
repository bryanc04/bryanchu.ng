"use client";

import { title } from "../data";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const highlights = [
  { label: "Brown", value: "Applied Math-CS + Physics" },
  { label: "Insurf", value: "Founder & CTO, YC S26" },
  { label: "Focus", value: "AI systems + decision science" },
];

export function Title() {
  return (
    <div className="z-10 w-full grow basis-1 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-balance text-center text-48-96 font-bold leading-none text-white"
      >
        {title.plainText}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.65, ease: "easeOut" }}
        className="mx-auto mt-5 min-h-8 max-w-3xl text-center text-lg font-light text-muted-foreground md:text-xl"
      >
        <TypeAnimation
          sequence={title.subTitle.flatMap((s: string, index: number) => [
            s,
            index === 0 ? 1200 : 1400,
          ])}
          wrapper="span"
          speed={50}
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.34, duration: 0.65, ease: "easeOut" }}
        className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
      >
        {highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-center shadow-[0_0_40px_rgba(20,184,166,0.08)] backdrop-blur"
          >
            <div className="text-xs uppercase text-teal-200/80">
              {item.label}
            </div>
            <div className="mt-1 text-sm font-medium leading-snug text-white">
              {item.value}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
