
import NarrativeScroll from "@/components/NarrativeScroll";
import { ArrowDownRight } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-8 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.5em] animate-pulse">Available for Projects</span>
            <h1 className="text-[12vw] md:text-[8vw] font-headline font-bold leading-[0.8] tracking-tighter uppercase text-white">
              CRAFTING <br />
              <span className="text-primary">FLUID</span> DIGITAL <br />
              EXPERIENCES.
            </h1>
            <div className="flex justify-end mt-12">
              <div className="max-w-md text-right">
                <p className="text-xl md:text-2xl text-white/40 font-medium">
                  Senior Frontend Architect specializing in high-performance web applications and cinematic UI design.
                </p>
                <div className="flex items-center justify-end gap-2 text-primary mt-4 font-bold cursor-pointer group">
                  EXPLORE WORKS 
                  <ArrowDownRight className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Reveal Section */}
      <section className="px-8 py-40 bg-black">
        <div className="max-w-6xl mx-auto">
          <NarrativeScroll 
            className="text-4xl md:text-7xl font-headline font-bold uppercase tracking-tight"
            text="WE BELIEVE THAT DESIGN IS NOT JUST HOW IT LOOKS BUT HOW IT FEELS. EVERY PIXEL EVERY MOTION EVERY INTERACTION IS AN OPPORTUNITY TO CREATE SOMETHING REMARKABLE. WE STRIVE FOR PERFECTION IN SIMPLICITY AND POWER IN PERFORMANCE. WELCOME TO THE FUTURE OF DIGITAL STORYTELLING."
          />
        </div>
      </section>

      {/* Visual Break */}
      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto h-[60vh] relative rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
          <img 
            src="https://picsum.photos/seed/portfolio-hero/1200/800" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            data-ai-hint="futuristic architecture"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
             <div className="text-center">
                <p className="text-primary text-sm font-bold tracking-[1em] uppercase mb-4">The Vision</p>
                <h2 className="text-4xl md:text-6xl font-headline font-bold text-white uppercase italic">Butter-Smooth Motion</h2>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
