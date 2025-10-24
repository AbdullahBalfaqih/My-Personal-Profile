import { LucideIcon } from "lucide-react";

interface TechIconProps {
  name: string;
  icon: LucideIcon;
}

const TechIcon = ({ name, icon: Icon }: TechIconProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-2 p-3 rounded-lg bg-black/30 border border-white/10 hover:border-accent hover:bg-accent/10 transition-colors">
      <Icon className="w-8 h-8 text-accent" />
      <span className="text-xs font-medium text-muted-foreground">{name}</span>
    </div>
  );
};

export default TechIcon;
