"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import KineticLogo from "./KineticLogo";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-12 pointer-events-none">
      <div className="pointer-events-auto">
        <Link href="/">
          <KineticLogo />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-16 pointer-events-auto bg-black/40 backdrop-blur-xl px-12 py-4 rounded-full border border-white/5">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative text-[9px] font-black uppercase tracking-[0.4em] transition-all duration-500 hover:text-primary",
                isActive ? "text-primary" : "text-white/40"
              )}
            >
              {item.name}
              {isActive && (
                <motion.div
                  layoutId="nav-dot"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_hsl(var(--primary))]"
                />
              )}
            </Link>
          );
        })}
      </div>

      <div className="pointer-events-auto hidden md:block">
        <Link 
          href="/contact" 
          className="text-[9px] font-black uppercase tracking-[0.4em] border border-primary/20 bg-primary/5 px-8 py-4 hover:bg-primary hover:text-black transition-all duration-500 text-primary hover:border-primary"
        >
          Project Inquiry
        </Link>
      </div>
    </nav>
  );
}