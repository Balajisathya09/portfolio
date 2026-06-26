import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronRight } from "lucide-react";

// Assuming asset folder is at the root level alongside src
import gymImg from "../../../../asset/gym.jpg";
import movieImg from "../../../../asset/movie.png";
import hotelImg from "../../../../asset/hotel.jpg";

const PROJECT_DATA: Record<string, any> = {
  "gym-website": {
    title: "GYM WEBSITE",
    challenge: "Creating an engaging, responsive landing page for a fitness center that visually motivates users while being fast and accessible across all devices.",
    solution: "Designed and developed a fully responsive web experience using pure HTML, CSS, and JavaScript. Focused on semantic tags for better structure, clean CSS for styling, layout, and animations, and JavaScript for interactive elements.",
    features: [
      "Fully Responsive Layout",
      "Semantic HTML Structure",
      "Custom CSS Styling & Layouts",
      "Interactive JavaScript Elements",
      "Optimized for Fast Loading"
    ],
    role: "Front-end Developer",
    timeline: "2 Weeks",
    tech: ["HTML", "CSS", "JavaScript"],
    image: gymImg
  },
  "bookmyshow-clone": {
    title: "BOOKMYSHOW CLONE",
    challenge: "Designing a complex movie and event ticketing application interface that is intuitive, user-friendly, and capable of handling complex user flows without confusing the user.",
    solution: "Created a high-fidelity prototype entirely in Figma. Focused intensely on layout precision, typography, user journey mapping, and micro-interactions to mimic a premium real-world ticketing app.",
    features: [
      "High-Fidelity Wireframes",
      "Interactive Prototyping",
      "User-Centered Design Flow",
      "Component-Based UI Design",
      "Modern Typography & Spacing"
    ],
    role: "UI/UX Designer",
    timeline: "3 Weeks",
    tech: ["Figma", "User Research", "Prototyping"],
    image: movieImg
  },
  "flask-hotel": {
    title: "FLASK HOTEL SYSTEM",
    challenge: "Building a functional server-side application for a hotel to handle room bookings, dynamic content, and an integrated user interface.",
    solution: "Developed a backend application using Python and the Flask framework. Created the front-end interface from scratch with HTML and CSS, integrating it directly with the Flask backend to create a seamless full-stack booking experience.",
    features: [
      "Backend Routing with Flask",
      "Dynamic HTML Rendering",
      "Custom CSS Frontend Styling",
      "Python Logic Integration",
      "Seamless Full-Stack Architecture"
    ],
    role: "Full-Stack Developer",
    timeline: "4 Weeks",
    tech: ["Python", "Flask", "HTML", "CSS"],
    image: hotelImg
  }
};

const DEFAULT_DATA = {
  title: "PROJECT OVERVIEW",
  challenge: "This project required addressing complex user experience flows while maintaining high performance. The primary challenge was to engineer a scalable architecture.",
  solution: "We adopted a modern tech stack focused on component-driven architecture. By utilizing server-side rendering and aggressive caching strategies, we ensured the platform remains lightning fast.",
  features: [
    "Responsive & Mobile-First Design",
    "Optimized Performance & SEO",
    "Dynamic Data Integration",
    "Premium Aesthetics"
  ],
  role: "Lead Engineer",
  timeline: "4 Weeks",
  tech: ["Next.js", "React", "Tailwind"],
  image: null
};

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  const data = PROJECT_DATA[slug] || {
    ...DEFAULT_DATA,
    title: slug.split('-').map(word => word.toUpperCase()).join(' ')
  };

  return (
    <div className="pt-32 pb-32 px-6 md:px-12 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-8xl font-headline font-bold uppercase text-white mb-16 tracking-tighter leading-none text-center">
          {data.title} <br /> <span className="text-primary stroke-text">CASE STUDY.</span>
        </h1>
        
        {/* Main Hero Image */}
        <div className="w-full aspect-[21/9] bg-white/5 rounded-[2rem] border border-white/10 mb-20 relative overflow-hidden flex items-center justify-center">
           {data.image ? (
             <Image 
               src={data.image} 
               alt={`${data.title} Visuals`} 
               fill 
               className="object-cover opacity-80"
             />
           ) : (
             <>
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-30" />
               <span className="text-white/20 font-black uppercase tracking-[1em] text-sm z-10 text-center px-4">Project Visuals</span>
             </>
           )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Main Content Area */}
          <div className="md:col-span-2 space-y-16">
            <section>
              <h2 className="text-2xl font-headline font-bold text-white uppercase tracking-tighter mb-6 flex items-center gap-3">
                <ChevronRight className="w-6 h-6 text-primary" /> The Challenge
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed font-light">
                {data.challenge}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-white uppercase tracking-tighter mb-6 flex items-center gap-3">
                <ChevronRight className="w-6 h-6 text-primary" /> The Solution
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed font-light">
                {data.solution}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-bold text-white uppercase tracking-tighter mb-8 flex items-center gap-3">
                <ChevronRight className="w-6 h-6 text-primary" /> Key Features
              </h2>
              <ul className="space-y-4">
                {data.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-4 text-sm text-white/80 font-light">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar / Metadata */}
          <div className="space-y-12 bg-white/5 p-8 rounded-3xl border border-white/10 h-fit backdrop-blur-md">
            <div>
              <span className="text-primary font-bold text-[9px] uppercase tracking-[0.4em] block mb-2">Role</span>
              <p className="text-sm text-white font-medium uppercase tracking-widest">{data.role}</p>
            </div>
            <div>
              <span className="text-primary font-bold text-[9px] uppercase tracking-[0.4em] block mb-2">Timeline</span>
              <p className="text-sm text-white font-medium uppercase tracking-widest">{data.timeline}</p>
            </div>
            <div>
              <span className="text-primary font-bold text-[9px] uppercase tracking-[0.4em] block mb-4">Core Tech</span>
              <div className="flex flex-wrap gap-2">
                {data.tech.map((tech: string) => (
                  <span key={tech} className="px-3 py-1.5 bg-black/50 border border-white/10 rounded-lg text-[9px] font-black text-white/60 uppercase tracking-widest">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/10">
              <Link href="/projects" className="block w-full text-center px-6 py-4 bg-primary text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-xl hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                Explore More Work
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
