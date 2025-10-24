import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[90svh] min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <Image
          src="https://framerusercontent.com/images/m4dKAuxSoRsJwbzFiB73wjOWng.svg"
          alt="Background Hero Image"
          fill
          className="opacity-20 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>
      
      <div className="container px-4 text-center">
        <div className="relative max-w-5xl mx-auto flex flex-col items-center">
            <p className="text-xl font-medium text-muted-foreground animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">Hello! I'm Abdullah Balfaqih</p>
            <div className="my-4 relative">
                <h1 className="text-8xl md:text-9xl font-bold uppercase tracking-tighter animate-in fade-in-0 slide-in-from-bottom-16 duration-1000 delay-500">FULL-STACK</h1>
                <div className="absolute top-1/2 -right-4 md:-right-24 animate-in fade-in-0 zoom-in-50 duration-700 delay-1500">
                     <svg width="60" height="60" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-twinkle md:w-[80px] md:h-[80px]">
                        <path d="M29 58C28.1604 30.526 27.474 29.8439 0 29C27.474 28.1604 28.1562 27.474 29 0C29.8396 27.474 30.526 28.1562 58 29C30.526 29.8439 29.8439 30.5176 29 58Z" fill="#C9F31D"></path>
                    </svg>
                </div>
            </div>
            <h1 className="text-8xl md:text-9xl font-bold uppercase tracking-tighter animate-in fade-in-0 slide-in-from-bottom-16 duration-1000 delay-700">ENGINEER</h1>
            <div className="relative mt-8 max-w-2xl mx-auto w-full">
                 <p className="text-xl text-muted-foreground animate-in fade-in-0 slide-in-from-bottom-12 duration-700 delay-900">
                    I build robust and scalable web solutions, merging my expertise in IT and engineering to create exceptional digital experiences.
                </p>
                <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-0 h-1 bg-accent animate-draw-line delay-2000"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
