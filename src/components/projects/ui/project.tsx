import { BackgroundGradient } from "~/components/ui/background-gradient";
import { Badge } from "~/components/ui/badge";
import Image from "next/image";
import { WobbleCard } from "~/components/ui/wobble-card";
import type { TimelineEntry } from "~/components/ui/timeline";
import { usePalette } from "color-thief-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export function Project({
  tech,
  description,
  cards,
  imageUrl,
  videoUrl,
  title,
}: TimelineEntry) {
  const { data } = usePalette(imageUrl ?? "", 8, "hex");
  const hasMedia = imageUrl !== undefined || videoUrl !== undefined;
  return (
    <div>
      <p className="mb-8 max-w-3xl text-sm font-light leading-7 text-muted-foreground md:text-base">
        {description}
      </p>
      <div className="mb-8 flex flex-wrap gap-2">
        {tech.map((text) => (
          <Badge
            key={text}
            className="h-auto cursor-default rounded-md border-none px-2.5 py-1 shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]"
          >
            {text}
          </Badge>
        ))}
      </div>
      <div className="flex-wrap gap-4 space-y-4 lg:flex lg:space-y-0">
        <BackgroundGradient containerClassName="basis-[45%] grow min-h-[260px]">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              width={500}
              height={500}
              className="aspect-[16/11] h-full w-full rounded-lg object-cover"
            />
          )}
          {videoUrl && (
            <video
              className="aspect-[16/11] h-full w-full rounded-lg object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support this video.
            </video>
          )}
          {!hasMedia && <DecisionGraphVisual title={title} />}
        </BackgroundGradient>
        <WobbleCard
          style={{ backgroundColor: data?.[6] ?? "#262626" }}
          containerClassName="basis-[20%] grow hidden lg:block"
          className="flex flex-col justify-center pt-2"
        >
          <h2 className="text-balance text-left text-base font-bold text-white md:text-xl lg:text-2xl">
            {cards.a.title}
          </h2>
          <p className="mt-4 text-left text-sm leading-6 text-neutral-100">
            {cards.a.text}
          </p>
        </WobbleCard>
        <WobbleCard
          style={{ backgroundColor: data?.[7] ?? "#235147" }}
          containerClassName="col-span-2 hidden lg:block"
          className="py-2 xl:py-5"
        >
          <h2 className="text-balance text-left text-base font-bold text-white md:text-xl lg:text-2xl">
            {cards.b.title}
          </h2>
          <div className="mt-4 max-w-[700px] text-left text-sm leading-6 text-neutral-100">
            {cards.b.text}
          </div>
        </WobbleCard>
        <Accordion type="multiple" className="block lg:hidden">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              {cards.a.title}
            </AccordionTrigger>
            <AccordionContent>{cards.a.text}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              {cards.b.title}
            </AccordionTrigger>
            <AccordionContent>{cards.b.text}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

function DecisionGraphVisual({ title }: { title: string }) {
  const nodes = [
    "Plans",
    "Rates",
    "Claims",
    "Subsidies",
    "Precedents",
    "Costs",
  ];

  return (
    <div
      aria-label={`${title} visual`}
      className="relative aspect-[16/11] min-h-[260px] overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,#081111_0%,#132326_48%,#251927_100%)] p-6"
    >
      <div className="absolute inset-0 bg-dot-white/[0.12]" />
      <div className="absolute left-[12%] top-[22%] h-px w-[72%] rotate-6 bg-teal-200/35" />
      <div className="absolute left-[18%] top-[62%] h-px w-[62%] -rotate-12 bg-amber-200/30" />
      <div className="absolute left-[48%] top-[20%] h-[58%] w-px rotate-12 bg-white/20" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-teal-100/70">
            CDGT
          </div>
          <div className="mt-2 max-w-xs text-2xl font-bold leading-tight text-white">
            Decision graph with uncertainty-aware ranking
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {nodes.map((node, index) => (
            <div
              key={node}
              className="rounded-md border border-white/10 bg-black/35 px-3 py-2 text-sm text-neutral-100 shadow-[0_0_28px_rgba(45,212,191,0.12)] backdrop-blur"
              style={{ transform: `translateY(${index % 2 === 0 ? 0 : 8}px)` }}
            >
              {node}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
