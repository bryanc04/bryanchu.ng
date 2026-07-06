export const projectsData = {
  cards: [
    {
      id: "pj-insurf",
      title: "Insurf Decision Graph",
      sub: "Graph-transformer plan ranking + statutory cost engine",
      tags: [
        { label: "CDGT", type: "p" },
        { label: "conformal", type: "g" },
        { label: "IRS/CMS", type: "o" },
        { label: "PostgreSQL", type: "t" },
      ],
      defaultOpen: true,
      body: [
        {
          type: "prose",
          text: "Decision intelligence for health insurance plan selection. The engine treats plan choice as a graph problem under uncertainty instead of a flat cost-sort.",
        },
        {
          type: "bullets",
          items: [
            "{purple:CDGT} relational graph transformer with relation-aware attention and 3 message-passing hops",
            "Retrieval-augmented prediction cites k=8 nearest precedents for each recommendation",
            "Counterfactual treatment-effect estimates and provenance-weighted conformal intervals",
            "Path-dependent cost accumulator: deductible burn-down, tiered coinsurance, absorbing out-of-pocket cap",
            "Fail-closed federal plan/rate ingestion where bad data widens uncertainty instead of corrupting ranking",
          ],
        },
      ],
    },
    {
      id: "pj-arb",
      title: "Biophysical Alpha Signals",
      sub: "Sports betting market fatigue model",
      tags: [
        { label: "MediaPipe", type: "t" },
        { label: "Kalman", type: "p" },
        { label: "LSTM", type: "p" },
        { label: "Kelly", type: "g" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "Extracted player-motion signals from broadcast video to test whether fatigue proxies identify pricing dislocations in player-prop markets.",
        },
        {
          type: "bullets",
          items: [
            "{orange:MediaPipe Pose} extracts per-player joint velocities from broadcast footage",
            "Rolling-variance fatigue proxy denoised with a Kalman/RTS smoother",
            "PyTorch LSTM encoder-decoder trained on 3 NBA seasons",
            "Simulated positions sized with quarter-Kelly when model and bookmaker-implied probabilities diverged by >5 percentage points",
          ],
        },
      ],
    },
    {
      id: "pj-dorm",
      title: "Dorm Assignment Optimizer",
      sub: "800-student room assignment",
      tags: [
        { label: "ILP", type: "p" },
        { label: "McCormick", type: "o" },
        { label: "PuLP/CBC", type: "t" },
        { label: "GA heuristic", type: "g" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "Formulated room assignment as a binary linear program, with a parallel genetic algorithm as a fast heuristic for large runs.",
        },
        {
          type: "bullets",
          items: [
            "x[s,r] binary assignment variables with room-capacity and eligibility constraints",
            "Co-room preferences linearized via McCormick envelopes",
            "Exact solve with PuLP/CBC; heuristic path via parallel GA for quick administrative iteration",
            "Interface supports manual exception handling without rebuilding the optimization model",
          ],
        },
      ],
    },
    {
      id: "pj-pelicoin",
      title: "Financial Literacy Platform v2",
      sub: "Loomis Chaffee School · Pelicoin",
      tags: [
        { label: "Supabase", type: "t" },
        { label: "Microsoft API", type: "o" },
        { label: "Firebase", type: "o" },
        { label: "live on campus", type: "g" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "All-in-one management platform for the Financial Literacy Program at Loomis Chaffee. Replaced a fully manual process for balances, tax rates, interest rates, and simulated returns.",
        },
        {
          type: "bullets",
          items: [
            "Students view balances, sign up for events, purchase items, and initiate internal transfers",
            "Admin panel integrates with Excel via Microsoft API for familiar faculty workflows",
            "React + Material UI frontend with Supabase/Firebase backend services",
          ],
        },
      ],
    },
    {
      id: "pj-chem",
      title: "Chemistry Molecule Viewer",
      sub: "Interactive 2D/3D molecule figures",
      tags: [
        { label: "PubChem API", type: "t" },
        { label: "Linear Algebra", type: "p" },
        { label: "AWS", type: "o" },
        { label: "curriculum", type: "g" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "Interactive molecule viewer for the Loomis Chaffee chemistry curriculum, replacing physical model demos with inspectable 2D/3D figures.",
        },
        {
          type: "bullets",
          items: [
            "PubChem API for molecule data and metadata",
            "Linear algebra for element placement and 3D transforms",
            "Angular/React frontends with Python/Flask backend and Firebase/AWS infrastructure",
          ],
        },
      ],
    },
    {
      id: "pj-bb",
      title: "Samsung Billboard Dashboard",
      sub: "Real-time inventory stream",
      tags: [
        { label: "Kafka", type: "o" },
        { label: "Redis", type: "r" },
        { label: "Flask", type: "t" },
        { label: "AWS", type: "o" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "Dashboard for live billboard slot availability and bid metrics, with end-to-end latency under {green:35 ms} from bid event to React re-render.",
        },
        {
          type: "code",
          text: "bid event → Kafka (12 partitions) → Flask consumer\n→ idempotent Redis write → dashboard re-render",
        },
      ],
    },
    {
      id: "pj-pokemon",
      title: "Custom Pokemon Game Portfolio",
      sub: "Interactive 3D portfolio experience",
      tags: [
        { label: "Three.js", type: "t" },
        { label: "WebGL", type: "t" },
        { label: "Blender", type: "o" },
        { label: "portfolio", type: "p" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "A 3D portfolio world where visitors navigate a game scene and discover content through interaction instead of scrolling a static page.",
        },
        {
          type: "bullets",
          items: [
            "Character movement, camera control, object interaction, and scene navigation",
            "Three.js/WebGL rendering with Blender assets",
            "Linear algebra for transform calculations and responsive interaction polish",
          ],
        },
      ],
    },
    {
      id: "pj-workjob",
      title: "Workjob Assigner",
      sub: "500+ student campus-job assignment",
      tags: [
        { label: "Python", type: "t" },
        { label: "React", type: "t" },
        { label: "TypeScript", type: "t" },
        { label: "Mantine UI", type: "o" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "Automatic assignment platform that places students into mandatory campus jobs under schedule constraints, replacing a tight manual schedule-release workflow.",
        },
        {
          type: "bullets",
          items: [
            "Cross-references student free periods against workjob meeting periods",
            "Drag-and-drop interface for targeted manual adjustments after automated placement",
            "Python assignment engine with React/TypeScript frontend",
          ],
        },
      ],
    },
  ],
};
