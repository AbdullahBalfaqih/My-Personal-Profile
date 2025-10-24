"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/lib/data";
import { Button } from "../ui/button";
import { ArrowRight, Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/ai/flows/send-email-flow";
import SectionHeader from "../ui/section-header";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    let sanitizedValue = value;

    if (id === 'phoneNumber') {
      sanitizedValue = value.replace(/[^0-9+\-().\s]/g, '');
    }
    
    setFormState(prevState => ({
      ...prevState,
      [id]: sanitizedValue,
    }));
  };

  const handleSendMessage = async () => {
    const { name, email, phoneNumber, message } = formState;

    if (!name || !email || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
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
        name: name,
        email: email,
        phone: phoneNumber,
        message: message,
        type: "contact",
      });

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. Please check your email for a confirmation.",
        });
        setFormState({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error instanceof Error ? error.message : "Could not send your message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-12">
             <SectionHeader 
                subtitle="Estimate Your Project"
                title="Get in touch"
                titleClasses="text-5xl md:text-6xl"
                align="start"
            />
          </div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div className="space-y-8 flex flex-col">
                <Card className="p-8 bg-black w-full flex-1">
                    <CardContent className="p-0 h-full">
                        <div className="space-y-8 flex flex-col items-start justify-center h-full">
                            <h5 className="text-xl font-bold">Company Info</h5>
                            <div className="space-y-6">
                                <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-4 group">
                                <div className="w-10 h-10 bg-card flex items-center justify-center rounded-lg">
                                    <Phone className="w-5 h-5 text-accent"/>
                                </div>
                                <h6 className="font-semibold text-lg group-hover:text-accent transition-colors">{PERSONAL_INFO.phone}</h6>
                                </a>
                                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 bg-card flex items-center justify-center rounded-lg">
                                        <Mail className="w-5 h-5 text-accent"/>
                                    </div>
                                <h6 className="font-semibold text-lg group-hover:text-accent transition-colors">{PERSONAL_INFO.email}</h6>
                                </a>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-card flex items-center justify-center rounded-lg">
                                        <MapPin className="w-5 h-5 text-accent"/>
                                    </div>
                                <h6 className="font-semibold text-lg">{PERSONAL_INFO.location}</h6>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Right: Contact Form */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-semibold">Name</label>
                  <Input id="name" type="text" placeholder="Your Full Name" required className="bg-card border-border" value={formState.name} onChange={handleInputChange} disabled={isLoading} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="font-semibold">Email</label>
                  <Input id="email" type="email" placeholder="Your Email Address" required className="bg-card border-border" value={formState.email} onChange={handleInputChange} disabled={isLoading} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phoneNumber" className="font-semibold">Phone Number</label>
                  <Input id="phoneNumber" type="tel" placeholder="Your Phone Number" className="bg-card border-border" value={formState.phoneNumber} onChange={handleInputChange} disabled={isLoading} />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="font-semibold">Message</label>
                <Textarea id="message" placeholder="Write your message here...." rows={5} required className="bg-card border-border" value={formState.message} onChange={handleInputChange} disabled={isLoading} />
              </div>
              <Button onClick={handleSendMessage} size="lg" className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    SENDING...
                  </>
                ) : (
                  <>
                    SEND MESSAGE <ArrowRight className="ml-2 h-4 w-4"/>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
