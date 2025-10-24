import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '../ui/section-header';
import a1 from "./c.png";
import a2 from "./d.png";
import a3 from "./e.png";
import a4 from "./f.png";
const projects = [
    {
        name: "Crisper Restaurant Management",
        href: "https://www.crisper.food/",
        imageSrc: a1
    },
    {
        name: "Clean Your Neighborhood",
        href: "https://cleanyourhood.homes/dashboard",
        imageSrc: a2
    },
    {
        name: "Global Truck Site & Aljauidi Branches Management",
        href: "https://global-truck-mqys.vercel.app/track",
        imageSrc: a3    },
    {
        name: "USDT Payment Comming Soon!",
        href: "#",
        imageSrc: a4
    },
]

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                     <SectionHeader 
                        subtitle="" 
                        title="My Projects"
                        titleClasses="text-5xl md:text-6xl uppercase"
                        align="center"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <Link href={project.href} key={project.name} className="group block">
                            <div className="relative overflow-hidden rounded-xl w-full h-[500px] md:h-[500px] lg:h-[550px]">
                                {/* الصورة */}
                                <Image
                                    src={project.imageSrc}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />

                                {/* التعتيم عند التمرير */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                                {/* العنوان */}
                                <div className="absolute bottom-4 left-4">
                                    <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full">
                                        <h3 className="font-semibold text-base md:text-lg">{project.name}</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;
