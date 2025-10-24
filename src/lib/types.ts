import { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  fullDescription: string;
  whatIDo: string[];
  technologies: {
    name: string;
    icon: LucideIcon;
  }[];
};
