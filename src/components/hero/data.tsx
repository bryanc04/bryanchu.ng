import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoMusicalNotesSharp } from "react-icons/io5";

export const title = {
  plainText: "Bryan Chung",
  glowText: "Bryan Chung",
  subTitle: [
    "Freshman at Brown University",
    "Alumnus of Loomis Chaffee School",
    "AI Researcher",
    "Go Player",
    "Dog Owner",
    "Kendrick Lamar Fan",
  ],
  highlight: [
    "Brown",
    "Loomis",
    "Chaffee",
    "School",
    "Soccer",
    "AI",
    "Researcher",
    "Go",
    "Dog",
    "Kendrick",
    "Lamar",
  ],
};

export const profileCard = {
  title: "Bryan Chung",
  subTitle: "Freshman at Brown University",
  body: `Student passionate in software engineering, artificial intelligence, quantum informatics, physics, math, and teaching. Always looking for ways to deliver impact through computer science. Also a researcher, teaching assistant, athlete, dog-lover, and avid Kendrick Lamar fan.`,
  socialUrls: [
    {
      url: "https://github.com/bryanc04",
      icon: <IoLogoGithub size={20} />,
    },
    {
      url: "https://music.apple.com/us/playlist/music/pl.u-e98lkXqHzgzkWA1",
      icon: <IoMusicalNotesSharp size={20} />,
    },
  ],
  tooltip: {
    imagePath: "https://i.postimg.cc/fWYrdyMg/11.jpg",
    title: "Hey,",
    subTitle: "That's me!",
  },
};
