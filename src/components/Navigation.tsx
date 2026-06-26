
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Download, Menu, X } from "lucide-react";
import KineticLogo from "./KineticLogo";
import { useState } from "react";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-12 py-6 lg:py-8 pointer-events-none">
        <div className="pointer-events-auto z-50 relative">
          <Link href="/">
            <KineticLogo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 pointer-events-auto bg-black/60 backdrop-blur-xl px-10 py-3 rounded-full border border-white/10 shadow-2xl">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                prefetch={true}
                className={cn(
                  "relative text-[10px] font-black uppercase tracking-[0.4em] hover:text-primary py-2 px-4",
                  isActive ? "text-primary" : "text-white/50"
                )}
              >
                {item.name}
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="pointer-events-auto hidden lg:block z-50 relative">
          <a 
            href="/Balaji-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.4em] bg-primary px-8 py-3.5 rounded-full text-black hover:bg-white transition-colors active:scale-95 shadow-lg shadow-primary/20"
          >
            Resume <Download className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile/Tablet Menu Toggle */}
        <button 
          className="lg:hidden pointer-events-auto z-50 relative p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile/Tablet Navigation Overlay */}
      <div className={cn(
        "fixed inset-0 bg-black/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 pointer-events-none opacity-0",
        isOpen && "opacity-100 pointer-events-auto"
      )}>
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              prefetch={true}
              onClick={() => setIsOpen(false)}
              className={cn(
                "relative text-xl font-black uppercase tracking-[0.3em] transition-colors duration-200",
                isActive ? "text-primary" : "text-white/50 hover:text-white"
              )}
            >
              {item.name}
            </Link>
          );
        })}
        <a 
          href="/Balaji-Resume.pdf"
          download="Balaji-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="mt-8 flex items-center gap-3 text-xs font-black uppercase tracking-[0.4em] bg-primary px-10 py-4 rounded-full text-black hover:bg-white transition-all active:scale-95"
        >
          Resume <Download className="w-4 h-4" />
        </a>
      </div>
    </>
  );
}
