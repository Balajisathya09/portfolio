
import BentoGrid from "@/components/BentoGrid";
import ProjectLoreTool from "@/components/ProjectLoreTool";

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase text-white mb-4">Projects</h1>
            <p className="text-xl text-white/40 max-w-xl">
              A curated selection of works spanning across product design, creative engineering, and interaction experiments.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold border border-white/10 uppercase tracking-widest text-primary">All Works</div>
             <div className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold border border-white/10 uppercase tracking-widest text-white/40">Open Source</div>
          </div>
        </div>

        <BentoGrid />

        <div className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6 uppercase tracking-tighter">
              Automate the Lore <br />of your code.
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              We developed a proprietary AI tool that crafts cinematic technical narratives for your projects. Simply provide your code context, and let our model manifest the vision.
            </p>
            <ul className="space-y-4">
              {["Technical Storytelling", "Automated Documentation", "Portfolio Enhancement"].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-primary font-bold uppercase text-xs tracking-widest">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(255,215,0,1)]" />
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
