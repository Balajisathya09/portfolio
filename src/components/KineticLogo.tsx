
"use client";

import { motion } from "framer-motion";

export default function KineticLogo() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-4 group"
    >
      <div className="w-10 h-10 bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.2)] rounded-sm">
        <span className="text-black font-headline font-black text-xl">B</span>
      </div>
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-headline font-bold tracking-tighter text-white group-hover:text-primary transition-all duration-500 uppercase">BALAJI</span>
          <span className="text-primary font-black text-xl">.S</span>
        </div>
        <span className="text-[7px] tracking-[0.5em] font-black text-white/30 uppercase mt-1">Creative Engineering</span>
      </div>
    </motion.div>
  );
}
