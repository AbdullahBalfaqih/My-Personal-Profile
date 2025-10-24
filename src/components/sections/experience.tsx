"use client";

import { PROFESSIONAL_EXPERIENCE } from "@/lib/data";
import { Briefcase, Calendar } from "lucide-react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';
import { cn } from "@/lib/utils";

const ExperienceHeader = ({ subtitle, title }: { subtitle: string, title: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className={cn("experience-header flex items-start gap-8", isInView && "is-in-view")}
    >
      <div className="relative h-24 w-px bg-border experience-header-line"></div>
      <div>
        <p className="text-muted-foreground font-semibold whitespace-nowrap mb-2">{subtitle}</p>
        <h2 className="font-bold tracking-tighter text-4xl md:text-5xl">{title}</h2>
      </div>
    </div>
  );
};


const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const timelineGlowHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = (isLeft: boolean) => ({
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
      },
    },
  });

  return (
    <section id="experience" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <ExperienceHeader
            subtitle="Teams I Worked With"
            title="My Professional Experiences"
          />
        </div>

        <motion.div
          ref={containerRef}
          className="relative max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Central Timeline */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          
          {/* Glowing gradient for the line */}
           <motion.div 
              className="absolute left-1/2 top-0 w-16 -translate-x-1/2 bg-gradient-to-b from-accent/0 via-accent/40 to-accent"
              style={{ height: timelineGlowHeight, filter: 'blur(12px)' }}
           />


          {PROFESSIONAL_EXPERIENCE.map((job, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className="mb-8 flex justify-between items-center w-full"
                variants={itemVariants(isLeft)}
              >
                {/* Left Side */}
                <div
                  className={`w-5/12 ${isLeft ? "order-1" : "order-3"}`}
                >
                  <Link
                    href={job.url || "#"}
                    target="_blank"
                    rel="noopener"
                    className="block p-6 rounded-xl border border-white/10 bg-card/80 backdrop-blur-sm shadow-lg hover:border-accent transition-all duration-300 hover:shadow-accent/20"
                  >
                    <div className="flex items-start gap-4 mb-3">
                       <div className="flex-shrink-0 bg-gray-800 p-3 rounded-full mt-1">
                          {job.icon ? (
                            <job.icon className="w-5 h-5 text-accent" />
                          ) : (
                            <Briefcase className="w-5 h-5 text-accent" />
                          )}
                        </div>
                       <div>
                        <h3 className="font-bold text-lg">{job.role}</h3>
                         <p className="text-sm text-muted-foreground">
                          {job.company} • {job.jobType}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{job.period}</span>
                    </div>
                  </Link>
                </div>

                {/* Center Dot */}
                <div
                  className={`z-10 flex items-center order-2 bg-background`}
                >
                  <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_12px] shadow-accent"></div>
                </div>

                {/* Right/Empty Side */}
                <div className="w-5/12 order-2"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
