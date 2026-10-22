export const projectsData = {
  cards: [
    {
      id: "pj-arb",
      title: "Biophysical Performance Arbitrage",
      sub: "NBA player prop betting model",
      tags: [
        { label: "MediaPipe", type: "t" },
        { label: "Kalman",    type: "p" },
        { label: "LSTM",      type: "p" },
        { label: "Kelly",     type: "g" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "Bookmakers price props on season averages — they don't model in-game fatigue. A player who has run 2.5 miles in intense defense shoots measurably worse. This pipeline exploits that gap.",
        },
        {
          type: "bullets",
          items: [
            "{orange:MediaPipe Pose} — 33 body keypoints per frame, no CV training required",
            "Motion spread = variance of joint speeds over 2-min sliding window — fatigue signature",
            "Kalman smoother (pykalman RTS) removes MediaPipe occlusion spikes. .em() fits noise params automatically.",
            "PyTorch LSTM: 5min motion spread history → predicted accuracy for next 2-min window",
            "Kelly sizing: edge/odds. Quarter-Kelly in practice. Result: {green:19% expected return} across 3 NBA seasons",
          ],
        },
      ],
    },

    {
      id: "pj-dorm",
      title: "Dorm Assignment Optimizer",
      sub: "Loomis Chaffee School — 800 students",
      tags: [
        { label: "ILP",           type: "p" },
        { label: "Genetic Algo",  type: "o" },
        { label: "Lua scripting", type: "t" },
        { label: "live on campus",type: "g" },
      ],
      defaultOpen: true,
      body: [
        {
          type: "prose",
          text: "Assigning 800 students to 400 rooms. Two engines — {purple:ILP} (provably optimal, slow) and {orange:GA} (near-optimal, fast) — covering each other's blind spots.",
        },
        {
          type: "prose",
          muted: true,
          label: "ILP (Binary LP):",
          labelColor: "purple",
          text: "x[s,r] ∈ {0,1} for every (student,room) pair. Quadratic preference terms linearized via McCormick envelopes. Solved by PuLP/CBC with branch-and-bound.",
        },
        {
          type: "prose",
          muted: true,
          label: "GA:",
          labelColor: "orange",
          text: "Chromosome = array[800] of room IDs. Order Crossover, 2% mutation, elitism. multiprocessing.Pool bypasses GIL for parallel fitness evaluation.",
        },
        {
          type: "prose",
          muted: true,
          label: "Lua layer:",
          labelColor: "teal",
          text: "Admins modify constraints without redeploying. Lua interpreter embedded in Python/Flask backend.",
        },
        {
          type: "metrics2col",
          rows: [
            { key: "Y1 complaints",   value: "↓ 72%", color: "green" },
            { key: "Y2 complaints",   value: "↓ 55%", color: "green" },
            { key: "Y1 satisfaction", value: "↑ 32%", color: "green" },
            { key: "Y2 satisfaction", value: "↑ 35%", color: "green" },
          ],
        },
      ],
    },       {
      id: "pj-chaos",
      title: "Chaotic Systems Playground",
      sub: "Lorenz attractor · coupled oscillators (in progress)",
      tags: [
        { label: "SciPy",       type: "t" },
        { label: "RK45",        type: "p" },
        { label: "SDE",         type: "o" },
        { label: "in progress", type: "y" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "Chaotic systems: deterministic but exponentially sensitive to initial conditions. Two trajectories 0.0001 apart diverge completely — this is why long-range weather forecasting is fundamentally impossible.",
        },
        {
          type: "bullets",
          items: [
            "Lorenz ODEs numerically integrated by solve_ivp (RK45) at rtol=1e-10 — tight tolerance prevents error amplification",
            "Coupled pendulums: 4-ODE system, coupling strength slider triggers chaos transition live",
            "Langevin SDE noise injection — numpy.random.normal(0,σ) added each step",
            "Phase plots (position vs velocity) show bifurcation in real time as ρ is swept",
            "matplotlib.animation.FuncAnimation at ~20fps, matplotlib.widgets.Slider for interactive params",
          ],
        },
      ],
    }, {
      id: "pj-pelicoin",
      title: "Financial Literacy Platform v2",
      sub: "Loomis Chaffee School · Pelicoin",
      tags: [
        { label: "Supabase",       type: "t" },
        { label: "Microsoft API",  type: "o" },
        { label: "Firebase",       type: "o" },
        { label: "live on campus", type: "g" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "All-in-one management platform for the Financial Literacy Program at Loomis Chaffee. Replaced a fully manual process — Dr. Fisher previously adjusted tax rates, interest rates, stock/bond returns, and Pelicoin balances for every student individually.",
        },
        {
          type: "bullets",
          items: [
            "Students can view balances, sign up for events, purchase items, and initiate internal transfers",
            "Functions as a full banking app with real-time balance updates",
            "Admin panel lets Dr. Fisher manage everything through an integrated Excel file via Microsoft API",
            "Stack: React + Material UI frontend, Supabase + Firebase backend",
          ],
        },
      ],
    },
    {
      id: "pj-chem",
      title: "Chemistry Molecule Viewer",
      sub: "Loomis Chaffee Chemistry Department",
      tags: [
        { label: "PubChem API",   type: "t" },
        { label: "Linear Algebra",type: "p" },
        { label: "AWS",           type: "o" },
        { label: "live in use",   type: "g" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "Interactive 2D/3D molecule viewer for the Loomis Chaffee chemistry curriculum. Replaced manual physical model building with a web app now integrated into classes.",
        },
        {
          type: "bullets",
          items: [
            "PubChem API for molecule data; linear algebra to calculate element positions in 3D space",
            "2D and 3D viewing modes; students and teachers can interact with any molecule",
            "Stack: Angular + React frontend, Python/Flask backend, Firebase + AWS infrastructure",
            "Now integrated into the Loomis Chaffee chemistry curriculum",
          ],
        },
      ],
    },
        {
      id: "pj-pokemon",
      title: "Custom Pokémon Game Portfolio",
      sub: "Interactive 3D portfolio experience",
      tags: [
        { label: "Three.js",       type: "t" },
        { label: "WebGL",          type: "t" },
        { label: "Blender",        type: "o" },
        { label: "Framer Motion",  type: "p" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "An online game where users control my dog (Pommy) in a Pokémon world to navigate my portfolio. Uses WebGL and Three.js for 3D rendering, with Blender assets.",
        },
        {
          type: "bullets",
          items: [
            "w-a-s-d controls to navigate Pommy; press space near the arrow marker to access portfolio sections",
            "Hold cursor and drag to change viewing angles; soccer ball physics for Pommy to kick around",
            "Linear algebra for transform calculations; Framer Motion for UI transitions",
            "Planned updates: faster rendering, clearer graphics, wild Pokémon encounters",
          ],
        },
      ],
    },

    {
      id: "pj-workjob",
      title: "Workjob Assigner",
      sub: "Loomis Chaffee School — 500+ students",
      tags: [
        { label: "Python",     type: "t" },
        { label: "React",      type: "t" },
        { label: "TypeScript", type: "t" },
        { label: "Mantine UI", type: "o" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "Automatic assignment platform that places 500+ students into mandatory campus workjobs. Previously done manually by Ms. Conklin within a tight schedule-release window of a few days.",
        },
        {
          type: "bullets",
          items: [
            "Algorithm cross-references each student's free periods against workjob meeting periods",
            "Drag-and-drop UI for manual adjustments after the automated pass",
            "Stack: Python assignment engine, React + TypeScript + Mantine UI frontend",
          ],
        },
      ],
    },

    {
      id: "pj-bb",
      title: "Samsung Billboard Dashboard",
      sub: "Real-time inventory dashboard",
      tags: [
        { label: "Kafka", type: "o" },
        { label: "Redis", type: "r" },
        { label: "SSE",   type: "t" },
        { label: "AWS",   type: "o" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "End-to-end latency {green:~33ms} from bid placement to all dashboards updated. See experience page for the full architecture and GIL bug story.",
        },
        {
          type: "code",
          text: "t=0ms   click \"Place Bid\"\nt=15ms  Flask validates → writes PostgreSQL\nt=20ms  publishes BID_PLACED → Kafka\nt=26ms  consumer reads → Redis hset\nt=30ms  SSE push → all open browsers\nt=33ms  React re-renders — live update",
        },
      ],
    },
    {
      id: "pj-xc",
      title: "XC Scorer",
      sub: "Loomis Chaffee Cross Country",
      tags: [
        { label: "Python",    type: "t" },
        { label: "TKinter",   type: "o" },
        { label: "Bootstrap", type: "t" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "Automatic scorer for cross country meets at Loomis Chaffee. Previously Mrs. Purdy manually recorded all individual times and compared across schools to determine place and score.",
        },
        {
          type: "bullets",
          items: [
            "Upload meet results file → algorithm automatically scores and ranks all teams and individuals",
            "Multiple export options for results distribution",
            "TKinter UI for live adjustments; Bootstrap for web-facing output",
          ],
        },
      ],
    },
    {
      id: "pj-intl",
      title: "International Student Meeting Scheduler",
      sub: "Loomis Chaffee — Mrs. Pond",
      tags: [
        { label: "Python",   type: "t" },
        { label: "Qt",       type: "o" },
        { label: "PySide6",  type: "o" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "Automatic weekly scheduler for International Student Ambassador meetings with their Dean. Mrs. Pond is only on campus Mondays, Wednesdays, and Fridays, making manual scheduling complex and time-consuming.",
        },
        {
          type: "bullets",
          items: [
            "Ingests school schedule, student schedules, and faculty schedules simultaneously",
            "Finds clumps of students with matching 45-minute free periods on Mrs. Pond's on-campus days",
            "PySide6/Qt UI for manual pre-assignment adjustments",
            "Privacy-sensitive — no public demo available",
          ],
        },
      ],
    },
  ],
};