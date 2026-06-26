import BentoGrid from "@/components/BentoGrid";

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

      </div>
    </div>
  );
}