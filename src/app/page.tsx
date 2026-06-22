import NarrativeScroll from "@/components/NarrativeScroll";
import { ArrowRight, Download, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section - Full Screen Typography with Professional Technical Background */}
      <section className="min-h-screen flex flex-col justify-center px-12 relative overflow-hidden">
        {/* Professional Background System */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Base Atmospheric Glows */}
          <div className="absolute top-1/4 -left-1/4 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[150px] animate-pulse duration-[10s]" />
          <div className="absolute bottom-1/4 -right-1/4 w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[120px] animate-pulse duration-[8s]" />
          
          {/* Animated Perspective Grid */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
              maskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)',
              transform: 'perspective(1000px) rotateX(60deg) translateY(-20%)',
              transformOrigin: 'top'
            }}
          />

          {/* Floating Technical Markers (Macro Animation Feel) */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-[1px] h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-float"
                style={{
                  left: `${15 + (i * 15)}%`,
                  top: `${Math.random() * 60}%`,
                  animationDelay: `${i * 1.5}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>

          {/* Central Scanning Beam */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-1/2 w-full animate-in slide-in-from-top duration-[10s] repeat-infinite opacity-10" />
        </div>

        <div className="max-w-screen-2xl mx-auto w-full flex flex-col items-center justify-center text-center pt-32 z-10 relative">
          <div className="flex items-center gap-6 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="h-[1px] w-12 bg-primary/30" />
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-primary">Creative Engineering</span>
            <div className="h-[1px] w-12 bg-primary/30" />
          </div>
          
          <h1 className="text-[10vw] md:text-[9vw] font-headline font-bold leading-[0.82] tracking-tighter uppercase text-white mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            BALAJI <br />
            <span className="stroke-text italic block mt-2">MANIFESTING</span>
            <span className="text-primary">PURITY.</span>
          </h1>

          <div className="max-w-2xl space-y-16 flex flex-col items-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
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
          </div>

          {/* Technical Metadata Decoration */}
          <div className="absolute bottom-[-10vh] left-0 right-0 flex justify-between items-end px-4 hidden xl:flex">
            <div className="flex flex-col gap-2 opacity-20">
              <span className="text-[8px] font-black tracking-widest text-white uppercase">V.2025 // STABLE</span>
              <span className="text-[8px] font-black tracking-widest text-white uppercase">LAT: 40.7128° N, 74.0060° W</span>
            </div>
            <div className="flex flex-col gap-2 opacity-20 items-end">
              <span className="text-[8px] font-black tracking-widest text-white uppercase">INTERACTION PHASE: 01</span>
              <div className="w-24 h-[1px] bg-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section - Word Reveal - Sticky Scroller */}
      <section className="bg-black">
        <NarrativeScroll 
          className="text-xl md:text-2xl font-headline font-light uppercase tracking-[0.2em] leading-[1.8] text-center text-white"
          text="WE ARE NOT JUST BUILDING INTERFACES. WE ARE CRAFTING NARRATIVES IN THE DIGITAL VOID. PRECISION IS OUR ONLY RELIGION. EVERY PIXEL IS A CHOICE."
        />
      </section>

      {/* Featured Experiment */}
      <section className="px-12 py-60 relative overflow-hidden">
        {/* Decorative Grid Line */}
        <div className="absolute top-0 left-1/2 w-[1px] h-32 bg-gradient-to-b from-primary/50 to-transparent" />
        
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-end mb-32 border-b border-white/5 pb-20">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.8em] text-primary mb-6 block">Selected Study</span>
              <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase tracking-tighter text-white">Vortex Engine</h2>
            </div>
            <Link href="/projects" className="text-[10px] font-black uppercase tracking-[0.4em] hover:text-primary text-white/30 transition-colors flex items-center gap-4 mb-4">
              View Archive <ArrowUpRight className="w-4 h-4 text-primary" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
            <div className="relative aspect-video rounded-sm overflow-hidden border border-white/5 bg-card grayscale hover:grayscale-0 transition-all duration-1000 group shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
              <img 
                src="https://picsum.photos/seed/vortex-gold/1200/800"
                alt="Vortex Engine"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                data-ai-hint="liquid metal abstraction"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-20">
                <span className="text-[11px] font-black uppercase tracking-[0.6em] text-primary">Core Phase: Interaction</span>
              </div>
            </div>
            <div className="space-y-16">
              <h3 className="text-2xl font-headline font-bold uppercase tracking-[0.3em] text-white/90">Macro Precision.</h3>
              <p className="text-xs text-white/30 font-light leading-loose max-w-sm tracking-[0.2em] uppercase">
                An exploration into high-fidelity real-time shaders and procedural geometry. This module focuses on the marriage of synthetic light and organic motion.
              </p>
              <div className="grid grid-cols-2 gap-12">
                {["WebGL 2.0", "Framer Motion", "GLSL Shaders", "Lidar Data"].map(tech => (
                  <div key={tech} className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-primary transition-colors cursor-default group">
                    <div className="w-1.5 h-1.5 bg-primary/20 rounded-full group-hover:bg-primary transition-colors shadow-[0_0_12px_transparent] group-hover:shadow-[0_0_12px_hsl(var(--primary))]" /> {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-12 py-32 border-t border-white/5 bg-black">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="text-[10px] font-black uppercase tracking-[0.8em] text-white/20">
            © 2025 <span className="text-primary/40">BALAJI</span> STUDIO
          </div>
          <div className="flex gap-20">
            {["GitHub", "LinkedIn", "Instagram"].map(s => (
              <a key={s} href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 hover:text-primary transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
