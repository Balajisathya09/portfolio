import NarrativeScroll from "@/components/NarrativeScroll";
import { ArrowRight, Download, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import KineticCharacter from "@/components/KineticCharacter";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-12 relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-32">
          <div className="lg:col-span-8 z-10">
            <div className="flex items-center gap-4 mb-8 overflow-hidden">
              <div className="h-[1px] w-12 bg-primary/40" />
              <span className="text-[9px] font-bold uppercase tracking-[0.6em] text-primary">Creative Engineering Studio</span>
            </div>
            
            <h1 className="text-[7vw] md:text-[6.5vw] font-headline font-bold leading-[0.85] tracking-tighter uppercase text-white mb-12">
              BALAJI <br />
              <span className="stroke-text italic">MANIFESTING</span> <br />
              <span className="text-primary">PURITY.</span>
            </h1>

            <div className="max-w-md space-y-12">
              <p className="text-xs md:text-sm text-white/50 font-light leading-relaxed tracking-widest uppercase">
                Architecting <span className="text-white">cinematic digital realms</span> through code and interaction. Based in the intersection of visual precision and technical excellence.
              </p>
              
              <div className="flex flex-wrap gap-8">
                <Link href="/projects" className="group flex items-center gap-6 bg-primary text-black px-10 py-5 text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:scale-105 active:scale-95">
                  View Experiments
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="group flex items-center gap-6 border border-white/10 text-white/60 px-10 py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:text-white hover:border-primary/50 transition-all active:scale-95">
                  Resume
                  <Download className="w-3 h-3 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex items-center justify-center relative">
            <KineticCharacter />
            
            {/* Minimal floating tech info */}
            <div className="absolute -bottom-6 -left-6 bg-black border border-white/10 p-6 backdrop-blur-xl hidden xl:block z-20 shadow-2xl">
              <span className="text-[8px] font-black uppercase tracking-[0.5em] text-primary block mb-2">Technical Aura</span>
              <span className="text-[10px] font-headline font-medium text-white/80">001 // High Performance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section - Word Reveal - Sticky Scroller */}
      <section className="bg-black">
        <NarrativeScroll 
          className="text-xl md:text-2xl font-headline font-light uppercase tracking-[0.1em] leading-[1.6] text-center text-white"
          text="WE ARE NOT JUST BUILDING INTERFACES. WE ARE CRAFTING NARRATIVES IN THE DIGITAL VOID. PRECISION IS OUR ONLY RELIGION. EVERY PIXEL IS A CHOICE."
        />
      </section>

      {/* Featured Experiment */}
      <section className="px-12 py-40">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-end mb-24 border-b border-white/5 pb-16">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-4 block">Selected Study</span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tighter text-white">Vortex Engine</h2>
            </div>
            <Link href="/projects" className="text-[10px] font-black uppercase tracking-[0.4em] hover:text-primary text-white/30 transition-colors flex items-center gap-3">
              View All <ArrowUpRight className="w-3 h-3 text-primary" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="relative aspect-video rounded-sm overflow-hidden border border-white/5 bg-card grayscale hover:grayscale-0 transition-all duration-1000 group shadow-2xl">
              <img 
                src="https://picsum.photos/seed/vortex-gold/1200/800"
                alt="Vortex Engine"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                data-ai-hint="liquid metal abstraction"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-16">
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary">Core Phase: Interaction</span>
              </div>
            </div>
            <div className="space-y-12">
              <h3 className="text-xl font-headline font-bold uppercase tracking-widest text-white/90 underline decoration-primary/50 underline-offset-8">Macro Precision.</h3>
              <p className="text-xs text-white/40 font-light leading-relaxed max-w-sm tracking-widest uppercase">
                An exploration into high-fidelity real-time shaders and procedural geometry. This module focuses on the marriage of synthetic light and organic motion.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {["WebGL 2.0", "Framer Motion", "GLSL Shaders", "Lidar Data"].map(tech => (
                  <div key={tech} className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-primary transition-colors cursor-default">
                    <div className="w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_hsl(var(--primary))]" /> {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-12 py-24 border-t border-white/5 bg-black">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-[9px] font-bold uppercase tracking-[0.6em] text-white/20">
            © 2025 <span className="text-primary/40">BALAJI</span> STUDIO
          </div>
          <div className="flex gap-16">
            {["GitHub", "LinkedIn", "Instagram"].map(s => (
              <a key={s} href="#" className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/30 hover:text-primary transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
