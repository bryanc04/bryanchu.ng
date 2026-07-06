import { RiExternalLinkLine } from "react-icons/ri";
import type { TimelineEntry } from "../ui/timeline";

export const sectionHeading = {
  title: "Selected Projects",
  subTitle: "Systems that blend algorithms, product, and data",
};

export const timelineData: TimelineEntry[] = [
  {
    title: "Insurf Decision Graph",
    description: `Decision intelligence for health insurance plan selection, built around a relational graph transformer, uncertainty-aware ranking, and statutory cost simulation.`,
    tech: [
      "Graph Transformers",
      "Conformal Prediction",
      "Counterfactual Inference",
      "Python",
      "TypeScript",
      "PostgreSQL",
    ],
    cards: {
      a: {
        title: "Modeling",
        text: `Built CDGT over Insurf's decision graph with relation-aware attention, nearest-precedent retrieval, counterfactual treatment-effect estimation, and provenance-weighted conformal intervals.`,
      },
      b: {
        title: "Reliability",
        text: `Verified runs against a seeded stochastic sandbox and engineered fail-closed federal plan ingestion so sparse or incomplete filings propagate uncertainty instead of corrupting cost estimates.`,
      },
    },
  },
  {
    title: "Biophysical Alpha Signals",
    imageUrl: "/images/nextMotion.png",
    description: `A sports-market research system that extracts player movement signals from broadcast video and tests whether fatigue proxies can identify pricing dislocations.`,
    tech: [
      "MediaPipe Pose",
      "Kalman Smoothing",
      "PyTorch",
      "LSTM",
      "Market Simulation",
      "Python",
    ],
    cards: {
      a: {
        title: "Signal Pipeline",
        text: `Extracted per-player joint velocities from broadcast video and denoised a rolling-variance fatigue proxy with a Kalman/RTS smoother.`,
      },
      b: {
        title: "Modeling",
        text: `Trained a PyTorch LSTM encoder-decoder on three NBA seasons and sized simulated positions with quarter-Kelly when model and bookmaker-implied probabilities diverged by more than five percentage points.`,
      },
    },
  },
  {
    title: "Custom Pokemon Game Portfolio",
    projectUrls: {
      repo: {
        owner: "bryanc04",
        name: "bryanchu.ng",
        showStarCount: false,
      },
    },
    imageUrl: "/images/pokemon.png",
    description: `An interactive 3D portfolio world where visitors can move through a game scene and discover sections of the site through play.`,
    tech: [
      "Linear Algebra",
      "WebGL",
      "Framer Motion",

      "Three.js",
      "TailwindCSS",
      "Blender",
    ],
    cards: {
      a: {
        title: "Interaction",
        text: `Built character movement, camera control, scene navigation, and object interactions so the portfolio becomes an explorable environment instead of a static page.`,
      },
      b: {
        title: "Rendering",
        text: `Combined Three.js, Blender assets, and Framer Motion to keep the experience playful while preserving responsive page performance.`,
      },
    },
  },
  {
    title: "Dorm Assignment Optimizer",
    projectUrls: {
      repo: {
        name: "dorm_assignment",
        owner: "bryanc04",
        showStarCount: false,
      },
    },
    imageUrl: "/images/dormproject.png",
    description: `A room-assignment optimizer for 800-student housing allocation, pairing exact optimization with a faster heuristic workflow for large instances.`,
    tech: [
      "Binary Linear Programming",
      "Genetic Algorithm",
      "Python",
      "Pulp (linear programming)",
      "Electron",
      "Flask",
      "JavaScript",
      "React",
      "CSS",
      "Material UI",
    ],
    cards: {
      a: {
        title: "Optimization",
        text: `Formulated room assignment as a binary linear program, linearized co-room preferences with McCormick envelopes, and solved the exact model with PuLP/CBC.`,
      },
      b: {
        title: "Workflow",
        text: `Paired the solver with a parallel genetic algorithm and interface for manual adjustments, replacing a weeks-long assignment process with a repeatable planning tool.`,
      },
    },
  },
  {
    title: "Chemistry Molecule Viewer",
    imageUrl: "/images/chemistry.png",
    description: `A software for the Loomis Chaffee School's Chemistry Department that provides interactive figures of molecules.`,
    tech: [
      "AWS",
      "Firebase",
      "Angular",
      "Python",
      "Linear Algebra",
      "PubChem API",
      "Flask",
      "JavaScript",
      "TypeScript",
      "React",
    ],
    cards: {
      a: {
        title: "Client Request",
        text: `Prior to the completion of this project, Mr. Osei used physical objects to manually build each molecule for class. An interactive website for Mr. Osei and his students would eliminate the need and allow for more effective learning.`,
      },
      b: {
        title: "My Work",
        text: `Developed a web-app that allows students and teachers to interact with various molecules in 2D/3D. Used Linear Algebra to calculate element positions, and used the PubChem API to obtain information. Now integrated into the chemistry curriculum.`,
      },
    },
  },

  {
    title: "Financial Literacy Platform v2",
    projectUrls: {
      repo: {
        owner: "bryanc04",
        name: "pelicoin-v2",
        showStarCount: false,
      },
      site: {
        url: "https://pelicoin-e331f.web.app",
        icon: <RiExternalLinkLine size={20} />,
      },
    },
    imageUrl: "/images/pelicoin.png",
    description: `An all-in-one management platform for the Financial Literacy Program at the Loomis Chaffee School.`,
    tech: [
      "Supabase",
      "Microsoft API",
      "Firebase",
      "Excel",
      "React",
      "JavaScript",
      "Material UI",
      "CSS",
    ],
    cards: {
      a: {
        title: "Client Request",
        text: `Prior to the completion of this project, Dr. Fisher individually managed every student's currency (Pelicoin) balance, manually adjusting tax rates, interest rates, stock returns, bond returns, etc for everyone. Besides, students had to individually ask if they wanted to internally transfer their balances, which was a very tedious process.`,
      },
      b: {
        title: "My Work",
        text: `Developed a web-app that allows students to access every information they need for the Financial Literacy Program, where students can sign up for events and purchase items through Pelicoin. Also functions as a banking app, and on the admin end, Dr. Fisher can still oversee and manage everything through an integrated excel file.`,
      },
    },
  },
  {
    title: "Workjob Assigner",
    projectUrls: {
      repo: {
        owner: "bryanc04",
        name: "workjob",
        showStarCount: true,
      },
    },
    imageUrl: "/images/workjob.png",
    description: `An automatic assignment platform that assigns students to mandatory campus jobs.`,
    tech: ["Python", "React", "TypeScript", "Mantine UI"],
    cards: {
      a: {
        title: "Client Request",
        text: `Prior to the completion of this project, Ms. Conklin manually assigned 500+ students to Workjobs by going through each student's frees and the corresponding workjob meeting periods to assign all students to a workjob. For schedule relase purposes, this job had to be done within a few days, which took significant time and effort.`,
      },
      b: {
        title: "My Work",
        text: `Developed an assignment algorithm that places students into campus jobs and a drag-and-drop interface for targeted manual changes.`,
      },
    },
  },
  {
    title: "XC Scorer",
    projectUrls: {},
    imageUrl: "/images/xcscore.png",
    description: `An automatic scorer for cross country teams at the Loomis Chaffee School with various export options.`,
    tech: ["Python", "TKinter", "Bootstrap"],
    cards: {
      a: {
        title: "Client Request",
        text: `Prior to the completion of this project, Mrs. Purdy manually wrote down all individual times and compared them with each other schools' in a cross country meet to determine place and score.`,
      },
      b: {
        title: "My Work",
        text: `Developed a UI and an automatic algorithm that scores cross country meets based on user file upload.`,
      },
    },
  },
  {
    title: "International Student Support Meeting Scheduler",
    projectUrls: {},
    imageUrl: "/images/comingsoon.png",
    description: `An automatic scheduler for International Student Ambassadors' recurring dean meetings.`,
    tech: ["Python", "Qt", "PySide6"],
    cards: {
      a: {
        title: "Client Request",
        text: `Prior to the completion of this project, Mrs. Pond manually scheduled on a weekly basis due to the complexity of pre-planning the meetings, as Mrs. Pond is only on campus Mondays, Wednesdays, and Fridays.`,
      },
      b: {
        title: "My Work",
        text: `Developed an automatic scheduler that inspects school schedule, student schedules, and faculty schedules to find clumps of students with matching free 45-minute periods. Also created a UI to manually adjust preassigned students. Image not shown due to privacy reasons.`,
      },
    },
  },
];
