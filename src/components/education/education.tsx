"use client";

import "./styles.css";
import { motion, Variants } from "framer-motion";
import { SectionHeading } from "~/components/ui/section-heading";

import loomisLogo from "public/images/loomis.png";
import rumseyLogo from "public/images/rumsey.png";
import asmp from "public/images/asmp.png";
import stanford from "public/images/stanford.png";

interface Props {
  heading: string;
  logo: any; // Imported image
  subheading: string;
  bulletedList: string[];
  color: string; // Single color input
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function Card({ heading, logo, subheading, bulletedList, color }: Props) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      style={{ color: "black", flexDirection: "column" }}
    >
      <div className="splash" style={{ background: color }} />
      <motion.div
        className="card"
        variants={cardVariants}
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            height: "80px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: 800,
              alignItems: "center",
              display: "flex",
            }}
          >
            {heading}
          </div>
          <img src={logo.src} style={{ height: "80px" }} />
        </div>
        <div style={{ fontSize: "10px" }}>{subheading}</div>
        <div>
          <ul>
            {bulletedList.map((item, index) => (
              <li key={index}>
                <div
                  key={index}
                  style={{ fontSize: "10px", listStyleType: "circle" }}
                >
                  • {item}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

const data = [
  {
    heading: "Rumsey Hall School",
    logo: rumseyLogo,
    subheading: "",
    bulletedList: [
      "Top Scholar in the Graduating Class",
      "Presidential Award for Academic Excellence",
      "Math Team",
      "Varsity Soccer",
      "Varsity Baseball",
    ],
    color: "blue",
  },
  {
    heading: "Awesomemath Summer Program",
    logo: asmp,
    subheading: "",
    bulletedList: [
      "2-year Student",
      "Algebra 2.5",
      "Counting Strategies",
      "Computational Geometry",
      "Number Sense",
    ],
    color: "yellow",
  },
  {
    heading: "Stanford Math Circle",
    logo: stanford,
    subheading: "",
    bulletedList: ["Selected as student for Spring '22"],
    color: "red",
  },
  {
    heading: "Loomis Chaffee School",
    logo: loomisLogo,
    subheading: "",
    bulletedList: [
      "Leader of Go Club",
      "Software Developer for Miscellaneous Departments/Faculty/Administrators",
      "Teaching Assistant for College Level Physics",
      "Web Director of All Official/Major Publications",
      "Head Quantitative/Scientific Resource Center Tutor",
      "Tour Guide",
      "Volunteer International Student Ambassador",
    ],
    color: "maroon",
  },
];

export default function Education() {
  return (
    <section className="w-full bg-[#141414]" style={{ paddingBottom: "350px" }}>
      <div className="container" style={{ marginBottom: "60px" }}>
        <SectionHeading title={"Education"} />
      </div>

      {data.map(({ heading, logo, subheading, bulletedList, color }) => (
        <div className="px-4 md:container" key={heading}>
          <Card
            heading={heading}
            logo={logo}
            subheading={subheading}
            bulletedList={bulletedList}
            color={color}
          />
        </div>
      ))}
    </section>
  );
}
