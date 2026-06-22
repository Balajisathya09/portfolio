
import NarrativeScroll from "@/components/NarrativeScroll";
import { ArrowDownRight, Globe, Zap, Cpu, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-8 mb-20 md:mb-40 relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-primary/50" />
              <span className="text-primary font-bold text-xs uppercase tracking-[0.5em] animate-pulse">Design x Engineering Studio</span>
            </div>
            
            <h1 className="text-[14vw] md:text-[10vw] font-headline font-bold leading-[0.75] tracking-tighter uppercase text-white mix-blend-difference">
              WE BUILD <br />
              <span className="text-transparent stroke-text">FUTURE</span> <br />
              SYSTEMS.
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-20 items-end">
              <div className="md:col-span-5 space-y-6">
                <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed">
                  Transforming complex technical requirements into <span className="text-white">sublime digital experiences</span> that move with purpose.
                </p>
                <div className="flex gap-10 pt-4">
                  <div>
                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Experience</p>
                    <p className="text-xl font-headline text-white italic">08+ Years</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-xl font-headline text-white italic">Remote / NYC</p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-7 flex justify-end">
                <Link href="/projects" className="group relative">
                  <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary transition-all duration-700 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-black z-10 transition-colors">View Projects</span>
                    <ArrowDownRight className="absolute bottom-10 right-10 w-6 h-6 text-primary group-hover:text-black transition-colors" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 -z-10 opacity-5 pointer-events-none">
            <span className="text-[40vw] font-headline font-bold leading-none">FLUX</span>
          </div>
        </div>
      </section>

      {/* Technical Marquee */}
      <div className="w-full border-y border-white/5 py-8 mb-40 overflow-hidden bg-white/[0.02] backdrop-blur-sm">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="text-2xl font-headline font-bold uppercase text-white/20 italic">High Performance</span>
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-2xl font-headline font-bold uppercase text-white/20 italic">GenAI Integrated</span>
              <Cpu className="w-5 h-5 text-primary" />
              <span className="text-2xl font-headline font-bold uppercase text-white/20 italic">Cinematic Motion</span>
              <Globe className="w-5 h-5 text-primary" />
            </div>
          ))}
        </div>
      </div>

      {/* Narrative Reveal Section */}
      <section className="px-8 py-40 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="max-w-6xl mx-auto">
          <NarrativeScroll 
            className="text-4xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-none"
            text="WE ARE NOT JUST DEVELOPERS. WE ARE ARCHITECTS OF THE VIRTUAL VOID. EVERY INTERACTION IS A CONVERSATION. EVERY ANIMATION IS A STORY. WE STRIVE FOR THE IMPOSSIBLE BEAUTY OF CODE."
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </section>

      {/* Unique Capability Bento */}
      <section className="px-8 py-40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase text-white tracking-tighter">
              BEYOND THE <br /><span className="text-primary italic">STANDARD</span> STACK.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <CapabilityCard 
              icon={<Zap className="w-8 h-8" />}
              title="Next-Gen UI"
              desc="Leveraging Framer Motion and Three.js for immersive web experiences."
            />
            <CapabilityCard 
              icon={<Cpu className="w-8 h-8" />}
              title="AI Infused"
              desc="Deep integration of LLMs and GenAI flows for intelligent interfaces."
            />
            <CapabilityCard 
              icon={<BarChart3 className="w-8 h-8" />}
              title="Scalable Architecture"
              desc="Enterprise-grade Next.js systems built for extreme reliability."
            />
          </div>
        </div>
      </section>

      {/* Featured Visual Break */}
      <section className="px-8 pb-40">
        <div className="max-w-7xl mx-auto group cursor-none relative">
          <div className="h-[70vh] relative rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10">
            <img 
              src="https://picsum.photos/seed/visionary-tech/1400/900" 
              alt="Visionary Tech" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              data-ai-hint="dark futuristic tech"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-700" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
               <span className="text-primary text-xs font-bold tracking-[1em] uppercase mb-8">The Philosophy</span>
               <h2 className="text-5xl md:text-9xl font-headline font-bold text-white uppercase italic text-center leading-none tracking-tighter">
                ELEGANCE <br /> THROUGH <br /> PRECISION.
               </h2>
            </div>
          </div>
          <div className="mt-8 flex justify-between items-center px-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 italic">© 2025 Fluxion Studio</span>
            <div className="flex gap-4">
               {["Insta", "X", "Github"].map(s => (
                 <span key={s} className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-primary cursor-pointer transition-colors">{s}</span>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CapabilityCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white/[0.03] border border-white/5 p-12 hover:bg-white/[0.08] transition-all duration-500 group">
      <div className="text-primary mb-8 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="text-2xl font-headline font-bold text-white uppercase mb-4 tracking-tighter">{title}</h3>
      <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
