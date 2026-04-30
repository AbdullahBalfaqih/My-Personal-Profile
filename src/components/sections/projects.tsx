"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import { useRef } from "react";
import { PROJECTS } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import curio from "./curio.png";
import even from "./even.png";
import jisr from "./jisr.png";

interface CardData {
  id: number | string;
  image: string;
  alt?: string;
  project: any;
}

const StickyCard002 = ({
  cards,
  className,
  containerClassName,
  imageClassName,
}: {
  cards: CardData[];
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
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
          trigger: ".sticky-cards",
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
      <div className="sticky-cards relative flex h-full w-full items-center justify-center overflow-hidden p-3 lg:p-8">
        <div
          className={cn(
            "relative h-[85vh] w-full max-w-5xl overflow-hidden rounded-3xl",
            containerClassName,
          )}
        >
          {cards.map((card, i) => (
            <div
              key={card.id}
              className={cn(
                "absolute inset-0 h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-black",
                imageClassName,
              )}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              <img
                src={card.image}
                alt={card.alt || ""}
                className="h-full w-full object-fill opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="max-w-3xl">
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    {card.project.name}
                  </h3>
                  <p className="text-lg text-gray-300 mb-8 line-clamp-3">
                    {card.project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {card.project.technologies.map((tech: string) => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {card.project.liveUrl && (
                      <Link
                        href={card.project.liveUrl}
                        target="_blank"
                        className="flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                      >
                        Live Demo <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    )}
                    {card.project.githubUrl && (
                      <Link
                        href={card.project.githubUrl}
                        target="_blank"
                        className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-all"
                      >
                        <Github className="w-5 h-5" /> Code
                      </Link>
                    )}
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

const Projects = () => {
  const getImageForProject = (id: string) => {
    if (id === "curiogrid") return curio.src || curio;
    if (id === "eventix-api") return even.src || even;
    if (id === "jisr-platform") return jisr.src || jisr;
    if (id === "batool-store") return "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"; // Placeholder for Batool Store
    
    return PlaceHolderImages.find((img) => img.id === id);
  };

  const projectCards = PROJECTS.map((project) => {
    const projectImage = getImageForProject(project.id);
    const imageUrl = typeof projectImage === 'string' ? projectImage : (projectImage?.src || projectImage?.imageUrl || "https://images.unsplash.com/photo-1460925895917-afdab827c52f");
    
    return {
      id: project.id,
      image: imageUrl,
      alt: project.name,
      project: project,
    };
  });

  return (
    <ReactLenis root>
      <section id="projects" className="bg-background">
        <div className="pt-24 pb-12 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              My Projects
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto px-4">
               A collection of my most recent work, ranging from web applications to enterprise software solutions.
            </p>
        </div>
        <div className="h-full w-full">
          <StickyCard002 cards={projectCards} />
        </div>
      </section>
    </ReactLenis>
  );
};

export default Projects;
