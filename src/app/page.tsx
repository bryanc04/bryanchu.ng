import { About } from "~/components/about";
import { Contact } from "~/components/contact";
import { Footer } from "~/components/footer";
import { Hero } from "~/components/hero";
import { Navbar } from "~/components/navbar";
import { Projects } from "~/components/projects";
import Education from "~/components/education/education";
import Research from "~/components/research/research";
import Awards from "~/components/awards/awards";
import AnimatedCursor from "react-animated-cursor";

export default function HomePage() {
  return (
    <main className="relative">
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
