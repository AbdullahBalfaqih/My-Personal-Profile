"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Calendar, ChevronLeft, ChevronRight, Wallet } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { PROFESSIONAL_EXPERIENCE } from "@/lib/data";
import { cn } from "@/lib/utils";
import { TypingAnimation } from "../ui/typing-animation";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ExperienceHeader = ({ subtitle, title }: { subtitle: string, title: string }) => {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      <div className="relative h-16 w-px bg-accent/30 mb-4"></div>
      <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">{subtitle}</p>
      <h2 className="font-bold tracking-tighter text-4xl md:text-6xl text-white">{title}</h2>
    </div>
  );
};

const Experience = () => {
  const swiperStyles = `
    .experience-swiper {
      width: 100%;
      padding-top: 50px;
      padding-bottom: 80px !important;
    }
    
    .experience-swiper .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 320px;
      height: auto;
      opacity: 0.4;
      transition: opacity 0.3s;
    }

    .experience-swiper .swiper-slide-active {
      opacity: 1;
    }

    .experience-swiper .swiper-pagination-bullet {
      background: #C9F31D !important;
      opacity: 0.3;
    }

    .experience-swiper .swiper-pagination-bullet-active {
      opacity: 1;
      width: 20px;
      border-radius: 4px;
    }
  `;

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <style>{swiperStyles}</style>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ExperienceHeader
          subtitle="Teams I Worked With"
          title="My Professional Experiences"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl mx-auto mt-10 relative"
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: ".exp-next",
              prevEl: ".exp-prev",
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="experience-swiper"
          >
            {PROFESSIONAL_EXPERIENCE.map((job, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-6">
                  {/* Outside: Period & Job Type */}
                  <div className="flex flex-col items-center gap-1 text-center mb-2">
                    <TypingAnimation className="text-accent font-bold text-lg tracking-tight">
                      {job.period}
                    </TypingAnimation>
                    <span className="text-xs uppercase tracking-[0.2em] text-white/40">{job.jobType}</span>
                  </div>

                  {/* The Card */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                    
                    <div className="relative p-8 rounded-2xl border border-white/10 bg-black shadow-2xl transition-all duration-300 group-hover:border-accent/40 h-full flex flex-col min-h-[350px]">
                      <div className="flex items-center justify-start text-accent mb-6">
                        <Wallet className="w-7 h-7" strokeWidth={1.2} />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-accent transition-colors">
                        {job.role}
                      </h3>
                      
                      <div className="text-accent/80 font-medium mb-6 text-sm">
                        {job.company}
                      </div>

                      <div className="space-y-3 flex-grow">
                        {job.description?.slice(0, 3).map((desc, i) => (
                          <div key={i} className="flex gap-3 text-sm text-white/60 leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                            <p className="line-clamp-3">{desc}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-accent uppercase tracking-wider">
                        <span>Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="exp-prev w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-black transition-all duration-300">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="exp-next w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-black transition-all duration-300">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
