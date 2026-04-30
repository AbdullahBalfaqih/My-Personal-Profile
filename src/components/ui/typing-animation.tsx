"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
}

export function TypingAnimation({
  children,
  className,
  duration = 50,
  delay = 0,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);
  const [isStarted, setIsStarted] = useState(false);

  // Reset when children change
  useEffect(() => {
    setDisplayedText("");
    setI(0);
    setIsStarted(false);
    
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
    }, delay);
    
    return () => clearTimeout(startTimeout);
  }, [children, delay]);

  // Typing logic
  useEffect(() => {
    if (!isStarted) return;
    if (i >= children.length) return;

    const timeout = setTimeout(() => {
      setDisplayedText(children.substring(0, i + 1));
      setI(i + 1);
    }, duration);

    return () => clearTimeout(timeout);
  }, [isStarted, i, children, duration]);

  return (
    <span
      className={cn(
        "inline-block min-h-[1em]",
        className
      )}
    >
      {displayedText}
    </span>
  );
}
