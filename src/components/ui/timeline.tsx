"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { sectionHeading } from "../projects/data";
import { SectionHeading } from "./section-heading";
import { TimelineHeading } from "./timeline-heading";

type ProjectUrls = {
  site?: {
    url: any;
    icon: JSX.Element;
  };
  repo?: {
    owner: string;
    name: string;
    showStarCount: boolean;
  };
};

type Card = {
  title: string;
  text: string;
};

export type TimelineEntry = {
  title: string;
  description: string;
  tech: string[];
  cards: { a: Card; b: Card };
  imageUrl?: string;
  videoUrl?: string;
  projectUrls?: ProjectUrls;
};

interface TimelineProps {
  data: TimelineEntry[];
  func: React.Dispatch<React.SetStateAction<boolean>>; // Type for func if it's a state setter
}

export const Timeline: React.FC<TimelineProps> = ({ data, func }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateHeight = () => {
      const rect = element.getBoundingClientRect();
      setHeight(rect.height);
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full font-sans">
      <SectionHeading
        title={sectionHeading.title}
        subTitle={sectionHeading.subTitle}
      />
      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item) => (
          <TimelineHeading key={item.title} entry={item} func={func} />
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700 md:left-8"
        >
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute inset-x-0 top-0 h-full w-[2px] rounded-full bg-gradient-to-t from-amber-300 from-[0%] via-teal-400 via-[45%] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
