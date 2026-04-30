"use client";

import { useState } from "react";
import { Folder, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SectionHeader from "../ui/section-header";
import m1 from "./m1.png";
import m2 from "./m2.png";
import m3 from "./m3.png";
import jisr from "./jisr.png";
import eventix from "./eventix.png";
import curio from "./curio.png";
import ticket from "./ticket.png";

const latestWorks = [
    {
        title: "EVENTIX: The first hybrid solution in the region. Automatic authentication of every ticket on the Polygon network with NFT minting and authenticated trading options.",
        category: "Blockchain",
        date: "Mar 03, 2026",
        imageSrc: eventix,
        href: "https://www.eventix-chain.cloud/",
    },
    {
        title: "Database Design & Management with Supabase",
        category: "Backend",
        date: "May 5, 2025",
        imageSrc: m1,
        href: "/project/database-management-supabase",
    },
    {
        title: "A platform that connects ideas with funding, where insights are transformed into successful projects.",
        category: "Fintech",
        date: "Feb 10, 2026",
        imageSrc: jisr,
        href: "https://capable-lolly-f2a5ed.netlify.app/",
    },
];

const Blog = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="blog" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-12">
            <SectionHeader 
                subtitle="My Portfolio" 
                title="My Latest Works"
                titleClasses="text-4xl md:text-5xl"
                align="start"
            />
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          onMouseLeave={() => setHoveredCard(null)}
        >
          {latestWorks.map((post) => (
            <Link
              href={post.href}
              key={post.title}
              className="group block"
              onMouseEnter={() => setHoveredCard(post.title)}
            >
              <div
                className={cn(
                  "h-full flex flex-col border border-border rounded-xl transition-all duration-300",
                  "bg-card text-card-foreground",
                  hoveredCard && hoveredCard !== post.title
                    ? "opacity-50"
                    : "opacity-100",
                  hoveredCard === post.title && "bg-accent text-accent-foreground"
                )}
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-start gap-4 text-sm text-muted-foreground mb-4 group-hover:text-accent-foreground/70">
                    <div className="flex items-center gap-2">
                      <Folder className="w-4 h-4" />
                      <span>{post.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold flex-grow">{post.title}</h3>
                </div>
                      <div className="relative h-[600px] mt-auto">
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    fill
                              className="object-fill rounded-b-xl"

                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
