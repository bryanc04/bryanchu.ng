export const researchData = {
  cards: [
    {
      id: "rs-supcon",
      title: "Contrastive Learning for Plant Disease",
      sub: "First Author · IEEE ICAIC 2024 · Houston TX",
      tags: [
        { label: "first author", type: "g" },
        { label: "published",    type: "g" },
        { label: "IEEE 2024",    type: "p" },
        { label: "ResNet-50",    type: "t" },
      ],
      defaultOpen: true,
      body: [
        {
          type: "kv",
          rows: [{ key: "doi", value: "10.1109/ICAIC60265.2024.10433841", valueColor: "accent" }],
        },
        {
          type: "prose",
          text: "{orange:Problem:} PlantVillage dataset — 38 disease classes, severely imbalanced (some classes <100 images vs >10,000). Standard CE loss: model predicts \"healthy\" for everything, 80%+ accuracy, {red:0% recall} on rare diseases.",
        },
        {
          type: "bullets",
          items: [
            "{purple:SupCon loss} directly shapes embedding geometry — all same-class samples are positives. With 2-3 rare-class samples per batch, still pulls them together.",
            "Architecture: ImageNet-pretrained ResNet-50 → 2048-dim h → projector MLP → 128-dim z. SupCon on z; classification uses h (z discarded — projector absorbs augmentation invariances).",
            "NT-Xent: L_i = −log[exp(sim(z_i,z_j)/τ) / Σ exp(sim(z_i,z_k)/τ)]. Temperature τ controls hard-negative focus.",
            "Two-stage: Stage 1 SupCon 200 epochs LARS optimizer. Stage 2 freeze encoder + linear head with class-weighted CE.",
            "Outperformed SMOTE, Focal Loss, class-weighted CE on macro-averaged F1 (the correct metric for imbalance).",
          ],
        },
      ],
    },
    {
      id: "rs-data",
      title: "DataAgent: LLM Zero-Shot SQL Eval",
      sub: "Co-Author · IEEE ICAIC 2024 · Houston TX",
      tags: [
        { label: "co-author",  type: "t" },
        { label: "published",  type: "g" },
        { label: "IEEE 2024",  type: "p" },
        { label: "LLM eval",   type: "" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "kv",
          rows: [{ key: "doi", value: "10.1109/ICAIC60265.2024.10433803", valueColor: "accent" }],
        },
        {
          type: "prose",
          text: "Can LLMs answer natural-language data questions zero-shot (no examples)? Zero-shot is harder but more practical — you cannot write custom examples for every new database.",
        },
        {
          type: "bullets",
          items: [
            "Evaluation pipeline: schema serialization (CREATE TABLE + sample rows) → LLM at temperature=0 → execute → compare result sets",
            "{green:Execution accuracy (EX)} vs exact match (EM): two queries expressing the same logic but written differently score EX=1, EM=0. EX measures what matters.",
            "Failure taxonomy: hallucinated columns · wrong aggregation · JOIN type errors · date dialect · multi-hop failures",
          ],
        },
      ],
    },
    {
      id: "rs-wfc",
      title: "WFC vs Neural Structured Generation",
      sub: "Ongoing · UCSC AI Lab",
      tags: [
        { label: "ongoing",       type: "y" },
        { label: "UCSC",          type: "g" },
        { label: "Transformer",   type: "p" },
        { label: "eval metrics",  type: "" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "WFC guarantees {green:CSR=1.0} (perfect local constraint satisfaction) but has no global structure awareness. Transformers learn global coherence but occasionally violate local tile rules. Building comprehensive eval benchmarks to quantify the tradeoff.",
        },
        {
          type: "bullets",
          items: [
            "Three-axis eval: pairwise Hamming diversity · KL-div from training distribution · constraint satisfaction rate",
            "Looking at hybrid approach: Transformer for global structure, WFC as post-processor for local consistency",
          ],
        },
      ],
    },
  ],
};
