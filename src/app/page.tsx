
"use client";

import NarrativeScroll from "@/components/NarrativeScroll";
import { ArrowRight, Download, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const FEATURED_PROJECTS = [
  {
    title: "GYM Website",
    overview: "Modern fitness website with workout routines, trainer profiles, and membership management. Built with a focus on high-performance interfaces.",
    image: "https://picsum.photos/seed/gym-web/1200/800",
    tech: ["HTML5", "CSS3", "JavaScript"],
    hint: "gym interior"
  },
  {
    title: "Flask Hotel Project",
    overview: "A comprehensive hotel booking and management system built with the Flask framework, ensuring seamless operations and user handling.",
    image: "https://picsum.photos/seed/hotel-flask/1200/800",
    tech: ["Python", "Flask", "PostgreSQL"],
    hint: "luxury hotel"
  },
  {
    title: "BookMyShow (Clone)",
    overview: "Entertainment booking platform UI/UX design prototype focused on deep user research and a frictionless checkout experience.",
    image: "https://picsum.photos/seed/bms-clone/1200/800",
    tech: ["Figma", "UI/UX", "Prototyping"],
    hint: "cinema theatre"
  }
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[150px] opacity-50" />
          <div className="absolute bottom-1/4 -right-1/4 w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[120px] opacity-30" />
        </div>

        <div className="max-w-screen-2xl mx-auto w-full flex flex-col items-center justify-center text-center pt-32 z-10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-6 mb-12"
          >
            <div className="h-[1px] w-12 bg-primary/30" />
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-primary">Creative Engineering</span>
            <div className="h-[1px] w-12 bg-primary/30" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[10vw] md:text-[9vw] font-headline font-bold leading-[0.82] tracking-tighter uppercase text-white mb-16"
          >
            BALAJI <br />
            <span className="stroke-text italic block mt-2">MANIFESTING</span>
            <span className="text-primary">PURITY.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-2xl space-y-16 flex flex-col items-center"
          >
            <p className="text-[11px] md:text-xs text-white/40 font-light leading-loose tracking-[0.4em] uppercase max-w-lg">
              Architecting <span className="text-white">cinematic digital realms</span> through code and interaction. Based in the intersection of visual precision and technical excellence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-12 pt-4">
              <Link href="/projects" className="group flex items-center gap-8 bg-primary text-black px-12 py-6 text-[11px] font-black uppercase tracking-[0.5em] transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,215,0,0.15)]">
                View Experiments
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
              <button className="group flex items-center gap-8 border border-white/10 text-white/40 px-12 py-6 text-[11px] font-bold uppercase tracking-[0.5em] hover:text-white hover:border-primary/50 transition-all active:scale-95 backdrop-blur-sm">
                Resume
                <Download className="w-4 h-4 group-hover:translate-y-2 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Technical Metadata Decoration */}
          <div className="absolute bottom-[-10vh] left-0 right-0 flex justify-between items-end px-4 hidden xl:flex">
            <div className="flex flex-col gap-2 opacity-10">
              <span className="text-[8px] font-black tracking-widest text-white uppercase">V.2025 // STABLE</span>
              <span className="text-[8px] font-black tracking-widest text-white uppercase">LAT: 13.1070° N, 80.2372° E</span>
            </div>
            <div className="flex flex-col gap-2 opacity-10 items-end">
              <span className="text-[8px] font-black tracking-widest text-white uppercase">INTERACTION PHASE: 01</span>
              <div className="w-24 h-[1px] bg-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="bg-black">
        <NarrativeScroll 
          className="text-xl md:text-2xl font-headline font-light uppercase tracking-[0.2em] leading-[1.8] text-center text-white px-12"
          text="WE ARE NOT JUST BUILDING INTERFACES. WE ARE CRAFTING NARRATIVES IN THE DIGITAL VOID. PRECISION IS OUR ONLY RELIGION. EVERY PIXEL IS A CHOICE."
        />
      </section>

      {/* Selected Works Showcase */}
      <section className="px-12 py-60 relative overflow-hidden bg-black/50">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-end mb-40 border-b border-white/5 pb-20">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <span className="text-[11px] font-black uppercase tracking-[0.8em] text-primary mb-6 block">Curated Archive</span>
              <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase tracking-tighter text-white">Selected Works</h2>
            </motion.div>
            <Link href="/projects" className="text-[10px] font-black uppercase tracking-[0.4em] hover:text-primary text-white/30 transition-colors flex items-center gap-4 mb-4">
              View All <ArrowUpRight className="w-4 h-4 text-primary" />
            </Link>
          </div>

          <div className="space-y-60">
            {FEATURED_PROJECTS.map((project, index) => (
              <div key={project.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-40 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}
                >
                  <div className="relative aspect-video rounded-sm overflow-hidden border border-white/5 bg-card grayscale hover:grayscale-0 transition-all duration-1000 group">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      data-ai-hint={project.hint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-12 lg:p-20">
                      <span className="text-[11px] font-black uppercase tracking-[0.6em] text-primary">Archive Ref: 00{index + 1}</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-12 lg:space-y-16"
                >
                  <div className="space-y-6">
                    <h3 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tighter text-white">{project.title}</h3>
                    <p className="text-xs text-white/30 font-light leading-loose max-w-sm tracking-[0.2em] uppercase">
                      {project.overview}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-10">
                    {project.tech.map(tech => (
                      <div key={tech} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-primary transition-colors cursor-default group">
                        <div className="w-1 h-1 bg-primary/20 rounded-full group-hover:bg-primary transition-colors shadow-[0_0_12px_transparent] group-hover:shadow-[0_0_12px_hsl(var(--primary))]" /> {tech}
                      </div>
                    ))}
                  </div>

                  <Link href="/projects" className="inline-flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.6em] text-primary group">
                    Study Lore <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
