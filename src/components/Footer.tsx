"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: <Instagram className="w-4 h-4" />, href: "#", label: "Instagram" },
  { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" },
  { icon: <Github className="w-4 h-4" />, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="px-12 py-12 border-t border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[10px] font-black uppercase tracking-[0.8em] text-white/20"
        >
          copyrights@balaji.s 2026
        </motion.div>

        <div className="flex gap-8">
          {SOCIAL_LINKS.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -3, color: "hsl(var(--primary))" }}
              className="text-white/20 transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex gap-8"
        >
          <span className="text-[8px] font-black text-white/10 uppercase tracking-[0.3em]">Privacy</span>
          <span className="text-[8px] font-black text-white/10 uppercase tracking-[0.3em]">Terms</span>
        </motion.div>
      </div>
    </footer>
  );
}
