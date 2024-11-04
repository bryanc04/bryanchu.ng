"use client";

import { About } from "~/components/about";
import { Contact } from "~/components/contact";
import Link from "next/link";
import { Footer } from "~/components/footer";
import React, { useEffect } from "react";
import { Hero } from "~/components/hero";
import { Navbar } from "~/components/navbar";
import { Projects } from "~/components/projects";
import Education from "~/components/education/education";
import Research from "~/components/research/research";
import Awards from "~/components/awards/awards";
import AnimatedCursor from "react-animated-cursor";
import Iframe from "react-iframe";

interface PrerenderWebsiteProps {
  url: string;
}

const PrerenderWebsite: React.FC<PrerenderWebsiteProps> = ({ url }) => {
  useEffect(() => {
    if (typeof url === "string") {
      const link = document.createElement("link");
      link.rel = "prerender";
      link.href = url;
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    } else {
      console.error("URL must be a string:", url);
    }
  }, [url]);

  return null;
};

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
      link.as = "document";
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
      <Iframe
        url="https://pokemon-bryanc004.web.app"
        width="0"
        height="0"
        id=""
        className=""
        display="block"
        position="relative"
      />
      <Link href="https://pokemon-bryanc004.web.app" prefetch={true}></Link>
      <PrerenderWebsite url={"https://pokemon-bryanc004.web.app"} />

      {/* <PreloadSite url="https://pokemon-bryanc004.web.app" />
      <a
        href="https://pokemon-bryanc004.web.app"
        target="_blank"
        rel="noopener noreferrer"
      ></a> */}

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
