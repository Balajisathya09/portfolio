"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function KineticCharacter() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full aspect-[4/5] flex items-center justify-center">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-64 h-80 bg-white/5 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-sm overflow-hidden group"
      >
        {/* Stylized Character Bust */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          {/* Head */}
          <motion.div 
            style={{ translateZ: 100 }}
            className="w-20 h-24 bg-primary rounded-full mb-4 shadow-[0_0_50px_rgba(255,215,0,0.3)] border-2 border-primary/50 overflow-hidden relative"
          >
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/20" />
             <div className="absolute top-0 left-1/2 w-[1px] h-full bg-black/20" />
          </motion.div>
          
          {/* Torso */}
          <motion.div 
            style={{ translateZ: 50 }}
            className="w-32 h-40 bg-white/10 rounded-t-full border border-white/20"
          >
            <div className="w-full h-full bg-gradient-to-b from-primary/20 to-transparent" />
          </motion.div>
        </div>

        {/* Floating Accents */}
        <motion.div 
          style={{ translateZ: 150 }}
          className="absolute top-10 right-10 w-4 h-4 rounded-full bg-primary"
        />
        <motion.div 
          style={{ translateZ: 120 }}
          className="absolute bottom-20 left-10 w-8 h-8 border border-primary rotate-45"
        />

        {/* Scanner Effect */}
        <motion.div 
          animate={{
            top: ["0%", "100%", "0%"]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute left-0 w-full h-[2px] bg-primary/30 z-20 shadow-[0_0_10px_rgba(255,215,0,0.5)]"
        />

        {/* Grain / Noise Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
      </motion.div>
      
      {/* Decorative Aura */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity
        }}
        className="absolute w-[150%] h-[150%] bg-primary/5 rounded-full blur-[100px] -z-10"
      />
    </div>
  );
}
