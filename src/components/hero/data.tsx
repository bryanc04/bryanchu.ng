import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export const title = {
  plainText: "Bryan Chung",
  glowText: "Bryan Chung",
  subTitle: [
    "Founder & CTO at Insurf (YC S26)",
    "Brown Applied Mathematics-CS + Physics",
    "AI systems, econometrics, and decision science",
    "Builder of reliable, data-intensive products",
  ],
  highlight: [
    "Brown",
    "Applied",
    "Mathematics-CS",
    "Physics",
    "AI",
    "Insurf",
    "YC",
    "S26",
    "systems",
    "econometrics",
    "decision",
  ],
};

export const profileCard = {
  title: "Bryan Chung",
  subTitle: "Brown Sc.B. candidate, GPA 4.0",
  body: `Founder & CTO of Insurf, building decision intelligence for health insurance with graph transformers, uncertainty-aware ranking, and fail-closed federal data ingestion. I also research belief formation and market diffusion at Brown, with a toolkit spanning Python, TypeScript, C++, SQL, Go, PyTorch, PostgreSQL, Kafka, Redis, Docker, and AWS.`,
  socialUrls: [
    {
      url: "https://www.linkedin.com/in/bryan-chung-21b531265",
      icon: <FaLinkedinIn size={20} />,
      label: "LinkedIn",
    },
    {
      url: "https://github.com/bryanc04",
      icon: <IoLogoGithub size={20} />,
      label: "GitHub",
    },
  ],
  tooltip: {
    imagePath: "https://i.postimg.cc/fWYrdyMg/11.jpg",
    title: "Hey,",
    subTitle: "That's me!",
  },
};
