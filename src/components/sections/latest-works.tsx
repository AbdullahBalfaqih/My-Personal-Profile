"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";
import SectionHeader from "../ui/section-header";
import { PROJECTS, PROFESSIONAL_EXPERIENCE } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CircleDollarSign, ArrowUpRight, Smartphone, Layout, Globe, BriefcaseBusiness, Heart, Star, ShieldCheck, MapPin, Trophy, Utensils, Truck } from "lucide-react";
import Link from "next/link";
import curio from "./curio.png";
import ticket from "./ticket.png";

const LatestWorks = () => {
  // Combine projects and some professional experience works for the grid
  const works = [
    ...PROJECTS,
    ...PROFESSIONAL_EXPERIENCE.filter(exp => ["Sports Innovation Hackathon", "EVENTIX API"].includes(exp.company)).map(exp => ({
        id: exp.company.toLowerCase().replace(" ", "-"),
        name: exp.company,
        description: exp.description[0],
        technologies: [],
        githubUrl: "#",
        liveUrl: exp.url || "#",
        role: exp.role
    }))
  ];

  const getImageUrl = (id: string) => {
    const placeholder = PlaceHolderImages.find(img => img.id === id);
    if (placeholder) return placeholder.imageUrl;
    
    // Fallbacks for specific IDs
    if (id === "curiogrid") return curio.src || curio;
    if (id === "eventix-api") return ticket.src || ticket;
    if (id === "batool-store") return "/images/batool.png";
    if (id === "jisr-platform") return "/images/jisr.png";
    if (id === "shaliha-platform") return "/images/shaliha.png";
    
    return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop";
  };

  return (
    <section id="latest-works" className="py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4 mb-16">
        <SectionHeader
          subtitle="Showcase"
          title="My Latest Works"
          titleClasses="text-5xl md:text-7xl font-black uppercase tracking-tighter"
          align="center"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid w-full max-w-7xl mx-auto grid-cols-12 gap-6">
          
          {/* Row 1: Large Project Card - Batool Store */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 group relative flex h-auto min-h-[250px] flex-col md:flex-row overflow-hidden rounded-[2.5rem] border border-white/10 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-accent/40"
          >
            <div className="relative h-[250px] w-full shrink-0 overflow-hidden md:h-auto md:w-[350px]">
              <img
                alt={works[0]?.name}
                className="absolute inset-0 h-full w-full object-fill transition-transform duration-700 group-hover:scale-110"
                src={getImageUrl(works[0]?.id)}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-l"></div>
            </div>
            <div className="flex flex-1 flex-col p-8 justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">Featured Project</span>
                <span className="text-white/40 text-xs tracking-widest uppercase">E-Commerce</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">{works[0]?.name}</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mb-8 leading-relaxed">
                {works[0]?.description}
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Technologies</span>
                  <span className="text-xs text-muted-foreground">Next.js • React • PostgreSQL • Framer Motion</span>
                </div>
                <Link href={works[0]?.liveUrl || "#"} target="_blank" className="ml-auto">
                    <button className="px-8 py-4 bg-accent text-black font-black uppercase text-sm rounded-full transition-transform hover:scale-105 active:scale-95 flex items-center gap-2">
                        View Project <ArrowUpRight className="size-4" />
                    </button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Row 2 */}
          <div className="col-span-12 grid grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="col-span-12 grid grid-cols-12 gap-6 lg:col-span-6">
              {/* Top Card: Shaliha Platform */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="col-span-12 relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-card/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-accent/40 group"
              >
                <div className="flex flex-col gap-1 mb-6">
                  <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">Booking System</span>
                  <h4 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-accent transition-colors">
                    {works[1]?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {works[1]?.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex gap-2">
                        <Layout className="size-4 text-white/40" />
                        <span className="text-xs text-white/40">Web App</span>
                    </div>
                    <Link href="#" className="flex items-center gap-1 text-xs font-bold text-accent uppercase group/link">
                        Explore <ArrowUpRight className="size-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>
              </motion.div>
              
              {/* Bottom cards: Crisper & Global Truck */}
              <div className="col-span-12 grid grid-cols-12 gap-6">
                {/* Left Card: Crisper */}
                <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="col-span-12 sm:col-span-6 rounded-[2rem] border border-white/10 bg-black p-6 transition-all duration-500 hover:border-accent/40 group"
                >
                  <div className="size-12 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                    <Utensils className="size-8" strokeWidth={1.2} />
                  </div>
                  <h5 className="text-lg font-black text-white uppercase mb-2 leading-tight">{works[2]?.name}</h5>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-4">Desktop ERP & POS System</p>
                  <div className="flex items-center gap-2 mt-auto">
                    <div className="size-6 rounded-full bg-white/10 flex items-center justify-center">
                        <BriefcaseBusiness className="size-3 text-accent" strokeWidth={1.2} />
                    </div>
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Enterprise</span>
                  </div>
                </motion.div>
                
                {/* Right Card: Global Truck */}
                <motion.div 
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="col-span-12 sm:col-span-6 rounded-[2rem] border border-white/10 bg-black p-6 transition-all duration-500 hover:border-accent/40 group"
                >
                  <div className="size-12 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                    <Truck className="size-8" strokeWidth={1.2} />
                  </div>
                  <h5 className="text-lg font-black text-white uppercase mb-2 leading-tight">{works[3]?.name}</h5>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-4">Logistics Management System</p>
                  <div className="flex items-center gap-2 mt-auto">
                    <div className="size-6 rounded-full bg-white/10 flex items-center justify-center">
                        <Star className="size-3 text-accent" />
                    </div>
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Logistics</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Community Cleanup */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-12 min-h-[350px] lg:col-span-6 relative overflow-hidden rounded-[2.5rem] border border-white/10 group"
            >
              <img
                alt={works[4]?.name}
                className="absolute inset-0 h-full w-full object-fill transition-transform duration-1000 group-hover:scale-110"
                src={getImageUrl(works[4]?.id)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>

              <div className="relative h-full flex flex-col p-8 z-10">
                <div className="mb-auto">
                    <span className="px-2 py-1 rounded-md bg-black/40 backdrop-blur-md text-[10px] font-black text-accent uppercase tracking-widest">Web3 & AI</span>
                    <h4 className="text-2xl font-black text-white uppercase tracking-tight mt-2">{works[4]?.name}</h4>
                    <p className="text-sm text-white/60 mt-1 font-medium italic">Solana Blockchain Application</p>
                </div>

                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <div className="text-sm font-black text-white uppercase tracking-widest">Blockchain Focus</div>
                    <div className="text-xs text-white/60">Transparency & Authenticity</div>
                  </div>
                  <button className="size-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent transition-colors shadow-xl">
                    <ArrowUpRight className="size-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 3 */}
          <div className="col-span-12 grid grid-cols-12 gap-6">
            {/* Left Column: Aqary App */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative col-span-12 h-[350px] md:col-span-8 overflow-hidden rounded-[2.5rem] border border-white/10 group"
            >
              <img
                alt={works[5]?.name}
                className="absolute inset-0 h-full w-full object-fill transition-transform duration-1000 group-hover:scale-105"
                src={getImageUrl(works[5]?.id)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60"></div>

              <div className="relative h-full flex flex-col p-8 z-10">
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <div className="text-2xl font-black text-white uppercase tracking-tighter sm:text-4xl">{works[5]?.name}</div>
                    <div className="text-sm font-bold text-accent uppercase tracking-widest mt-1">Mobile Real Estate App</div>
                  </div>
                  <button className="px-6 py-3 bg-white text-black font-black uppercase text-xs rounded-xl hover:bg-accent transition-colors">
                    View Case Study
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Stack of 3 (Awards/Small Works) */}
            <div className="col-span-12 flex flex-col gap-4 md:col-span-4 justify-between">
              {/* Sports Innovation Hackathon */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4 p-4 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <div className="size-20 shrink-0 flex items-center justify-center text-accent">
                    <Trophy className="size-10" strokeWidth={1.2} />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-1">
                  <h5 className="text-sm font-black text-white uppercase tracking-tight">{works[6]?.name}</h5>
                  <p className="text-[10px] text-accent uppercase font-bold tracking-widest flex items-center gap-1">
                    8th Place Winner • 2025
                  </p>
                </div>
                <ArrowUpRight className="size-4 text-white/20 group-hover:text-accent transition-colors" />
              </motion.div>

              {/* Award 1 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 p-4 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <div className="size-20 shrink-0 flex items-center justify-center text-accent">
                    <Trophy className="size-10" strokeWidth={1.2} />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-1">
                  <h5 className="text-sm font-black text-white uppercase tracking-tight">Trust & Pay Hackathon</h5>
                  <p className="text-[10px] text-accent uppercase font-bold tracking-widest">1st Place Winner • 2026</p>
                </div>
                <ArrowUpRight className="size-4 text-white/20 group-hover:text-accent transition-colors" />
              </motion.div>

              {/* Award 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 p-4 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <div className="size-20 shrink-0 flex items-center justify-center text-accent">
                    <Trophy className="size-10" strokeWidth={1.2} />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-1">
                  <h5 className="text-sm font-black text-white uppercase tracking-tight">Urban Dev Hackathon</h5>
                  <p className="text-[10px] text-accent uppercase font-bold tracking-widest">2nd Place • Al Khobar</p>
                </div>
                <ArrowUpRight className="size-4 text-white/20 group-hover:text-accent transition-colors" />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LatestWorks;
