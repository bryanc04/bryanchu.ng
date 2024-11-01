"use client";

import { useRef } from "react";
import { SectionHeading } from "~/components/ui/section-heading";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import ieee from "public/images/ieee.png";

// CSS variables
const globalStyles = {
  "--black": "#000000",
  "--ash-black": "#222",
  "--white": "#fafafa",
  "--sky": "#00ccff",
  "--green": "#22dddd",
  "--blue": "#1300ff",
  "--dusk": "#6600ff",
  "--purple": "#9900ff",
  "--pink": "#ff0066",
  "--red": "#fe0222",
  "--orange": "#fd7702",
  "--yellow": "#ffbb00",
  "--background": "var(--red)",
  "--accent": "var(--white)",
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ data }: { data: any }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section
      className="relative flex h-screen items-center justify-center"
      style={{ scrollSnapAlign: "center", perspective: "500px" }}
    >
      <div
        ref={ref}
        className="relative mx-5 h-[600px] max-h-[90vh] w-[500px] overflow-hidden"
        style={{ background: "var(--white)", color: "black", padding: "20px" }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
          <div className="font-bold">{data.name}</div>
          <img src={ieee.src} style={{ height: "80px" }} />
        </div>
        <div
          style={{
            padding: "20px",
            height: "80%",
            overflow: "hidden",
          }}
        >
          {data.abstract}
        </div>
        <div
          className="italic"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center",
            width: "fit-content",
            fontSize: "13px",
            marginTop: "10px",
          }}
        >
          Continue reading at:{" "}
          <a
            href={data.url}
            style={{ color: "blue", textDecoration: "underline" }}
          >
            IEEE
          </a>
        </div>
      </div>
      <motion.h2
        className="absolute m-0 text-[56px] font-bold leading-[1.2] tracking-[-3px] text-[var(--accent)]"
        style={{
          y,
          left: "calc(50% + 230px)",
          color: "var(--accent)",
        }}
      >
        #{data.hashtags.toString(" ")}
      </motion.h2>
    </section>
  );
}

export default function Research() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const data = [
    {
      name: "Addressing Data Imbalance in Plant Disease Recognition through Contrastive Learning",
      hashtags: ["AI", " CNNs"],
      abstract:
        "The following study introduces a novel framework for recognizing plant diseases, tackling the issue of imbalanced datasets, which is prevalent in agriculture, a key sector for many economies. Plant diseases can significantly affect crop quality and yield, making early and accurate detection vital for effective disease management. Traditional Convolutional Neural Networks (CNNs) have shown promise in plant disease recognition but often fall short with non-tomato crops due to class imbalance in datasets. The proposed approach utilizes contrastive learning to train a model on the PlantDoc dataset in a self-supervised manner, allowing it to learn meaningful representations from unlabeled data by maximizing the similarity between images based on disease state rather than species. This method shows a marked improvement in accuracy, achieving 87.42% on the PlantDoc dataset and demonstrating its superiority over existing supervised learning methods. The agnostic nature of the model towards plant species allows for universal application in agriculture, offering a significant tool for disease management and enhancing productivity in both existing farms and future smart farming environments.",
      url: "https://ieeexplore.ieee.org/document/10433841",
    },
    {
      name: "DataAgent: Evaluating Large Language Models’ Ability to Answer Zero-Shot, Natural Language Queries",
      hashtags: ["AI", " LLMs"],
      url: "https://ieeexplore.ieee.org/document/10433803",
      abstract: `Conventional processes for analyzing datasets and extracting meaningful information are often time-consuming and laborious. Previous work has identified manual, repetitive coding and data collection as major obstacles that hinder data scientists from undertaking more nuanced labor and high-level projects. To combat this, we evaluated OpenAI’s GPT-3.5 as a "Language Data Scientist" (LDS) that can extrapolate key findings, including correlations and basic information, from a given dataset. The model was tested on a diverse set of benchmark datasets to evaluate its performance across multiple standards, including data science code-generation based tasks involving libraries such as NumPy, Pandas, Scikit-Learn, and TensorFlow, and was broadly successful in correctly answering a given data science query related to the benchmark dataset. The LDS used various novel prompt engineering techniques to effectively answer a given question, including Chain-of-Thought reinforcement and SayCan prompt engineering. Our findings demonstrate great potential for leveraging Large Language Models for low-level, zero-shot data analysis.`,
    },
  ];

  return (
    <>
      <style>
        {`
          * {
            font-family: sofia-pro, sans-serif;
            font-weight: 400;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
          }

          html {
            scroll-snap-type: y proximity;
          }

          ::-webkit-scrollbar {
            height: 5px;
            width: 5px;
            background: var(--background);
          }

          ::-webkit-scrollbar-thumb {
            background: var(--accent);
            -webkit-border-radius: 1ex;
          }

          ::-webkit-scrollbar-corner {
            background: var(--background);
          }

          .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: var(--accent);
            bottom: 100px;
          }
        `}
      </style>

      {/* Parallax section */}
      <section
        className="relative w-full bg-[#141414]"
        style={{
          ...globalStyles,
          color: "var(--accent)",
          paddingTop: "100px",
        }}
      >
        <div
          className="container"
          style={{ marginTop: "100px", height: "200px" }}
        >
          <SectionHeading title="Resefarch" />
          asfadsfsda
        </div>

        <div style={{ marginTop: "-160px" }}>
          {data.map((image, index) => (
            <Image data={image} key={image.name} />
          ))}
        </div>
      </section>
    </>
  );
}
