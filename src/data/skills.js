export const skillsData = {
  cards: [
    {
      id: "sk-langs",
      title: "Languages",
      sub: "Python · C++ · JS/TS · SQL · Go · C · Lua",
      tags: [
        { label: "systems", type: "o" },
        { label: "web", type: "t" },
        { label: "scripting", type: "" },
      ],
      defaultOpen: true,
      type: "bars",
      bars: [
        { label: "Python",        pct: 95 },
        { label: "C++",           pct: 85 },
                { label: "C",             pct: 85 },

        { label: "JavaScript/TS", pct: 82 },
        { label: "SQL",           pct: 82 },
        { label: "Go",            pct: 72 },
        { label: "Lua",           pct: 70 },
        { label: "Ruby on Rails", pct: 65 },
      ],
    },
    {
      id: "sk-ml",
      title: "ML / Math Stack",
      sub: "PyTorch · SciPy · Contrastive Learning · Kalman",
      tags: [
        { label: "research", type: "g" },
        { label: "IEEE paper", type: "p" },
      ],
      defaultOpen: false,
      type: "bars",
      bars: [
        { label: "PyTorch",            pct: 92 },
        { label: "NumPy / SciPy",      pct: 90 },
        { label: "Contrastive ML",     pct: 85 },
        { label: "TensorFlow",         pct: 80 },
        { label: "Kalman Filter",      pct: 80 },
        { label: "Information Theory", pct: 82 },
      ],
    },
    {
      id: "sk-infra",
      title: "Systems & Infra",
      sub: "Kafka · Docker · Redis · AWS · PostgreSQL",
      tags: [
        { label: "production", type: "o" },
        { label: "internship", type: "" },
      ],
      defaultOpen: false,
      type: "bars",
      bars: [
        { label: "Docker",      pct: 88 },
        { label: "Apache Kafka",pct: 82 },
        { label: "Redis",       pct: 80 },
        { label: "AWS ECS/ECR", pct: 78 },
        { label: "PostgreSQL",  pct: 80 },
        { label: "GitLab CI",   pct: 85 },
      ],
    },
    {
      id: "sk-algos",
      title: "Algorithms (USACO Platinum)",
      sub: "Advanced competitive programming techniques",
      tags: [
        { label: "Platinum", type: "y" },
        { label: "research-level", type: "p" },
      ],
      defaultOpen: false,
      type: "bullets",
      bullets: [
        "Lazy segment tree + range update / range query",
        "Centroid decomposition — O(n log n) tree-path queries",
        "Convex hull trick (CHT) — DP optimisation",
        "Dinic's max flow · Tarjan's SCC",
        "Branch-and-bound ILP · Genetic algorithms (OX crossover)",
        "AC-3 constraint propagation · Bayesian hyperparameter search",
      ],
    },
  ],
};
