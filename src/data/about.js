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
          text: "I'm drawn to challenges and problem-solving. I am particularly interested in solving problems using modern computer science techniques, and applying such skills to mathematics, physics, trading, or general optimizations in real-life.",
        },
        {
          type: "prose",
          muted: true,
          text: "",
        },
      ],
    },
    {
      id: "about-arc",
      title: "Internship Arc",
      sub: "Systems → Data Science → ML Research",
      tags: [
        { label: "Samsung Cheil", type: "o" },
        { label: "CMU/RIT", type: "t" },
        { label: "UCSC AI", type: "g" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "bullets",
          items: [
            { highlight: "Samsung Cheil", highlightColor: "orange", text: "— systems engineering (Kafka, AWS ECS, real-time dashboards)" },
            { highlight: "CMU/RIT", highlightColor: "teal", text: "— data science (multi-sensor pipelines, SQL feature stores, signal processing)" },
            { highlight: "UCSC AI Lab", highlightColor: "green", text: "— ML research (WaveFunction Collapse, Transformer training, eval benchmarks)" },
          ],
        },
        {
          type: "prose",
          muted: true,
          text: "Each role deepened a different layer of the stack — starting at infrastructure, moving through data, arriving at research.",
        },
      ],
    },
  
  ],
};
