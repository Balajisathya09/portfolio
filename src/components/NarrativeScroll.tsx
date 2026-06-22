
"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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
      <p className="flex flex-wrap gap-x-[0.3em] gap-y-0 leading-[1.1] md:leading-[1]">
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
  const opacity = useTransform(progress, range, [0.1, 1]);
  const color = useTransform(progress, range, ["#ffffff1a", "#FFD700"]);
  const y = useTransform(progress, range, [10, 0]);

  return (
    <span className="relative">
      <motion.span
        style={{ opacity, color, y }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
};
