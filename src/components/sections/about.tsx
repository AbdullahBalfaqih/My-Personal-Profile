
import React from "react";
import Image from "next/image";
import AnimatedNumber from "@/components/animated-number";
import SectionHeader from "../ui/section-header";
import Link from "next/link";
import ScrollReveal from "../scroll-reveal";
import { PERSONAL_INFO } from "@/lib/data";
import r from "./1r.png";
const About = () => {
  const stats = [
    { value: 10, label: "Projects Completed" },
    { value: 150, label: "Happy Clients" },
    { value: 10485, label: "Hours of Work" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-12">
            <SectionHeader
              subtitle="About Me"
              title="Passion for Digital Innovation"
              titleClasses="text-4xl md:text-5xl"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <ScrollReveal className="relative w-full max-w-sm mx-auto">
                     <Image
                              src={r}
                              alt="About Image"
                        width={1568}
                        height={1280}
                        className="rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </ScrollReveal>

                <ScrollReveal className="flex flex-col gap-8 items-center md:items-start text-center md:text-left">
                    <div className="space-y-4">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            As a detail-oriented IT graduate, I specialize in full-stack
                            development, building scalable web and desktop applications with
                            a focus on efficient and reliable solutions.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {stats.map((stat, index) => (
                            <React.Fragment key={stat.label}>
                                <div className="text-center">
                                    <h3 className="text-4xl font-bold text-accent">
                                      <AnimatedNumber value={stat.value} />+
                                    </h3>
                                    <p className="text-muted-foreground">{stat.label}</p>
                                </div>
                                {index < stats.length - 1 && (
                                    <div className="w-px h-16 bg-border hidden md:block"></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                     <div className="w-full flex justify-center md:justify-start">
                        <a href={PERSONAL_INFO.cvUrl} target="_blank" rel="noopener noreferrer" className="mt-4">
                            <button className="animated-button">
                                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                                </svg>
                                <span className="text">Download CV</span>
                                <span className="circle"></span>
                                <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 hidden md:block animate-spin-slow">
            <Image 
                src="https://framerusercontent.com/images/Otde49cy0PsLSCUBY073AdND0s.svg" 
                alt="Decorative Star"
                width={120}
                height={120}
                className="opacity-50"
            />
        </div>
      </div>
    </section>
  );
};

export default About;
