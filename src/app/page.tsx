import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import Testimonials from "@/components/sections/testimonials";
import Awards from "@/components/sections/awards";
import Blog from "@/components/sections/blog";
import Contact from "@/components/sections/contact";
import Marquee from "@/components/ui/marquee";
import Experience from "@/components/sections/experience";
import Footer from "@/components/layout/footer";
import ScrollReveal from "@/components/scroll-reveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0D0D0D] text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Experience />
        </ScrollReveal>
        <ScrollReveal>
          <Awards />
        </ScrollReveal>
        <ScrollReveal>
          <Marquee />
        </ScrollReveal>
        <ScrollReveal>
          <Services />
        </ScrollReveal>
        <ScrollReveal>
          <Portfolio />
        </ScrollReveal>
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal>
          <Blog />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
}
