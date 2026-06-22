
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    view?: string;
    source?: string;
    prototype?: string;
  };
}

const PROJECTS: Project[] = [
  {
    title: "GYM Website",
    category: "Web Development",
    description: "Modern fitness website with workout routines, trainer profiles, and membership management.",
    image: "https://picsum.photos/seed/gym-web/800/600",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    links: {
      view: "#",
      source: "#"
    }
  },
  {
    title: "Flask Hotel Project",
    category: "Web Development",
    description: "Hotel booking and management system built with Flask framework for seamless operations.",
    image: "https://picsum.photos/seed/hotel-flask/800/600",
    technologies: ["Python", "Flask", "HTML", "CSS"],
    links: {
      view: "#",
      source: "#"
    }
  },
  {
    title: "BookMyShow(Clone)",
    category: "UI/UX Design",
    description: "Entertainment booking platform UI/UX design prototype focused on user research and experience.",
    image: "https://picsum.photos/seed/bms-clone/800/600",
    technologies: ["Figma", "UI/UX Design", "Prototyping", "User Research", "Wireframe"],
    links: {
      view: "#",
      prototype: "#"
    }
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
          className="group relative flex flex-col bg-card border border-white/5 rounded-[2rem] overflow-hidden hover:border-primary/20 transition-all duration-500 shadow-2xl"
        >
          {/* Image Container */}
          <div className="aspect-[1.2/1] relative overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              data-ai-hint="project showcase"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
            <div className="absolute top-6 left-6">
               <span className="px-4 py-1.5 bg-primary text-black text-[9px] font-black uppercase tracking-widest rounded-full shadow-[0_4px_20px_rgba(255,215,0,0.3)]">
                 {project.category}
               </span>
            </div>
          </div>

          {/* Content Container */}
          <div className="p-10 flex flex-col flex-1 bg-black/50 backdrop-blur-md">
            <div className="mb-8">
              <h3 className="text-2xl font-headline font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-[11px] text-white/40 uppercase tracking-widest leading-loose font-medium">
                {project.description}
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] font-bold text-primary/60 uppercase tracking-widest">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-white/5 flex flex-wrap gap-4">
              {project.links.view && (
                <a href={project.links.view} className="flex-1 flex items-center justify-center gap-2 bg-primary text-black px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-primary/10">
                  View Project <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {project.links.source && (
                <a href={project.links.source} className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white/60 px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:text-white hover:border-primary/30 transition-all">
                  Source Code <Github className="w-3 h-3" />
                </a>
              )}
              {project.links.prototype && (
                <a href={project.links.prototype} className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white/60 px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:text-white hover:border-primary/30 transition-all">
                  View Prototype <Code2 className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
