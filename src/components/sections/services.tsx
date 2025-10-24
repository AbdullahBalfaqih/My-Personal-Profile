"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/data";
import ServiceDetailsModal from "./service-details-modal";
import { Service } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import SectionHeader from "../ui/section-header";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpenModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <section id="services" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid-white/[0.05] -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="absolute top-0 left-0 w-[200px] h-[200px] -translate-x-1/4 -translate-y-1/4 opacity-100">
            <Image 
                src="https://framerusercontent.com/images/2mOIYYfWmBs7Gew2SSMq8nYZTo.svg"
                alt="Decorative Icon"
                width={200}
                height={200}
            />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-left mb-12">
            <SectionHeader
                subtitle="My Linear Process"
                title="Work Process"
                titleClasses="text-4xl md:text-5xl"
                align="start"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className={cn(
                  "group text-center p-8 rounded-xl border bg-background/50 transition-all duration-300 h-full flex flex-col items-center cursor-pointer",
                   "border-white/10 hover:scale-105",
                   "hover:bg-card/90 hover:border-accent"
                )}
                onClick={() => handleOpenModal(service)}
              >
                <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-300",
                    "bg-card text-white group-hover:bg-accent group-hover:text-accent-foreground"
                    )}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm flex-grow">{service.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceDetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )}
    </>
  );
};

export default Services;
