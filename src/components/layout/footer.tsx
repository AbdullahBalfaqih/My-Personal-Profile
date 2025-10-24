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

const Footer = () => {
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const lineRef = useRef(null);
    const isInView = useInView(lineRef, { once: true, amount: 0.5 });

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
        <footer id="footer" className="bg-black pt-12 pb-12 overflow-hidden">
            <div className="container mx-auto px-4">
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
                        <div className="flex space-x-2">
                            {PERSONAL_INFO.socials.map((social) => (
                                <Link key={social.name} href={social.url} target="_blank" rel="noopener">
                                    <Button variant="outline" size="icon" className="bg-card hover:bg-accent hover:text-accent-foreground">
                                        <social.icon className="h-4 w-4" />
                                    </Button>
                                </Link>
                            ))}
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
