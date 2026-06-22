"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  github?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Neural Interface",
    category: "AI Design",
    description: "Brain-computer interaction experiments using neural networks and real-time visualization.",
    image: "https://picsum.photos/seed/67/800/600",
    link: "#",
    github: "https://github.com"
  },
  {
    title: "Vortex Engine",
    category: "Graphics",
    description: "Procedural geometry engine built for high-performance WebGL 2.0 rendering contexts.",
    image: "https://picsum.photos/seed/22/800/600",
    link: "#",
    github: "https://github.com"
  },
  {
    title: "Quantum Portal",
    category: "UX Research",
    description: "Exploration into multi-dimensional navigation patterns and spatial UI architecture.",
    image: "https://picsum.photos/seed/12/800/600",
    link: "#"
  },
  {
    title: "Solis OS",
    category: "UI Design",
    description: "A minimalist operating system interface focused on focus and organic interaction.",
    image: "https://picsum.photos/seed/45/800/600",
    link: "#"
  },
  {
    title: "Ether Wallet",
    category: "FinTech",
    description: "Decentralized finance dashboard with advanced analytics and secure transaction layers.",
    image: "https://picsum.photos/seed/89/800/600",
    link: "#",
    github: "https://github.com"
  }
];

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROJECTS.map((project, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="group relative flex flex-col bg-card border border-white/5 rounded-3xl overflow-hidden hover:border-primary/20 transition-all duration-500"
        >
          {/* Image Container */}
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              data-ai-hint="abstract technology"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
            <div className="absolute top-6 left-6">
               <span className="px-3 py-1 bg-primary text-black text-[9px] font-black uppercase tracking-widest rounded-full">
                 {project.category}
               </span>
            </div>
          </div>

          {/* Content Container */}
          <div className="p-8 flex flex-col flex-1 justify-between bg-black/50 backdrop-blur-md">
            <div>
              <h3 className="text-2xl font-headline font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-[11px] text-white/40 uppercase tracking-widest leading-relaxed mb-8">
                {project.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" className="p-2 text-white/40 hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                )}
                <a href={project.link} className="p-2 text-white/40 hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <Link 
                href={project.link} 
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary group-hover:gap-4 transition-all"
              >
                Project Details <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}