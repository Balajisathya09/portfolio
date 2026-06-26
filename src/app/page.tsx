
"use client";

import NarrativeScroll from "@/components/NarrativeScroll";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import webImg from "../../asset/web.png";
import uiuxImg from "../../asset/uiux.png";
import videoImg from "../../asset/video editing.png";

const CAPABILITIES = [
  {
    title: "WEB DEVELOPER",
    desc: "ARCHITECTING HIGH-PERFORMANCE APPLICATIONS.",
    image: webImg,
    hint: "coding laptop"
  },
  {
    title: "UI/UX DESIGNER",
    desc: "CRAFTING INTUITIVE USER EXPERIENCES.",
    image: uiuxImg,
    hint: "design interface"
  },
  {
    title: "VIDEO EDITOR",
    desc: "MANIPULATING TEMPORAL NARRATIVES.",
    image: videoImg,
    hint: "video timeline"
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

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
            transition={{ duration: 1 }}
            className="text-[10vw] md:text-[9vw] font-headline font-bold leading-[0.82] tracking-tighter uppercase text-white mb-16"
          >
            BALAJI <br />
            <span className="stroke-text italic block mt-2">CRAFTING</span>
            <span className="text-primary">DIGITAL EXPERIENCES.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl space-y-16 flex flex-col items-center"
          >
            <p className="text-[11px] md:text-xs text-white/40 font-light leading-loose tracking-[0.4em] uppercase max-w-lg">
              Architecting <span className="text-white">cinematic digital realms</span> through code and interaction. Based in the intersection of visual precision and technical excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-12 pt-4 w-full px-6 md:px-0">
              <Link href="/projects" className="group flex justify-center items-center gap-4 md:gap-8 bg-primary text-black px-8 py-5 md:px-12 md:py-6 text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,215,0,0.15)] w-full sm:w-auto">
                View Experiments
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
              <button className="group flex justify-center items-center gap-4 md:gap-8 border border-white/10 text-white/40 px-8 py-5 md:px-12 md:py-6 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.5em] hover:text-white hover:border-primary/50 transition-all active:scale-95 backdrop-blur-sm w-full sm:w-auto">
                Resume
                <Download className="w-4 h-4 group-hover:translate-y-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="bg-black">
        <NarrativeScroll 
          className="text-xl md:text-2xl font-headline font-light uppercase tracking-[0.2em] leading-[1.8] text-center text-white px-12"
          text="WE ARE NOT JUST BUILDING INTERFACES. WE ARE CRAFTING NARRATIVES IN THE DIGITAL VOID. PRECISION IS OUR ONLY RELIGION. EVERY PIXEL IS A CHOICE."
        />
      </section>

      {/* Stacked Cards Section */}
      <section ref={containerRef} className="h-[400vh] relative bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {CAPABILITIES.map((cap, index) => (
            <CapabilityCard 
              key={index} 
              cap={cap} 
              index={index} 
              total={CAPABILITIES.length} 
              progress={scrollYProgress} 
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function CapabilityCard({ cap, index, total, progress }: { cap: any, index: number, total: number, progress: any }) {
  const start = index / total;
  const end = (index + 1) / total;
  
  const translateY = useTransform(progress, [start - 0.1, start], ["100%", "0%"]);
  const scale = useTransform(progress, [start, end], [1, 0.9]);
  const opacity = useTransform(progress, [start, end - 0.05], [1, 0.2]);

  return (
    <motion.div 
      style={{ 
        y: index === 0 ? 0 : translateY,
        scale: index === total - 1 ? 1 : scale,
        opacity: index === total - 1 ? 1 : opacity,
        zIndex: index 
      }}
      className="absolute inset-0 w-full h-screen flex items-center justify-center bg-black"
    >
      <div className="relative w-full h-full">
        {cap.image && (
          <Image 
            src={cap.image} 
            alt={cap.title} 
            fill 
            className="object-cover grayscale opacity-50"
            data-ai-hint={cap.hint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-[1em] block mb-4">Capability {index + 1}</span>
            <h2 className="text-6xl md:text-[10vw] font-headline font-bold text-white uppercase tracking-tighter leading-none">
              {cap.title.split(' ')[0]} <br />
              <span className="text-primary stroke-text">{cap.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-[10px] md:text-xs text-white/40 font-black uppercase tracking-[0.5em] max-w-xl mx-auto leading-relaxed pt-8">
              {cap.desc}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
