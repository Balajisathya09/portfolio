
"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="aspect-square relative rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10"
           >
              <img 
                src="https://picsum.photos/seed/profile-fluxion/800/800" 
                alt="Profile" 
                className="w-full h-full object-cover"
                data-ai-hint="minimalist person portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <h3 className="text-3xl font-headline font-bold text-white uppercase tracking-tighter">The Founder</h3>
                <p className="text-primary font-bold uppercase text-xs tracking-widest">Lead Designer & Developer</p>
              </div>
           </motion.div>

           <div>
              <span className="text-primary font-bold text-xs uppercase tracking-[0.5em] mb-4 block">The Narrative</span>
              <h1 className="text-6xl md:text-7xl font-headline font-bold uppercase text-white mb-8 tracking-tighter leading-none">
                OBSESSED <br />WITH THE <br /><span className="text-primary">FINEST</span> DETAILS.
              </h1>
              <div className="space-y-6 text-xl text-white/60 leading-relaxed font-light">
                <p>
                  Fluxion is a design-driven technical studio focused on creating digital experiences that resonate. With over 8 years of experience in high-performance frontend engineering and luxury UI/UX design.
                </p>
                <p>
                  Our philosophy is simple: performance is a feature, and beauty is a requirement. We leverage cutting-edge technologies like GenAI, React Server Components, and advanced motion engineering to push the boundaries of what's possible on the web.
                </p>
              </div>
           </div>
        </section>

        <section className="mb-40">
           <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-20">
              <h2 className="text-4xl font-headline font-bold text-white uppercase italic tracking-tighter">Technical Arsenal</h2>
              <div className="max-w-xl text-right md:text-left">
                <p className="text-white/40 uppercase text-xs font-bold tracking-widest">Bridging the gap between engineering and art</p>
              </div>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
              {TECHNICAL_SKILLS.map((skill) => (
                <div key={skill} className="bg-white/5 border border-white/5 p-10 flex items-center justify-center hover:bg-primary/10 transition-colors group cursor-default">
                  <span className="text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-primary transition-colors">{skill}</span>
                </div>
              ))}
           </div>
        </section>

        <section className="text-center py-40 border-t border-white/5">
           <h2 className="text-primary font-bold text-xs uppercase tracking-[1em] mb-10">Clients & Partners</h2>
           <div className="flex flex-wrap justify-center gap-20 opacity-20 grayscale">
              {["APPLE", "COCA COLA", "TESLA", "NIKE", "STRIPE"].map((brand) => (
                <span key={brand} className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tighter">{brand}</span>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
}

const TECHNICAL_SKILLS = [
  "Next.js 15",
  "TypeScript",
  "GenAI Flows",
  "Framer Motion",
  "Three.js",
  "Tailwind CSS",
  "UX Research",
  "Cloud Architecture"
];
