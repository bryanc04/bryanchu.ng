export const aboutData = {
  cards: [
    {
      id: "about-overview",
      title: "Overview",
      sub: "Brown University · Applied Math-CS + Physics",
      tags: [
        { label: "4.0 GPA", type: "g" },
        { label: "Applied Math-CS, Physics", type: "p" },
        { label: "Brown", type: "b" },
      ],
      defaultOpen: true,
      body: [
        {
          type: "prose",
          text: "I build technical systems where models, data quality, and product constraints have to agree. Right now that means {green:Insurf}: decision intelligence for health insurance, built with graph transformers, statutory cost simulation, and uncertainty-aware ranking.",
        },
        {
          type: "prose",
          muted: true,
          text: "At Brown, I study Applied Mathematics-CS and Physics and research belief formation, limits of arbitrage, and market diffusion.",
        },
      ],
    },
    {
      id: "about-arc",
      title: "Builder Arc",
      sub: "Insurance AI → market research → inference systems → data infrastructure",
      tags: [
        { label: "Insurf", type: "g" },
        { label: "Brown", type: "p" },
        { label: "Dawn", type: "t" },
        { label: "Samsung", type: "o" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "bullets",
          items: [
            { highlight: "Insurf", highlightColor: "green", text: "— graph-transformer decision engine, conformal uncertainty, federal plan/rate ingestion" },
            { highlight: "Brown Research", highlightColor: "purple", text: "— LLM belief extraction and econometrics over equity/bond market diffusion" },
            { highlight: "Dawn Industries", highlightColor: "teal", text: "— LLM inference benchmarks and 3D procedure-trajectory scoring" },
            { highlight: "Samsung", highlightColor: "orange", text: "— Kafka/Redis/AWS real-time dashboard infrastructure under 35 ms latency" },
          ],
        },
        {
          type: "prose",
          muted: true,
          text: "The through-line is reliability under messy reality: incomplete public data, noisy video, drifting sensors, and markets where the measurement layer matters.",
        },
      ],
    },
  
  ],
};
