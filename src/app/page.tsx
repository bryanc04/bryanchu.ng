"use client";

import * as React from "react";
import { Hero } from "~/components/hero";
import { Projects } from "~/components/projects";
import Research from "~/components/research/research";
import ExperienceTimeline from "~/components/education/education";
import Awards from "~/components/awards/awards";
import { Footer } from "~/components/footer";
import AnimatedCursor from "react-animated-cursor";
import Loader from "./Loader";

export default function HomePage() {
  const [, setDisplayGame] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-[#141414]">
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          {!isMobile && (
            <AnimatedCursor
              innerSize={7}
              outerSize={34}
              innerScale={1}
              outerScale={1.8}
              outerAlpha={0}
              innerStyle={{ backgroundColor: "white" }}
              outerStyle={{ border: "2px solid rgba(255,255,255,0.72)" }}
            />
          )}
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
                <ExperienceTimeline />
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
