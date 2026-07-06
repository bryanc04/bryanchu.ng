"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { AnimatedTooltip } from "~/components/ui/animated-tooltip";
import { BackgroundGradient } from "~/components/ui/background-gradient";
import { profileCard } from "../data";

export function ProfileCardMobile() {
  return (
    <div className="flex w-full max-w-[400px] grow basis-1 justify-center px-4 lg:hidden">
      <BackgroundGradient containerClassName="w-full">
        <Card className="w-full rounded-lg border-white/10 bg-black/80">
          <CardHeader className="flex-row items-center gap-4 border-b border-white/10 p-4">
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
              <CardTitle className="text-xl text-white">
                {profileCard.title}
              </CardTitle>
              <CardDescription>{profileCard.subTitle}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <p className="text-sm leading-7 text-neutral-200">
              {profileCard.body}
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <div className="flex w-full gap-5">
              {profileCard.socialUrls.map((social, i) => (
                <Link
                  key={i}
                  aria-label={social.label}
                  className="group inline-block"
                  target="_blank"
                  href={social.url}
                >
                  <Button className="h-10 w-10 rounded-md shadow-[-2px_-2px_#00000069_inset]">
                    {social.icon}
                  </Button>
                </Link>
              ))}
            </div>
          </CardFooter>
        </Card>
      </BackgroundGradient>
    </div>
  );
}
