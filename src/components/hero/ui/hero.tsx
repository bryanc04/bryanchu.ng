"use client";

import { ProfileCard } from "./profile-card";
import { ProfileCardMobile } from "./profile-card-mobile";
import { Title } from "./title";
import { useEffect, useState } from "react";
import logo_white from "/public/images/logo_white.png";

export function Hero() {
  const [displayscroll, setDisplayscroll] = useState(true);
  useEffect(() => {
    const handleScroll = (event: any) => {
      setDisplayscroll(false);
      console.log("false");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative flex h-[100vh] w-full items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
      <img
        style={{ position: "absolute", width: "5%", top: 15 }}
        src={logo_white.src}
      />
      <div className="container flex flex-col items-center lg:flex-row xl:gap-56">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black"></div>
        <Title />
        <ProfileCard />
        <ProfileCardMobile />
      </div>
      {displayscroll ? (
        <div className="blink" style={{ position: "absolute", bottom: "30px" }}>
          Scroll Down
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
