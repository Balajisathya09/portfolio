
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import KineticLogo from "./KineticLogo";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-8 pointer-events-none">
      <div className="pointer-events-auto">
        <Link href="/">
          <KineticLogo />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-10 pointer-events-auto bg-black/60 backdrop-blur-xl px-10 py-3 rounded-full border border-white/10 shadow-2xl">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative text-[10px] font-black uppercase tracking-[0.4em] transition-colors duration-200 hover:text-primary py-2 px-4",
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

      <div className="pointer-events-auto hidden md:block">
        <button 
          className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.4em] bg-primary px-8 py-3.5 rounded-full text-black hover:bg-white transition-all active:scale-95 shadow-lg shadow-primary/20"
        >
          Resume <Download className="w-3 h-3" />
        </button>
      </div>
    </nav>
  );
}
