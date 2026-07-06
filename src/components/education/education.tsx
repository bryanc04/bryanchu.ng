import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "~/components/ui/section-heading";

const experiences = [
  {
    role: "Founder & CTO",
    org: "Insurf",
    period: "Y Combinator S26",
    summary:
      "Sole engineer building decision intelligence for health insurance plan selection.",
    bullets: [
      "Built CDGT, a relational graph transformer over Insurf's decision graph with relation-aware attention, retrieval-augmented predictions, counterfactual treatment effects, and provenance-weighted conformal intervals.",
      "Verified the model end-to-end against a seeded stochastic sandbox of 2,000 synthetic decisions with byte-for-byte reproducibility across embeddings, retrievals, predictions, and 428 prediction cells.",
      "Built a statutory cost engine that simulates deductibles, coinsurance, out-of-pocket caps, and IRS/CMS subsidy math, matching HealthCare.gov figures to the dollar.",
      "Engineered fail-closed ingestion for federal plan and rate feeds so incomplete filings widen uncertainty instead of silently zeroing costs.",
    ],
    tags: ["Graph transformers", "Conformal prediction", "Healthcare data"],
  },
  {
    role: "Undergraduate Research Assistant",
    org: "Brown University",
    period: "2026",
    summary:
      "Researching belief signals, limits of arbitrage, and market diffusion.",
    bullets: [
      "Built LLM pipelines that extract structured belief signals from analyst reports and unstructured text.",
      "Ran downstream econometrics tracing how belief shocks diffuse across equity and bond markets.",
      "Designed double-auction trading experiments calibrated so predicted equilibrium deviations are identifiable in session-level data.",
    ],
    tags: ["LLM extraction", "Econometrics", "Market design"],
  },
  {
    role: "Founding Engineer",
    org: "Dawn Industries",
    period: "Y Combinator S26",
    summary:
      "Benchmarked inference systems and built computer-vision scoring pipelines.",
    bullets: [
      "Benchmarked LLM inference across GPU architectures on RunPod, measuring throughput, latency, and cost per token under quantization and dynamic batching.",
      "Built a vision pipeline tracking 3D hand-joint and tool-tip trajectories from procedure video.",
      "Aligned each run to a reference trajectory with dynamic time warping and scored deviation by 3D-coordinate gap.",
    ],
    tags: ["LLM inference", "Computer vision", "Dynamic time warping"],
  },
  {
    role: "Data Science Intern",
    org: "The Primate Portal Lab @ CMU/RIT",
    period: "2025",
    summary:
      "Built reproducible feature stores and high-volume sensor pipelines.",
    bullets: [
      "Designed a versioned, point-in-time feature store in Python/PostgreSQL with SHA-256 spec hashing, trailing windows, and Parquet storage.",
      "Built multi-sensor time-series pipelines with clock-offset estimation, anti-aliased resampling, and imputation-flagged gap filling.",
      "Rendered 360K-point streams with LTTB downsampling for fast inspection.",
    ],
    tags: ["Python", "PostgreSQL", "Time series"],
  },
  {
    role: "Software Engineer Intern",
    org: "Samsung",
    period: "2024",
    summary:
      "Shipped low-latency streaming infrastructure for ad inventory operations.",
    bullets: [
      "Built a real-time billboard-inventory dashboard with Kafka, Flask, and React that streamed slot availability and bid metrics under 35 ms end-to-end latency.",
      "Implemented Kafka consumer groups with manual offset commits and idempotent Redis writes across 12 partitions.",
      "Deployed on AWS ECS Fargate with GitHub Actions CI/CD.",
    ],
    tags: ["Kafka", "React", "AWS"],
  },
];

const TimelineAnimation = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#141414] px-4 py-24 font-sans text-white md:py-32">
      <SectionHeading
        title="Experience"
        subTitle="Current work, research, and shipped systems"
      />
      <div className="mx-auto mt-16 max-w-5xl">
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-teal-300 via-white/20 to-amber-300 md:left-1/2" />
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.role}-${experience.org}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                className={`relative grid gap-5 pl-12 md:grid-cols-2 md:pl-0 ${
                  index % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
              >
                <div className="absolute left-2 top-6 z-10 h-5 w-5 rounded-full border border-teal-100/80 bg-[#141414] shadow-[0_0_28px_rgba(45,212,191,0.55)] md:left-1/2 md:-translate-x-1/2" />
                <div
                  className={`rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur ${
                    index % 2 === 0 ? "md:mr-10" : "md:ml-10"
                  }`}
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-teal-200/80">
                    {experience.period}
                  </div>
                  <h3 className="mt-3 text-2xl font-bold leading-tight">
                    {experience.role}
                  </h3>
                  <div className="mt-1 text-lg text-neutral-300">
                    {experience.org}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-neutral-300">
                    {experience.summary}
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-200">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-200" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-neutral-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineAnimation;
