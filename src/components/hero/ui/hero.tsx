"use client";

import { ProfileCard } from "./profile-card";
import { ProfileCardMobile } from "./profile-card-mobile";
import { Title } from "./title";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import logo_white from "/public/images/logo_white.png";

export function Hero() {
  const [displayscroll, setDisplayscroll] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setDisplayscroll(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black py-24 bg-dot-white/[0.18]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.18),transparent_38%),linear-gradient(180deg,rgba(0,0,0,0)_0%,#050505_88%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/60 to-transparent" />
      <Image
        alt="Bryan Chung logo"
        className="absolute top-4 z-10 w-10 opacity-90 md:w-14"
        src={logo_white}
        priority
      />
      <div className="container relative z-10 flex flex-col items-center gap-10 lg:flex-row xl:gap-24">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_45%,black)]"></div>
        <Title />
        <ProfileCard />
        <ProfileCardMobile />
      </div>
      {displayscroll ? (
        <div className="blink absolute bottom-7 z-10 text-white/50">
          <ChevronDown aria-label="Scroll" size={28} />
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
