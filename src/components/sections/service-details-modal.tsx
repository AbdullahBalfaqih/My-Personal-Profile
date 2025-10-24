
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Service } from "@/lib/types";
import { CheckCircle } from "lucide-react";
import TechIcon from "./tech-icon";

interface ServiceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service;
}

const ServiceDetailsModal = ({ isOpen, onClose, service }: ServiceDetailsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl bg-card border-border text-card-foreground">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0">
              <service.icon className="w-8 h-8" />
            </div>
            <div>
              <DialogTitle className="text-3xl font-bold">{service.title}</DialogTitle>
              <DialogDescription className="text-muted-foreground mt-1">
                {service.shortDescription}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4 max-h-[70vh] overflow-y-auto pr-2">
            <div className="space-y-6">
                <div>
                    <h4 className="font-semibold text-lg mb-3 text-accent">About this Service</h4>
                    <p className="text-muted-foreground">{service.fullDescription}</p>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-3 text-accent">What I Deliver</h4>
                    <ul className="space-y-2">
                        {service.whatIDo.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <h4 className="font-semibold text-lg mb-3 text-accent">Technologies & Tools</h4>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                        {service.technologies.map((tech) => (
                            <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailsModal;
