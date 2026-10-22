export const contactData = {
  shellCommands: {
    help: () => [
      `<span style="color:var(--accent)">── available commands ──────────────────────────────</span>`,
      `  <span style="color:var(--p)">whois</span>         short bio`,
      `  <span style="color:var(--p)">email</span>         contact email`,
      `  <span style="color:var(--p)">website</span>       personal site`,
      `  <span style="color:var(--p)">availability</span>  what I'm looking for`,
      `  <span style="color:var(--p)">papers</span>        IEEE DOIs`,
      `  <span style="color:var(--p)">stack</span>         quick tech dump`,
      `  <span style="color:var(--p)">uname</span>         system info (dynamic)`,
      `  <span style="color:var(--p)">ps</span>            running procs`,
      `  <span style="color:var(--p)">fortune</span>       wisdom`,
      `  <span style="color:var(--p)">coffee</span>        critical`,
      `  <span style="color:var(--p)">clear</span>         clear terminal`,
      `  <span style="color:var(--p)">back</span>          return home`,
    ],
    whois: () => [
      `<span style="color:var(--txt);font-weight:700">Bryan Chung</span>`,
      `Brown University · Applied Math-CS + Physics · <span style="color:var(--green)">GPA 4.0</span>`,
      `IEEE ICAIC 2024 first author (contrastive learning).`,
      `USACO Platinum. PhysicsBowl 18th internationally.`,
      `Built ML pipelines, streaming systems, combinatorial optimizers.`,
    ],
    email:   () => [`<span style="color:var(--p)">cbryan2829@gmail.com</span>`],
    website: () => [`<span style="color:var(--p)">→  bryanchu.ng</span>`],
    papers:  () => [
      `<span style="color:var(--accent)">[first author]</span> doi: <span style="color:var(--p)">10.1109/ICAIC60265.2024.10433841</span>`,
      `               Contrastive Learning for Plant Disease Imbalance`,
      `<span style="color:var(--accent)">[co-author]</span>    doi: <span style="color:var(--p)">10.1109/ICAIC60265.2024.10433803</span>`,
      `               DataAgent: LLM Zero-Shot SQL Evaluation`,
    ],
    availability: () => [
      `<span style="color:var(--txt);font-weight:700">Open to internship and research opportunities.</span>`,
      `Particularly excited by ML research, systems at scale, quant.`,
      `→ <span style="color:var(--accent)">cbryan2829@gmail.com</span>`,
      `→ <span style="color:var(--accent)">bryanchu.ng</span>`,
    ],
    stack: () => [
      `<span style="color:var(--muted)">languages</span>  Python C++ Go SQL JS/TS C Lua`,
      `<span style="color:var(--muted)">ml/math  </span>  PyTorch TF scipy numpy Transformers Kalman`,
      `<span style="color:var(--muted)">systems  </span>  Kafka Docker Redis AWS PostgreSQL GitLab-CI`,
      `<span style="color:var(--muted)">algos    </span>  Seg-tree Centroid-decomp CHT Dinic Tarjan ILP GA`,
    ],
    fortune: () => {
      const q = [
        `"Make it work, make it right, make it fast."  — Kent Beck`,
        `"All models are wrong, but some are useful."  — Box`,
        `"Simplicity is a great virtue; it requires hard work."  — Dijkstra`,
        `"Programs must be written for people to read."  — SICP`,
        `"A 2% suboptimal solution in 5min beats optimal in 4hrs."`,
        `"Entropy always wins. Make peace with it."`,
      ];
      return [`<span style="color:var(--accent)">${q[Math.floor(Math.random() * q.length)]}</span>`];
    },
    coffee: () => [
      `<span style="color:var(--accent)">$ brew coffee --ristretto</span>`,
      `  grinding   <span style="color:var(--green)">████████</span>░░`,
      `  extracting <span style="color:var(--green)">████████████████</span>`,
      ``,
      `  ☕  <span style="color:var(--p)">ready.</span>  productivity *= 1.4;`,
    ],
  },
};
