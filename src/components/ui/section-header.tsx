"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  subtitle: string;
  title: React.ReactNode;
  titleClasses?: string;
  subtitleClasses?: string;
  align?: "start" | "center";
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  titleClasses,
  subtitleClasses,
  align = "start",
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className={cn(
        "section-header w-full flex flex-col gap-4",
        {
          "items-center text-center": align === "center",
          "items-start text-left": align === "start",
        },
        className,
        isInView && "is-in-view"
      )}
    >
      <div
        className={cn("w-full flex items-center gap-4", {
          "justify-center": align === "center",
          "justify-start": align === "start",
        })}
      >
        {subtitle && (
            <p className={cn("text-muted-foreground font-semibold whitespace-nowrap", subtitleClasses)}>
            {subtitle}
            </p>
        )}
        <div className="flex-grow h-px bg-white/30 relative overflow-hidden section-header-line"></div>
      </div>
      <h2 className={cn("font-bold tracking-tighter self-start", {
        "self-center": align === "center",
        "self-start": align === "start",
      }, titleClasses)}>
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
