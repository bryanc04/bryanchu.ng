"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { AnimatedTooltip } from "~/components/ui/animated-tooltip";
import { BackgroundGradient } from "~/components/ui/background-gradient";
import { profileCard } from "../data";

export function ProfileCard() {
  return (
    <div
      className="hidden grow basis-1 justify-center lg:flex"
      style={{ zIndex: 1 }}
    >
      <BackgroundGradient containerClassName="w-full max-w-[430px]">
        <Card className="w-full rounded-lg border-white/10 bg-black/80 shadow-[-2px_-1px_#ffffff16_inset] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_80px_rgba(20,184,166,0.16)]">
          <CardHeader className="flex-row items-center gap-5 border-b border-white/10 p-5">
            <AnimatedTooltip
              items={[
                {
                  id: 1,
                  name: profileCard.tooltip.title,
                  designation: profileCard.tooltip.subTitle,
                  image: profileCard.tooltip.imagePath,
                },
              ]}
            />
            <div className="flex flex-col">
              <CardTitle className="text-white">{profileCard.title}</CardTitle>
              <CardDescription>{profileCard.subTitle}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-5">
            <p className="text-sm leading-7 text-neutral-200">
              {profileCard.body}
            </p>
            <div className="mt-5 flex w-full gap-3">
              {profileCard.socialUrls.map((social, i) => (
                <Link
                  key={i}
                  aria-label={social.label}
                  className="group inline-block"
                  target="_blank"
                  href={social.url}
                >
                  <Button className="h-10 w-10 rounded-md shadow-[-2px_-2px_#00000069_inset] transition-all hover:-translate-y-0.5 hover:bg-white">
                    {social.icon}
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </BackgroundGradient>
    </div>
  );
}
