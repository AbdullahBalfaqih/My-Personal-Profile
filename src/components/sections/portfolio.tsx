"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import { useRef } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import SectionHeader from '../ui/section-header';
import { ArrowUpRight } from 'lucide-react';

// Import images
import a1 from "./c.png";
import a2 from "./d.png";
import a3 from "./e.png";
import a4 from "./f.png";

const projects = [
    {
        name: "Crisper Restaurant Management",
        description: "A comprehensive management system for restaurants featuring POS, inventory, and online ordering.",
        href: "https://www.crisper.food/",
        imageSrc: a1,
        techs: ["C#", ".NET", "SQL Server", "React"]
    },
    {
        name: "Clean Your Neighborhood",
        description: "A community platform for waste management and environmental reporting.",
        href: "https://cleanyourhood.homes/dashboard",
        imageSrc: a2,
        techs: ["React", "Firebase", "Node.js"]
    },
    {
        name: "Global Truck Logistics",
        description: "Enterprise logistics and branch management system with real-time tracking.",
        href: "https://global-truck-mqys.vercel.app/track",
        imageSrc: a3,
        techs: ["ASP.NET", "React", "PostgreSQL"]
    },
    {
        name: "USDT Payment System",
        description: "A secure cryptocurrency payment gateway (Coming Soon).",
        href: "#",
        imageSrc: a4,
        techs: ["Blockchain", "Next.js", "Solana"]
    },
]

const StickyCard002 = ({
  cards,
  className,
}: {
  cards: any[];
  className?: string;
}) => {
  const container = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const cardElements = cardRefs.current;
      const totalCards = cardElements.length;

      if (!cardElements[0]) return;

      gsap.set(cardElements[0], { y: "0%", scale: 1, rotation: 0 });

      for (let i = 1; i < totalCards; i++) {
        if (!cardElements[i]) continue;
        gsap.set(cardElements[i], { y: "100%", scale: 1, rotation: 0 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-cards-portfolio",
          start: "top top",
          end: `+=${window.innerHeight * (totalCards - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentCard = cardElements[i];
        const nextCard = cardElements[i + 1];
        const position = i;
        if (!currentCard || !nextCard) continue;

        scrollTimeline.to(
          currentCard,
          {
            scale: 0.7,
            rotation: 5,
            duration: 1,
            ease: "none",
          },
          position,
        );

        scrollTimeline.to(
          nextCard,
          {
            y: "0%",
            duration: 1,
            ease: "none",
          },
          position,
        );
      }

      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (container.current) {
        resizeObserver.observe(container.current);
      }

      return () => {
        resizeObserver.disconnect();
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container },
  );

  return (
    <div className={cn("relative h-full w-full", className)} ref={container}>
      <div className="sticky-cards-portfolio relative flex h-full w-full items-center justify-center overflow-hidden p-3 lg:p-8">
        <div className="relative h-[85vh] w-full max-w-6xl overflow-hidden rounded-[2.5rem]">
          {cards.map((project, i) => (
            <div
              key={project.name}
              className="absolute inset-0 h-full w-full overflow-hidden rounded-[2.5rem] border border-white/5 bg-black"
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              <Image
                src={project.imageSrc}
                alt={project.name}
                fill
                className="object-cover opacity-50 transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                <div className="max-w-4xl">
                  <h3 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.techs.map((tech: string) => (
                      <span key={tech} className="text-sm font-medium text-white/60 border-b border-white/10 pb-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
    return (
        <ReactLenis root>
            <section id="portfolio">
                <div className="pt-32 pb-16 text-center">
                     <SectionHeader 
                        subtitle="Showcase" 
                        title="My Projects"
                        titleClasses="text-6xl md:text-8xl uppercase font-black tracking-tighter"
                        align="center"
                    />
                </div>
                <div className="w-full">
                    <StickyCard002 cards={projects} />
                </div>
            </section>
        </ReactLenis>
    )
}

export default Portfolio;
