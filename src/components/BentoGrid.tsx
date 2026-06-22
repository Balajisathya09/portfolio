
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  category: string;
  image: string;
  size: "small" | "medium" | "large" | "tall";
  color: string;
}

const PROJECTS: Project[] = [
  {
    title: "Neural Interface",
    category: "AI Design",
    image: "https://picsum.photos/seed/67/800/600",
    size: "large",
    color: "#FFD700"
  },
  {
    title: "Vortex Engine",
    category: "Graphics",
    image: "https://picsum.photos/seed/22/400/600",
    size: "tall",
    color: "#E67E22"
  },
  {
    title: "Quantum Portal",
    category: "UX Research",
    image: "https://picsum.photos/seed/12/400/300",
    size: "medium",
    color: "#FFD700"
  },
  {
    title: "Solis OS",
    category: "UI Design",
    image: "https://picsum.photos/seed/45/400/300",
    size: "small",
    color: "#E67E22"
  },
  {
    title: "Ether Wallet",
    category: "FinTech",
    image: "https://picsum.photos/seed/89/400/300",
    size: "medium",
    color: "#FFD700"
  }
];

export default function BentoGrid() {
  return (
    <div className="bento-grid">
      {PROJECTS.map((project, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -5 }}
          className={cn(
            "relative group rounded-2xl overflow-hidden border border-white/5 cursor-pointer bg-card",
            project.size === "large" && "md:col-span-2 md:row-span-2",
            project.size === "tall" && "md:row-span-2",
            project.size === "medium" && "md:col-span-2"
          )}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
            data-ai-hint="abstract tech"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 flex flex-col justify-end">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1">
              {project.category}
            </span>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-headline font-bold text-white group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
