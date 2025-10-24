"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  className?: string;
  once?: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  className,
  once = true,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isInView && isClient) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value, isClient]);

  useEffect(() => {
    if (isClient) {
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            latest.toFixed(0)
          );
        }
      });
    }
  }, [springValue, isClient]);
  
  if (!isClient) {
    return <span ref={ref} className={className}>{value}</span>;
  }

  return <span ref={ref} className={className} />;
};

export default AnimatedNumber;
