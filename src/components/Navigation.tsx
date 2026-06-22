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
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-10 pointer-events-none">
      <div className="pointer-events-auto">
        <Link href="/">
          <KineticLogo />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-12 pointer-events-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative text-[10px] font-medium uppercase tracking-[0.3em] transition-all duration-500 hover:text-white",
                isActive ? "text-white" : "text-white/40"
              )}
            >
              {item.name}
              {isActive && (
                <motion.div
                  layoutId="nav-dot"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                />
              )}
            </Link>
          );
        })}
      </div>

      <div className="pointer-events-auto hidden md:block">
        <Link 
          href="/contact" 
          className="text-[10px] font-bold uppercase tracking-[0.3em] border border-white/10 px-6 py-3 hover:bg-white hover:text-black transition-all duration-500"
        >
          Inquiry
        </Link>
      </div>
    </nav>
  );
}