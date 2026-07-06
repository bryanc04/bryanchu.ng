export const experienceData = {
  cards: [
    {
      id: "ex-insurf",
      title: "Founder & CTO",
      sub: "Insurf · Y Combinator S26",
      tags: [
        { label: "current", type: "g" },
        { label: "graph transformer", type: "p" },
        { label: "health insurance", type: "t" },
        { label: "solo engineer", type: "o" },
      ],
      defaultOpen: true,
      body: [
        {
          type: "prose",
          text: "Sole engineer building decision intelligence for health insurance. Core system: {purple:CDGT}, a relational graph transformer over Insurf's decision graph with provenance-aware uncertainty.",
        },
        {
          type: "bullets",
          items: [
            "Relation-aware attention with 3 message-passing hops; retrieval-augmented predictions cite the k=8 nearest precedents",
            "Counterfactual treatment-effect estimation and provenance-weighted conformal intervals that widen as cell support thins",
            "Seeded stochastic sandbox of 2,000 synthetic decisions verifies embeddings, retrievals, predictions, and all 428 prediction cells byte-for-byte",
            "Cost engine simulates deductible burn-down, tiered coinsurance, absorbing out-of-pocket caps, and IRS/CMS subsidy math matching HealthCare.gov to the dollar",
            "Fail-closed ingestion for federal plan/rate feeds: incomplete issuer filings widen uncertainty instead of silently zeroing costs",
          ],
        },
      ],
    },
    {
      id: "ex-brown",
      title: "Undergraduate Research Assistant",
      sub: "Brown University",
      tags: [
        { label: "LLM extraction", type: "p" },
        { label: "econometrics", type: "g" },
        { label: "market design", type: "t" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "Researching how belief shocks propagate across markets and how bounded arbitrage appears in controlled trading experiments.",
        },
        {
          type: "bullets",
          items: [
            "Built LLM pipelines that extract structured belief signals from analyst reports and other unstructured text",
            "Ran downstream econometrics tracing belief-shock diffusion across equity and bond markets",
            "Designed double-auction experiments on limits of arbitrage and belief formation; calibrated parameters so equilibrium deviations are identifiable in session-level data",
          ],
        },
      ],
    },
    {
      id: "ex-dawn",
      title: "Founding Engineer",
      sub: "Dawn Industries · Y Combinator S26",
      tags: [
        { label: "LLM inference", type: "p" },
        { label: "RunPod", type: "t" },
        { label: "computer vision", type: "g" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "Benchmarked inference economics and built a procedure-video scoring pipeline from 3D hand/tool trajectories.",
        },
        {
          type: "bullets",
          items: [
            "Benchmarked LLM throughput, latency, and $/token across GPU architectures under quantization and dynamic batching",
            "Tracked 3D hand-joint and tool-tip trajectories from procedure video",
            "Aligned each run to a golden reference with dynamic time warping and scored deviation by 3D-coordinate gap",
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
            "Designed a versioned, point-in-time feature store in Python/PostgreSQL with SHA-256 spec hashing and trailing windows",
            "Stored reproducible backtest data as Parquet at 5-10x compression versus CSV, eliminating lookahead",
            "Cross-correlation clock-offset estimation, anti-aliased resampling, and imputation-flagged gap filling",
            "Rendered 360K-point streams via LTTB downsampling for fast inspection without losing peaks/valleys",
          ],
        },
      ],
    },
    {
      id: "ex-samsung",
      title: "Software Engineer Intern",
      sub: "Samsung",
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
          text: "Real-time billboard inventory dashboard. Advertisers watched live slot availability and bid metrics with end-to-end latency under {green:35 ms} from bid event to dashboard re-render.",
        },
        {
          type: "code",
          text: "billboard → Kafka (12 parts) → Flask consumer → Redis hset\n→ Pub/Sub notify → SSE push → React setState()",
        },
        {
          type: "bullets",
          items: [
            "Kafka: hash(billboard_id) % 12 for partition assignment — events per billboard always ordered",
            "Manual offset commits and idempotent Redis writes: at-least-once delivery across 12 partitions with zero data loss on container restarts",
            "Deployed on AWS ECS Fargate via GitHub Actions CI/CD",
          ],
        },
      ],
    },
  ],
};
