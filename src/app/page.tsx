import NarrativeScroll from "@/components/NarrativeScroll";
import { ArrowRight, Download, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center px-12 relative">
        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-12 overflow-hidden">
              <div className="h-px w-8 bg-white/20" />
              <span className="text-[10px] font-medium uppercase tracking-[0.5em] text-white/40">Interactive Portfolio 2025</span>
            </div>
            
            <h1 className="text-[8vw] md:text-[6.5vw] font-headline font-light leading-[0.9] tracking-tighter uppercase text-white mb-16">
              BALAJI <br />
              <span className="stroke-text font-bold italic">MANIFESTING</span> <br />
              DIGITAL PURETY.
            </h1>

            <div className="max-w-lg space-y-10">
              <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed">
                A multidisciplinary engineer specializing in building <span className="text-white">cinematic experiences</span> that bridge the gap between imagination and reality.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link href="/projects" className="group flex items-center gap-4 bg-white text-black px-8 py-5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:pr-12">
                  Selected Works
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="group flex items-center gap-4 border border-white/10 text-white px-8 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white/5 transition-all">
                  Resume
                  <Download className="w-3 h-3 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex items-center justify-center relative">
            <div className="w-full aspect-[4/5] relative rounded-sm overflow-hidden animate-float grayscale group">
              <Image 
                src="https://picsum.photos/seed/macro-tech/800/1000"
                alt="Macro Detail"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                data-ai-hint="macro technology detail"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-1000" />
            </div>
            {/* 3D-ish decorative label */}
            <div className="absolute -bottom-10 -left-10 bg-black border border-white/10 p-8 backdrop-blur-xl hidden xl:block">
              <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-white/30 block mb-2">Core Focus</span>
              <span className="text-sm font-headline font-medium text-white">Visual Engineering</span>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section - Word Reveal */}
      <section className="px-12 py-60 bg-black relative">
        <div className="max-w-screen-xl mx-auto">
          <NarrativeScroll 
            className="text-3xl md:text-5xl lg:text-6xl font-headline font-light uppercase tracking-tight leading-[1.1] text-center"
            text="WE ARE NOT JUST BUILDING INTERFACES. WE ARE CRAFTING NARRATIVES IN THE DIGITAL VOID. EVERY PIXEL IS A CHOICE. EVERY MOTION IS AN EMOTION. PRECISION IS OUR RELIGION."
          />
        </div>
      </section>

      {/* Featured Project - Macro Animation Style */}
      <section className="px-12 py-40">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/40 block mb-4">Latest Experiment</span>
              <h2 className="text-4xl md:text-5xl font-headline font-light uppercase tracking-tighter">Vortex Engine v2</h2>
            </div>
            <Link href="/projects" className="text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white/100 text-white/40 transition-colors flex items-center gap-2">
              All experiments <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-video rounded-sm overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000 group">
              <Image 
                src="https://picsum.photos/seed/vortex/1200/800"
                alt="Vortex Engine"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                data-ai-hint="liquid metal abstraction"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white">Module 01: Refraction</span>
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-headline font-light uppercase tracking-widest text-white/80">Macro Precision.</h3>
              <p className="text-white/40 font-light leading-relaxed max-w-md">
                Exploring the boundaries of real-time shaders and procedural generation. This module focuses on how light interacts with synthetic materials in a weightless environment.
              </p>
              <ul className="space-y-4">
                {["WebGL 2.0", "Reactive Motion", "Lidar Sync"].map(tech => (
                  <li key={tech} className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors">
                    <div className="w-4 h-[1px] bg-white/20" /> {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="px-12 py-20 border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">
            © 2025 BALAJI studio
          </div>
          <div className="flex gap-12">
            {["GitHub", "LinkedIn", "Instagram"].map(s => (
              <a key={s} href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}