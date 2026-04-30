import Image from "next/image";
import SectionHeader from "../ui/section-header";
import { User } from "lucide-react";

 const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
            <div className="text-left mb-12">
                <SectionHeader
                    subtitle="Testimonials"
                    title="What my clients say"
                    titleClasses="text-4xl md:text-5xl"
                    align="start"
                />
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="relative md:col-span-8 flex flex-col items-center text-center p-12 bg-black/40 border border-white/5 rounded-[2rem] backdrop-blur-xl">
                    <div className="absolute top-0 -translate-y-1/2 left-12">
                         <Image 
                            src="https://framerusercontent.com/images/ttJWXF1xCg8sWDNE2i8PYtXZb64.svg"
                            alt="Quote icon"
                            width={60}
                            height={45}
                            className="opacity-50"
                        />
                    </div>
                    <blockquote className="mt-4 text-xl text-white/80 leading-relaxed font-medium">
                        "I would like to thank and praise Abdullah who developed an integrated system for us to manage the restaurant, which includes financial affairs, employees, and reports, in addition to creating a website for customers and online orders."
                    </blockquote>
                    <footer className="mt-8 pt-8 border-t border-white/5 w-full">
                        <p className="font-black text-white text-xl uppercase tracking-tighter">Abdulaziz Qatmir</p>
                        <p className="text-accent text-sm font-bold uppercase tracking-widest mt-1">Restaurant Owner</p>
                    </footer>
                </div>

                <div className="hidden md:flex md:col-span-4 h-full items-center justify-center">
                    <div className="relative group w-full aspect-square max-w-[280px]">
                        <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-[2rem]"></div>
                        <div className="relative h-full w-full rounded-[2rem] border border-white/10 flex items-center justify-center bg-black/60 backdrop-blur-md shadow-2xl overflow-hidden transition-colors">
                            <User className="size-32 text-white/20" strokeWidth={0.5} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
