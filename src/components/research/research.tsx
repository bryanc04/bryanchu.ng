import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "~/components/ui/section-heading";
import ieee from "public/images/ieee.png";

interface ResearchPaper {
  name: string;
  hashtags: string[];
  abstract: string;
  url: string;
  doi: string;
}

const data: ResearchPaper[] = [
  {
    name: "DataAgent: Evaluating LLMs' Ability to Answer Zero-Shot Natural Language Queries",
    hashtags: ["LLMs", "Text-to-SQL", "Evaluation"],
    url: "https://ieeexplore.ieee.org/document/10433803",
    doi: "10.1109/ICAIC60265.2024.10433803",
    abstract:
      "Evaluated LLM text-to-SQL zero-shot performance using execution accuracy over exact match, then analyzed failure modes including hallucinated columns, wrong aggregations, and multi-hop join errors.",
  },
  {
    name: "Addressing Data Imbalance in Plant Disease Recognition through Contrastive Learning",
    hashtags: ["Computer Vision", "Contrastive Learning", "ResNet-50"],
    abstract:
      "Used supervised contrastive loss with a 128-dim projection head on ResNet-50, trained with LARS for 200 epochs, outperforming SMOTE and class-weighted cross-entropy on macro-F1 across 39 imbalanced classes.",
    url: "https://ieeexplore.ieee.org/document/10433841",
    doi: "10.1109/ICAIC60265.2024.10433841",
  },
];

export default function Research() {
  return (
    <section className="relative w-full overflow-hidden bg-[#141414] px-4 py-24 text-white md:py-32">
      <div className="container">
        <SectionHeading
          title="Research"
          subTitle="Peer-reviewed work in AI systems and applied machine learning"
        />
      </div>
      <div className="container mt-14 grid gap-6 md:grid-cols-2">
        {data.map((paper, index) => (
          <motion.article
            key={paper.name}
            initial={{ opacity: 0, y: 28, rotateX: -6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-teal-200/40"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-start justify-between gap-5">
              <h3 className="text-xl font-bold leading-tight text-white">
                {paper.name}
              </h3>
              <Image
                src={ieee}
                className="h-12 w-16 shrink-0 object-contain opacity-80"
                alt="IEEE logo"
              />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {paper.hashtags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-teal-100"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-neutral-300">
              {paper.abstract}
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-neutral-300 sm:flex-row sm:items-center sm:justify-between">
              <span>doi: {paper.doi}</span>
              <a
                href={paper.url}
                target="_blank"
                className="font-medium text-teal-200 underline-offset-4 hover:underline"
              >
                IEEE
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
