
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function KineticLogo() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="flex items-center gap-2 group cursor-pointer"
    >
      <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-shadow group-hover:shadow-[0_0_35px_rgba(255,215,0,0.6)]">
        <span className="text-black font-headline font-bold text-2xl">F</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-headline font-bold tracking-tighter text-white group-hover:text-primary transition-colors">FLUXION</span>
        <span className="text-[10px] tracking-[0.3em] font-medium text-white/40 uppercase">Studio</span>
      </div>
    </motion.div>
  );
}
