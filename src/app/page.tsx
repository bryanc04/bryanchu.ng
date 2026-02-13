"use client";

import * as React from "react";
import Link from "next/link";
import { Hero } from "~/components/hero";
import { Projects } from "~/components/projects";
import Research from "~/components/research/research";
import Education from "~/components/education/education";
import Awards from "~/components/awards/awards";
import { Footer } from "~/components/footer";
import AnimatedCursor from "react-animated-cursor";
import Loader from "./Loader";

const sections = ["home", "projects", "experiences", "awards", "research"];

export default function HomePage() {
  const [displayGame, setDisplayGame] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState(true);
  const [activeSection, setActiveSection] = React.useState<string>("hero");
  const navbarRef = React.useRef<HTMLUListElement | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  // Check screen size
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Observe active section
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0% -50% 0%",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Loading state
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  // Adjust navbar scroll position
  React.useEffect(() => {
    const navbar = navbarRef.current;
    const activeLink = document.querySelector(`#navbar-item-${activeSection}`);
    if (navbar && activeLink) {
      const navbarRect = navbar.getBoundingClientRect();
      const activeLinkRect = activeLink.getBoundingClientRect();
      const offset =
        activeLinkRect.top -
        navbarRect.top -
        navbarRect.height / 2 +
        activeLinkRect.height / 2;
      navbar.style.transform = `translateY(${-offset - 10}px)`;
    }
  }, [activeSection]);

  return (
    <main className="relative">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{ backgroundColor: "white" }}
      />

      {loading ? (
        <div style={{ cursor: "none" }}>
          <AnimatedCursor
            innerSize={0}
            outerSize={0}
            innerScale={0}
            outerScale={0}
            outerAlpha={0}
            innerStyle={{ backgroundColor: "transparent" }}
            outerStyle={{ border: "0px solid transparent" }}
          />
          <Loader />
        </div>
      ) : (
        <>
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{ backgroundColor: "white" }}
            outerStyle={{ border: "3px solid white" }}
          />
          <div
            style={{
              gridTemplateColumns: isMobile ? "100%" : "100%",
              display: "grid",
            }}
          >
            <div>
              <div id="home">
                <Hero />
              </div>
              <div id="projects">
                <Projects func={setDisplayGame} />
              </div>
              <div id="experiences">
                <Education />
              </div>
              <div id="awards">
                <Awards />
              </div>
              <div id="research">
                <Research />
              </div>
              <div id="footer">
                <Footer />
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
