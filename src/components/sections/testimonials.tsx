import Image from "next/image";
import SectionHeader from "../ui/section-header";
import a1 from "./1.jpg";
 const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl -z-10"></div>
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

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative flex flex-col items-center text-center p-8 bg-card/50 rounded-xl backdrop-blur-sm">
                    <div className="absolute top-0 -translate-y-1/2">
                         <Image 
                            src="https://framerusercontent.com/images/ttJWXF1xCg8sWDNE2i8PYtXZb64.svg"
                            alt="Quote icon"
                            width={80}
                            height={65}
                        />
                    </div>
                    <blockquote className="mt-8 text-xl text-muted-foreground">
                        "I would like to thank and praise Abdullah who developed an integrated system for us to manage the restaurant, which includes financial affairs, employees, and reports, in addition to creating a website for customers and online orders."
                    </blockquote>
                    <footer className="mt-6">
                        <p className="font-bold text-lg">Abdulaziz Qatmir</p>
                        <p className="text-muted-foreground">Restaurant Owner</p>
                    </footer>
                </div>

              
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
