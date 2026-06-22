"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface NarrativeScrollProps {
  text: string;
  className?: string;
}

export default function NarrativeScroll({ text, className }: NarrativeScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  return (
    <div ref={containerRef} className={className}>
      <p className="flex flex-wrap justify-center gap-x-[0.4em] gap-y-3">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1.5 / words.length); // Adjusted for slightly longer overlap
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

const Word = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.08, 1]);
  const y = useTransform(progress, range, [15, 0]);
  const color = useTransform(progress, range, ["rgba(255,255,255,0.1)", "rgba(255,255,255,1)"]);
  const blur = useTransform(progress, range, [8, 0]);

  return (
    <motion.span
      style={{ opacity, y, color, filter: `blur(${blur}px)` }}
      className="inline-block transition-all duration-300 font-headline font-medium"
    >
      {children}
    </motion.span>
  );
};