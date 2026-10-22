export const experienceData = {
  cards: [
    {
      id: "ex-ucsc",
      title: "AI Research Intern",
      sub: "University of California, Santa Cruz",
      tags: [
        { label: "current",     type: "g" },
        { label: "ML research", type: "p" },
        { label: "PyTorch",     type: "t" },
        { label: "Docker",      type: "" },
      ],
      defaultOpen: true,
      body: [
        {
          type: "prose",
          text: "{orange:WaveFunction Collapse} — studied whether a Transformer can learn to generate structured tile-based content as well as the classical WFC algorithm. Compared on three axes: {green:diversity}, {green:KL-div}, and {green:constraint satisfaction rate}.",
        },
        {
          type: "bullets",
          items: [
            "Implemented WFC from scratch: AC-3 propagation, Shannon entropy cell selection, frequency-weighted tile collapse",
            "Trained 4-layer Transformer (d=128, 4 heads) — autoregressive LM on linearized tile grids",
            "AdamW + linear warmup + cosine decay. Mixed precision (FP16 + GradScaler). Gradient clipping.",
            "Docker pinned to CUDA 11.8 + cuDNN 8. GitLab CI benchmarks on gpu-runner on every push.",
            "Bayesian hyperparameter sweep via wandb.sweep() with Expected Improvement acquisition.",
          ],
        },
      ],
    },
    {
      id: "ex-cmu",
      title: "Data Science Intern",
      sub: "Primate Portal Lab @ CMU / RIT",
      tags: [
        { label: "signal processing", type: "t" },
        { label: "SQL",               type: "o" },
        { label: "feature store",     type: "g" },
        { label: "React",             type: "" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "Multi-sensor behavioral data — {orange:4+ sensors} (100Hz accel, 30fps video, 1Hz GPS) each on independent clocks drifting at ~20 ppm. 0.72s offset over 10 hours corrupts any cross-sensor analysis.",
        },
        {
          type: "bullets",
          items: [
            "Cross-correlation (scipy.signal.correlate) on shared anchor events to find clock offsets",
            "Anti-aliased resampling with resample_poly — Kaiser FIR pre-filter to prevent aliasing",
            "Gap fill policy: linear <500ms · cubic spline 500ms–2s · boolean flag >2s (never silently fabricate)",
            "Feature store: SHA-256 spec-hash for auto cache invalidation. Trailing windows only — no data leakage.",
            "LTTB downsampling (360K→2K points) for Flask/React visualization without losing peaks/valleys",
          ],
        },
      ],
    },
    {
      id: "ex-samsung",
      title: "Software Engineer Intern",
      sub: "Samsung Cheil",
      tags: [
        { label: "Kafka",  type: "o" },
        { label: "AWS ECS",type: "o" },
        { label: "Redis",  type: "r" },
        { label: "CI/CD",  type: "g" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "Real-time billboard inventory dashboard. Hundreds of billboards → multiple concurrent advertisers watching live bid prices. End-to-end latency: {green:~33ms} from bid click to all open dashboards updated.",
        },
        {
          type: "code",
          text: "billboard → Kafka (12 parts) → Flask consumer → Redis hset\n→ Pub/Sub notify → SSE push → React setState()",
        },
        {
          type: "bullets",
          items: [
            "Kafka: hash(billboard_id) % 12 for partition assignment — events per billboard always ordered",
            "at-least-once delivery (commit after Redis write) — state updates idempotent so duplicates are harmless",
            "{orange:GIL bug found & fixed} — consumer held GIL during burst → ALB health check timeout → ECS replacement (30s delay). Fix: consumer isolated to separate OS process.",
            "Rolling zero-downtime deploy: GitHub Actions → ECR → new ECS Task Definition → drain old containers",
          ],
        },
      ],
    },
  ],
};
