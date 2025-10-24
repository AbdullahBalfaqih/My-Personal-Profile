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
const latestWorks = [

    {
        title: "Personal Real Estate Management Platform",
        category: "Mobile App (Flutter)",
        date: "May 5, 2025",
        imageSrc: m2,
        href: "/project/real-estate-management",

    },
    {
        title: "Database Design & Management with Supabase",
        category: "Backend",
        date: "May 5, 2025",
        imageSrc: m1,
        href: "/project/database-management-supabase",
    },


    {
        title: "Blood Donation Platform Development",
        category: "Backend",
        date: "May 06, 2025",
        imageSrc: m3,
        href: "/project/blood-donation-platform",
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
