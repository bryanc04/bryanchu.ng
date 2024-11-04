"use client";

import { About } from "~/components/about";
import { Contact } from "~/components/contact";
import { Footer } from "~/components/footer";
import React, { useEffect } from "react";
import { Hero } from "~/components/hero";
import { Navbar } from "~/components/navbar";
import { Projects } from "~/components/projects";
import Education from "~/components/education/education";
import Research from "~/components/research/research";
import Awards from "~/components/awards/awards";
import AnimatedCursor from "react-animated-cursor";

export default function HomePage() {
  const PreloadSite = (url: any) => {
    useEffect(() => {
      console.log("fda");
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = url;
      document.body.appendChild(iframe);

      return () => {
        document.body.removeChild(iframe);
      };
    }, [url]);

    return null;
  };

  const PrefetchWebsite = (url: any) => {
    useEffect(() => {
      console.log("fdsa");
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = url;
      link.as = "document"; // Specifies that the resource is a document
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }, [url]);

    return null;
  };
  return (
    <main className="relative">
      <PrefetchWebsite url="https://pokemon-bryanc004.web.app" />

      <PreloadSite url="https://pokemon-bryanc004.web.app" />
      <a
        href="https://pokemon-bryanc004.web.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Example Site
      </a>

      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "white",
        }}
        outerStyle={{
          border: "3px solid white",
        }}
      />
      <Hero />
      <Projects />
      <Education />
      <Research />
      <Awards />

      <Footer />
    </main>
  );
}
