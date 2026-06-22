"use client";

import { motion } from "framer-motion";

export default function KineticLogo() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center justify-center group cursor-pointer"
    >
      {/* Outer Glow/Ring */}
      <div className="absolute inset-0 rounded-full bg-white/5 blur-md group-hover:bg-primary/10 transition-colors duration-500" />
      
      {/* Circle Container */}
      <div className="relative w-12 h-12 bg-black border border-white/10 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
        
        {/* Stylized 'N' SVG */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-6 h-6 text-white group-hover:text-primary transition-colors duration-500"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M20 80V20L50 55V20H80V80L50 45V80H20Z" 
            fill="currentColor" 
            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
          />
          {/* Subtle diagonal cut effect */}
          <rect x="48" y="40" width="4" height="20" fill="black" transform="rotate(-45 48 40)" className="opacity-20" />
        </svg>
      </div>

      {/* Text label next to logo */}
      <div className="ml-4 flex flex-col leading-none">
        <span className="text-sm font-headline font-bold tracking-[0.2em] text-white uppercase group-hover:text-primary transition-colors duration-500">
          BALAJI.S
        </span>
        <span className="text-[6px] font-black tracking-[0.4em] text-white/30 uppercase mt-1">
          Creative Engineering
        </span>
      </div>
    </motion.div>
  );
}
