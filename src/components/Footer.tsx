
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import KineticLogo from "./KineticLogo";

const FOOTER_LINKS = [
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "Behance", href: "#" },
];

export default function Footer() {
  return (
    <footer className="px-12 py-20 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/">
              <KineticLogo />
            </Link>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] leading-loose max-w-xs">
              Architecting cinematic digital realms through code and interaction. Based in Chennai, India.
            </p>
          </div>
          
          <div className="space-y-6">
            <span className="text-primary font-black text-[10px] uppercase tracking-[0.5em] block">Sitemap</span>
            <ul className="space-y-4">
              {["Home", "Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <span className="text-primary font-black text-[10px] uppercase tracking-[0.5em] block">Connect</span>
            <ul className="space-y-4">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <span className="text-primary font-black text-[10px] uppercase tracking-[0.5em] block">Newsletter</span>
            <div className="flex flex-col gap-4">
               <input 
                placeholder="EMAIL@DOMAIN.COM"
                className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-[9px] text-white placeholder:text-white/10 focus:outline-none focus:border-primary transition-all uppercase tracking-widest"
               />
               <button className="bg-primary text-black py-4 rounded-xl text-[9px] font-black uppercase tracking-[0.4em] hover:scale-105 transition-all">
                 Subscribe
               </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="text-[10px] font-black uppercase tracking-[0.8em] text-white/10">
            © 2025 <span className="text-primary/40">BALAJI.S</span> STUDIO
          </div>
          <div className="flex gap-12">
            <span className="text-[8px] font-black text-white/10 uppercase tracking-[0.3em]">Privacy Policy</span>
            <span className="text-[8px] font-black text-white/10 uppercase tracking-[0.3em]">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
