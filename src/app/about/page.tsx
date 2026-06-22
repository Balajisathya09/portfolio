
"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Target, Languages } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const SKILLS = [
  { name: "UI/UX Design" },
  { name: "HTML" },
  { name: "CSS3" },
  { name: "JavaScript" },
  { name: "AWS Cloud (basics)" },
  { name: "MS Excel" },
  { name: "Java (basics)" },
  { name: "Python (basics)" },
];

const EDUCATION = [
  {
    year: "2024 - 2026",
    degree: "Master of Computer Applications (MCA)",
    school: "S.A Engineering College",
    description: "Currently pursuing Master of Computer Applications degree.",
    score: "70%",
  },
  {
    year: "2021 - 2024",
    degree: "B.Com (Computer Application)",
    school: "D.B.Jain College",
    description: "Bachelor of Commerce with Computer Application specialization.",
    score: "73%",
  },
];

const EXPERIENCE = [
  {
    role: "UI/UX Intern",
    company: "Ovi Design Academy",
    year: "2023",
    tasks: [
      "Crafted user journeys and prototypes for experience-led projects",
      "Collaborated with stakeholders to align design visions",
      "Focused on user-centered design solutions and high-fidelity wireframes",
    ],
    tags: ["Figma", "Prototyping", "Layout Design", "Wireframing"],
  },
];

export default function AboutPage() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <div className="pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Profile Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-primary font-bold text-xs uppercase tracking-[0.5em] block">About Me</span>
            <h1 className="text-6xl md:text-7xl font-headline font-bold uppercase text-white tracking-tighter leading-none">
              About <br /> <span className="text-primary">Me.</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed font-light max-w-xl">
              I’m a passionate UI/UX Designer and Web Developer focused on creating beautiful, functional digital experiences that bridge the gap between user needs and technical excellence.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-square relative rounded-3xl overflow-hidden border border-white/10 bg-card"
          >
            {profileImage && (
              <Image 
                src={profileImage.imageUrl} 
                alt="Balaji Profile" 
                fill
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                data-ai-hint={profileImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          </motion.div>
        </section>

        {/* Skills Grid */}
        <section className="mb-40">
          <div className="border-b border-white/5 pb-10 mb-20">
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.6em] mb-4 block">Abilities</span>
            <h2 className="text-4xl font-headline font-bold text-white uppercase tracking-tighter">My Skills</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SKILLS.map((skill, idx) => (
              <div 
                key={skill.name}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center group hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 group-hover:text-primary">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40">
          <section>
            <div className="flex items-center gap-4 mb-12">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-headline font-bold text-white uppercase tracking-tighter">Education</h2>
            </div>
            <div className="space-y-12">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="relative pl-10 border-l border-white/5">
                  <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-primary" />
                  <span className="text-[10px] font-black text-primary uppercase mb-2 block">{edu.year}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-sm text-white/40 uppercase tracking-widest">{edu.school}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-12">
              <Briefcase className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-headline font-bold text-white uppercase tracking-tighter">Internship</h2>
            </div>
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-3xl">
                <span className="text-[10px] font-black text-primary uppercase mb-4 block">{exp.year}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <p className="text-sm text-white/40 uppercase tracking-widest mb-8">{exp.company}</p>
                <ul className="space-y-4">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="text-xs text-white/60 leading-relaxed">• {task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
