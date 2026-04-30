"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const ScrollShutter = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxesRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 0.5,
          pin: true,
          start: "top top",
          end: "+=150%",
        },
      });

      tl.to(boxesRef.current, {
        force3D: true,
        duration: 1,
        xPercent: 100,
        ease: "power1.inOut",
        stagger: { amount: 1 },
      })
      .to(boxesRef.current, { ease: "power1.out", duration: 1, rotation: 45 }, 0)
      .to(boxesRef.current, { ease: "power1.in", duration: 1, rotation: 0 }, 1);
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="trigger relative w-screen h-screen overflow-hidden bg-[#0D0D0D] flex flex-col"
    >
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) boxesRef.current[i] = el;
          }}
          className="box shrink-0 bg-accent"
          style={{
            height: "1.2vh",
            width: "50vw",
            marginBottom: "-0.2vh",
          }}
        />
      ))}
    </section>
  );
};

export default ScrollShutter;
