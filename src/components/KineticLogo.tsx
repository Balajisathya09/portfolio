"use client";

import { motion } from "framer-motion";

export default function KineticLogo() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3 group"
    >
      <div className="w-8 h-8 bg-white flex items-center justify-center">
        <span className="text-black font-headline font-bold text-lg">B</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-lg font-headline font-medium tracking-tight text-white group-hover:tracking-widest transition-all duration-500">BALAJI</span>
        <span className="text-[8px] tracking-[0.4em] font-light text-white/40 uppercase">Creative Engineering</span>
      </div>
    </motion.div>
  );
}