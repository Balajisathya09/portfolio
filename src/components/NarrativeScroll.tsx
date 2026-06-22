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
    offset: ["start 70%", "end 30%"]
  });

  return (
    <div ref={containerRef} className={className}>
      <p className="flex flex-wrap justify-center gap-x-[0.3em] gap-y-2">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length);
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
  const opacity = useTransform(progress, range, [0.05, 1]);
  const y = useTransform(progress, range, [10, 0]);
  const blur = useTransform(progress, range, [4, 0]);

  return (
    <motion.span
      style={{ opacity, y, filter: `blur(${blur}px)` }}
      className="inline-block transition-all duration-300"
    >
      {children}
    </motion.span>
  );
};