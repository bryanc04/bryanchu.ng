import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import { SectionHeading } from "~/components/ui/section-heading";
import ieee from "public/images/ieee.png";

interface ResearchPaper {
  name: string;
  hashtags: string[];
  abstract: string;
  url: string;
}

const data: ResearchPaper[] = [
  {
    name: "Addressing Data Imbalance in Plant Disease Recognition through Contrastive Learning",
    hashtags: ["AI", " CNNs"],
    abstract:
      "The following study introduces a novel framework for recognizing plant diseases, tackling the issue of imbalanced datasets, which is prevalent in agriculture, a key sector for many economies. Plant diseases can significantly affect crop quality and yield, making early and accurate detection vital for effective disease management. Traditional Convolutional Neural Networks (CNNs) have shown promise in plant disease recognition but often fall short with non-tomato crops due to class imbalance in datasets. The proposed approach utilizes contrastive learning to train a model on the PlantDoc dataset in a self-supervised manner, allowing it to learn meaningful representations from unlabeled data by maximizing the similarity between images based on disease state rather than species. This method shows a marked improvement in accuracy, achieving 87.42% on the PlantDoc dataset and demonstrating its superiority over existing supervised learning methods. The agnostic nature of the model towards plant species allows for universal application in agriculture, offering a significant tool for disease management and enhancing productivity in both existing farms and future smart farming environments.",
    url: "https://ieeexplore.ieee.org/document/10433841",
  },
  {
    name: "DataAgent: Evaluating Large Language Models' Ability to Answer Zero-Shot, Natural Language Queries",
    hashtags: ["AI", " LLMs"],
    url: "https://ieeexplore.ieee.org/document/10433803",
    abstract: `Conventional processes for analyzing datasets and extracting meaningful information are often time-consuming and laborious. Previous work has identified manual, repetitive coding and data collection as major obstacles that hinder data scientists from undertaking more nuanced labor and high-level projects. To combat this, we evaluated OpenAI's GPT-3.5 as a "Language Data Scientist" (LDS) that can extrapolate key findings, including correlations and basic information, from a given dataset. The model was tested on a diverse set of benchmark datasets to evaluate its performance across multiple standards, including data science code-generation based tasks involving libraries such as NumPy, Pandas, Scikit-Learn, and TensorFlow, and was broadly successful in correctly answering a given data science query related to the benchmark dataset. The LDS used various novel prompt engineering techniques to effectively answer a given question, including Chain-of-Thought reinforcement and SayCan prompt engineering. Our findings demonstrate great potential for leveraging Large Language Models for low-level, zero-shot data analysis.`,
  },
];

const to = (i: number) => ({
  x: 0,
  y: i * 4,
  scale: 1,
  rot: -2 + Math.random() * 4,
  delay: i * 50,
});

const from = (i: number) => ({
  x: 0,
  y: 0,
  scale: 1,
  rot: 0,
});

const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(10deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(data.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);
      void api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === data.length)
        setTimeout(() => {
          gone.clear();
          void api.start((i) => to(i));
        }, 600);
    },
  );

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {/* <div
        style={{
          color: "white",
          textAlign: "center",
          height: "100%",
          position: "absolute",
        }}
      >
        Press and slide left/right to see next
      </div> */}
      <div className="relative mb-16 flex items-center justify-center">
        {" "}
        {/* Adjust margin for proper spacing */}
        {props.map(({ x, y, rot, scale }, i) => {
          const paper = data[i];
          if (!paper) return null;

          return (
            <animated.div
              key={i}
              style={{
                x,
                y,
                position: "absolute",
                width: "500px",
                height: "600px",
                willChange: "transform",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <animated.div
                {...bind(i)}
                style={{
                  transform: interpolate([rot, scale], trans),
                  width: "100%",
                  height: "100%",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "20px",
                  overflow: "hidden",
                  touchAction: "none",
                  cursor: "grab",
                  willChange: "transform",
                  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div
                  className="grid grid-cols-2"
                  style={{ gridTemplateColumns: "70% 30%" }}
                >
                  <div className="font-bold">{paper.name}</div>
                  <img src={ieee.src} className="h-20" alt="IEEE logo" />
                </div>
                <div className="h-4/5 overflow-hidden p-5">
                  {paper.abstract}
                </div>
                <div className="mx-auto mt-2 text-center text-sm italic">
                  Continue reading at:{" "}
                  <a href={paper.url} className="text-blue-600 underline">
                    IEEE
                  </a>
                </div>
              </animated.div>
            </animated.div>
          );
        })}
      </div>
    </div>
  );
}

export default function Research() {
  return (
    <section
      className="relative min-h-screen w-full bg-[#141414]"
      style={{ color: "black" }}
    >
      <div className="container h-48 pt-40">
        <SectionHeading
          title="Research"
          subTitle="        Hold and slide left/right to see next
"
        />
      </div>
      <Deck />
    </section>
  );
}
