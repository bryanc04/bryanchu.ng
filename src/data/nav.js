export const navConfig = [
  { id: "home", cmd: "home", label: "HOME" },
  { id: "about", cmd: "about", label: "ABOUT" },
  { id: "skills", cmd: "skills", label: "SKILLS" },
  { id: "experience", cmd: "experience", label: "EXP" },
  { id: "projects", cmd: "projects", label: "PROJ" },
  { id: "research", cmd: "research", label: "RESEARCH" },
  { id: "honors", cmd: "honors", label: "HONORS" },
  { id: "contact", cmd: "contact", label: "CONTACT" },
];

export const pageAddresses = {
  home: "0x00401000",
  about: "0x00402000",
  skills: "0x00403000",
  experience: "0x00404000",
  projects: "0x00405000",
  research: "0x00406000",
  honors: "0x00407000",
  contact: "0x00408000",
  ls: "0x00400000",
};

export const pageModules = {
  home: "main",
  about: "about",
  skills: "skills",
  experience: "exp",
  projects: "proj",
  research: "rsch",
  honors: "hnrs",
  contact: "bash",
  ls: "help",
};

export const allCommands = [
  { cmd: "home", desc: "go to landing page", cat: "navigation" },
  { cmd: "about", desc: "view bio and background", cat: "navigation" },
  { cmd: "skills", desc: "view technical stack", cat: "navigation" },
  { cmd: "experience", desc: "view professional history", cat: "navigation" },
  { cmd: "projects", desc: "view featured work", cat: "navigation" },
  { cmd: "research", desc: "view academic publications", cat: "navigation" },
  { cmd: "honors", desc: "view awards and competitions", cat: "navigation" },
  { cmd: "contact", desc: "open interactive shell", cat: "navigation" },
  { cmd: "ls", desc: "list all commands", cat: "system" },
  { cmd: "help", desc: "show help screen", cat: "system" },
  { cmd: "theme", desc: "cycle interface theme", cat: "system" },
  { cmd: "clear", desc: "clear terminal output", cat: "system" },
];

export const themes = [
  {
    id: "default",
    label: "DEFAULT",
    vars: {
      "--p": "#00d4ff",
      "--p2": "#0099cc",
      "--p3": "#004d77",
      "--p4": "#001a33",
    },
  },
  {
    id: "matrix",
    label: "MATRIX",
    vars: {
      "--p": "#00ff41",
      "--p2": "#008f11",
      "--p3": "#003b00",
      "--p4": "#001100",
    },
  },
  {
    id: "amber",
    label: "AMBER",
    vars: {
      "--p": "#ffb000",
      "--p2": "#bb8000",
      "--p3": "#664400",
      "--p4": "#332200",
    },
  },
  {
    id: "synth",
    label: "SYNTH",
    vars: {
      "--p": "#ff71ce",
      "--p2": "#b967ff",
      "--p3": "#05ffa1",
      "--p4": "#01cdfe",
    },
  },
  {
    id: "bw",
    label: "MONO",
    vars: {
      "--p": "#000000",
      "--p2": "#111111",
      "--p3": "#333333",
      "--p4": "#f0f0f0",
    },
  },
];
