export const researchData = {
  cards: [
    {
      id: "rs-supcon",
      title: "Contrastive Learning for Plant Disease",
      sub: "IEEE ICAIC 2024",
      tags: [
        { label: "published", type: "g" },
        { label: "macro-F1", type: "g" },
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
          text: "Supervised contrastive learning for imbalanced plant disease recognition. The right target metric is macro-F1, not accuracy that can hide rare-class failure.",
        },
        {
          type: "bullets",
          items: [
            "ResNet-50 encoder with a 128-dim projection head",
            "Supervised contrastive loss, LARS optimizer, 200 epochs",
            "Outperformed SMOTE and class-weighted cross-entropy on macro-F1 across 39 imbalanced classes",
          ],
        },
      ],
    },
    {
      id: "rs-data",
      title: "DataAgent: LLM Zero-Shot SQL Eval",
      sub: "IEEE ICAIC 2024",
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
          text: "Evaluated whether LLMs can answer natural-language data questions zero-shot, emphasizing execution accuracy over exact string match.",
        },
        {
          type: "bullets",
          items: [
            "Evaluation pipeline: schema serialization (CREATE TABLE + sample rows) → LLM at temperature=0 → execute → compare result sets",
            "{green:Execution accuracy} captures semantic correctness even when two SQL strings differ",
            "Failure taxonomy: hallucinated columns, wrong aggregations, multi-hop join errors, date dialect issues",
          ],
        },
      ],
    },
  ],
};
