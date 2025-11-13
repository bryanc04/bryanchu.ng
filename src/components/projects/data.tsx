import { RiExternalLinkLine } from "react-icons/ri";
import type { TimelineEntry } from "../ui/timeline";
import { FaLink } from "react-icons/fa";

export const sectionHeading = {
  title: "Non-research Projects",
  subTitle: "",
};

export const timelineData: TimelineEntry[] = [
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
    description: `Please check this out! It's an online game where users can control my Dog (Pommy) in a pokemon world. By following the instructions, the user can access the basics of my portfolio within the game. (Currently, it takes some time to load on certain devices).`,
    tech: [
      "React",
      "TypeScript",
      "Three.js",
      "TailwindCSS",
      "Blender",
      "Framer Motion",
    ],
    cards: {
      a: {
        title: "Instructions",
        text: `Use the w-a-s-d keys to navigate Pommy. To access my portfolio, follow the arrow shown on screen, navigate forward, and press space. There is a soccer ball that Pommy can kick around. You can also hold down your cursor and move it around to change viewing angles.`,
      },
      b: {
        title: "To be updated by 2025",
        text: `Faster rendering time, clearer graphics, more game-like options (wild pokemons, etc).`,
      },
    },
  },
  {
    title: "Dorm Assignment",
    projectUrls: {
      repo: {
        name: "dorm_assignment",
        owner: "bryanc04",
        showStarCount: false,
      },
    },
    imageUrl: "/images/dormproject.png",
    description: `A software for the Deans' Office at the Loomis Chaffee School that automates their process of assigning students to dorms based on student survey.`,
    tech: [
      "Python",
      "Pulp (linear programming)",
      "Flask",
      "JavaScript",
      "React",
      "CSS",
      "Material UI",
    ],
    cards: {
      a: {
        title: "Client Request",
        text: `Prior to the completion of this project, the Deans manually assigned 650+ students to dorms for multiple weeks over summer, attempting to satisfy as many of the students' requests as possible.`,
      },
      b: {
        title: "My Work",
        text: `Developed a program that automatically assignes students, maximizing their satisfaction based on survey data. Also provided them with a friendly user interface to manually tweak the automated output for the very rare exceptions. This program has been in use in the Loomis Chaffee School since 2024. (For privacy reasons, the live version of software is private).`,
      },
    },
  },
  {
    title: "Chemistry Molecule Viewer",
    projectUrls: {
      site: {
        url: "https://dmol-b8de0.web.app/Home",
        icon: <RiExternalLinkLine size={20} />,
      },
    },
    imageUrl: "/images/chemistry.png",
    description: `A software for the Loomis Chaffee School's Chemistry Department that provides interactive figures of molecules.`,
    tech: [
      "Python",
      "Linear Algebra",
      "PubChem API",
      "Flask",
      "JavaScript",
      "TypeScript",
      "CSS",
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
    description: `An all-in-one management platform for the Finanial Literacy Program at the Loomis Chaffee School.`,
    tech: ["Firebase", "Excel", "React", "JavaScript", "Material UI", "CSS"],
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
    description: `An automatic assignment platform that assigns students to mandatory campus workjobs.`,
    tech: ["React", "TypeScript", "Mantine UI"],
    cards: {
      a: {
        title: "Client Request",
        text: `Prior to the completion of this project, Ms. Conklin manually assigned 500+ students to Workjobs by going through each student's frees and the corresponding workjob meeting periods to assign all students to a workjob. For schedule relase purposes, this job had to be done within a few days, which took significant time and effort.`,
      },
      b: {
        title: "My Work",
        text: `Developed an automatic algorithm that automatically places all students into workjobs. Also created a software that allows for changes through drag-and-drop.`,
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
    description: `An automatic scheduler for Internaltional Student Ambassadors' mandatory meetings with their Dean, Mrs. Pond.`,
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
