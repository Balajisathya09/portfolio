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
  
  // We use a taller container (400vh) to "pin" the animation feel
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl mx-auto">
          <p className={className}>
            {words.map((word, i) => {
              // Distribute progress over the number of words
              const start = i / words.length;
              const end = Math.min(start + (2 / words.length), 1);
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

const Word = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.05, 1]);
  const blur = useTransform(progress, range, [10, 0]);
  const scale = useTransform(progress, range, [0.95, 1]);
  const y = useTransform(progress, range, [10, 0]);

  return (
    <motion.span
      style={{ opacity, filter: `blur(${blur}px)`, scale, y }}
      className="inline-block mr-[0.3em] mb-[0.2em] transition-all duration-75"
    >
      {children}
    </motion.span>
  );
};