
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
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 pointer-events-none">
      <div className="pointer-events-auto">
        <Link href="/" className="block">
          <KineticLogo />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-1 bg-black/40 backdrop-blur-xl border border-white/5 rounded-full p-1 pointer-events-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative px-6 py-2 text-sm font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-white/60"
              )}
            >
              {item.name}
              {isActive && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-white/5 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>

      <div className="pointer-events-auto hidden md:block">
        <Link 
          href="/contact" 
          className="bg-primary text-black px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-transform"
        >
          Hire Me
        </Link>
      </div>
    </nav>
  );
}
