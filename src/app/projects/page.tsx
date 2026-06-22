import BentoGrid from "@/components/BentoGrid";
import ProjectLoreTool from "@/components/ProjectLoreTool";

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div>
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.6em] mb-4 block">Archive</span>
            <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase text-white mb-4 tracking-tighter">WORKS.</h1>
            <p className="text-xs text-white/40 max-w-xl uppercase tracking-widest leading-loose">
              A curated selection of experiments spanning across product design, creative engineering, and interaction studies.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="px-6 py-3 bg-white/5 rounded-full text-[10px] font-black border border-white/10 uppercase tracking-[0.2em] text-primary">All Works</div>
             <div className="px-6 py-3 bg-white/5 rounded-full text-[10px] font-black border border-white/10 uppercase tracking-[0.2em] text-white/40">Experimental</div>
          </div>
        </div>

        <BentoGrid />

        <div className="mt-60 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-8 uppercase tracking-tighter leading-none">
              MANIFESTING <br /><span className="text-primary">THE LORE.</span>
            </h2>
            <p className="text-xs text-white/40 mb-12 uppercase tracking-widest leading-loose max-w-md">
              Proprietary AI engines crafted to manifest cinematic technical narratives from raw code. Our models don't just document; they weave technical legends.
            </p>
            <ul className="space-y-6">
              {["Technical Storytelling", "Automated Documentation", "Portfolio Enhancement"].map((feature) => (
                <li key={feature} className="flex items-center gap-4 text-primary font-black uppercase text-[10px] tracking-[0.3em]">
                  <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_rgba(255,215,0,0.8)]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <ProjectLoreTool />
        </div>
      </div>
    </div>
  );
}