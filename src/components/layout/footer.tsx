"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/ai/flows/send-email-flow";
import { PERSONAL_INFO } from "@/lib/data";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Footer = () => {
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const lineRef = useRef(null);
    const isInView = useInView(lineRef, { once: true, amount: 0.5 });
    
    const containerRef = useRef<HTMLDivElement>(null);

    const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!newsletterEmail) {
            toast({
                title: "Email is required",
                description: "Please enter your email address.",
                variant: "destructive",
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(newsletterEmail)) {
            toast({
                title: "Invalid Email",
                description: "Please enter a valid email address.",
                variant: "destructive",
            });
            return;
        }

        setIsLoading(true);

        try {
            const result = await sendEmail({
                name: "Newsletter Subscriber",
                email: newsletterEmail,
                type: "newsletter",
            });

            if (result.success) {
                toast({
                    title: "Subscription Successful!",
                    description: "Thank you for subscribing. Please check your email for a confirmation.",
                });
                setNewsletterEmail("");
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            console.error("Newsletter submission error:", error);
            toast({
                title: "Subscription Failed",
                description: "Could not subscribe to the newsletter. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const navigationLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#portfolio", label: "My Projects" },
        { href: "#blog", label: "Blog" },
    ];

    const serviceLinks = [
        { href: "#web-development", label: "Web Development" },
        { href: "#mobile-desktop-apps", label: "Mobile & Desktop Apps" },
        { href: "#database-management", label: "Database Management" },
    ];

    return (
        <footer 
            id="footer" 
            ref={containerRef}
            className="relative bg-black pt-12 pb-12 overflow-hidden h-screen flex flex-col justify-center"
        >

            <div className="container mx-auto px-4 relative z-10">
                <div
                    ref={lineRef}
                    className={cn("footer-line mb-24", isInView && "is-in-view")}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {/* About Me */}
                    <div className="space-y-4">
                        <h6 className="font-semibold text-lg">About Me</h6>
                        <p className="text-muted-foreground">
                            A dynamic and creative developer dedicated to transforming visions into captivating digital experiences.
                        </p>
                        <div className="action-wrap">
                            {/* LinkedIn */}
                            <Link className="action" href={PERSONAL_INFO.socials.find(s => s.name === "LinkedIn")?.url || "#"} target="_blank" rel="noopener">
                                <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                                    <path d="M8 11l0 5"></path>
                                    <path d="M8 8l0 .01"></path>
                                    <path d="M12 16l0 -5"></path>
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                </svg>
                                <span className="action-content" data-content="linkedin"></span>
                            </Link>

                            {/* GitHub */}
                            <Link className="action" href={PERSONAL_INFO.socials.find(s => s.name === "GitHub")?.url || "#"} target="_blank" rel="noopener">
                                <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                </svg>
                                <span className="action-content" data-content="github"></span>
                            </Link>

                            {/* Twitter / X */}
                            <Link className="action" href={PERSONAL_INFO.socials.find(s => s.name === "Twitter")?.url || "#"} target="_blank" rel="noopener">
                                <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                </svg>
                                <span className="action-content" data-content="twitter"></span>
                            </Link>

                            {/* Email */}
                            <Link className="action" href={PERSONAL_INFO.socials.find(s => s.name === "Email")?.url || "mailto:abdullahbalfaqih0@gmail.com"} target="_blank" rel="noopener">
                                <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                                    <path d="M3 7l9 6l9 -6"></path>
                                </svg>
                                <span className="action-content" data-content="email"></span>
                            </Link>

                            {/* Telegram */}
                            <Link className="action" href={PERSONAL_INFO.socials.find(s => s.name === "Telegram")?.url || "https://t.me/aqih0"} target="_blank" rel="noopener">
                                <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
                                </svg>
                                <span className="action-content" data-content="telegram"></span>
                            </Link>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h6 className="font-semibold text-lg">Navigation</h6>
                        <ul className="space-y-2">
                            {navigationLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-white">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h6 className="font-semibold text-lg">Services</h6>
                        <ul className="space-y-2">
                            {serviceLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-white">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h6 className="font-semibold text-lg">Newsletter</h6>
                        <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-card border-border"
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                disabled={isLoading}
                            />
                            <Button type="submit" size="icon" className="bg-accent text-accent-foreground flex-shrink-0" disabled={isLoading}>
                                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="relative text-center pt-12">
                    <Link href="#home">
                        <div className="text-center py-10">
                            <p className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-bold uppercase text-white leading-none font-headline">Balfaqih</p>
                        </div>
                    </Link>
                    <div className="border-t border-white/10 mt-12">
                        <div className="container mx-auto px-4 py-4">
                            <p className="text-center text-sm text-muted-foreground">
                                © {new Date().getFullYear()} All rights for <span className="text-white">Balfaqih</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
