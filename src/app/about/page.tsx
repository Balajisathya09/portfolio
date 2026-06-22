
"use client";

import { motion } from "framer-motion";
import { BookOpen, Briefcase, Code, GraduationCap, Languages, Target } from "lucide-react";
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
  {
    year: "2019 - 2021",
    degree: "Higher Secondary Education",
    school: "KRM Matric, Hr. Sec. School",
    description: "Completed SSLC and Higher Secondary Certificate education.",
    score: "SSLC: 70% | HSC: 75%",
  },
];

const EXPERIENCE = [
  {
    role: "UI/UX Intern",
    company: "Ovi Design Academy",
    year: "2023",
    tasks: [
      "Crafted user journeys, prototypes, and stakeholder presentations for experience-led projects",
      "Communication skills that align stakeholders and teams",
      "Leadership cultivated through academic and internship roles",
      "Typing proficiency ensuring quick, accurate documentation",
      "Created user-centered design solutions and prototypes",
    ],
    tags: ["Figma", "Prototyping", "Layout Design", "Wireframing", "User Research"],
  },
];

export default function AboutPage() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <div className="pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* About Me Section */}
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
              I’m a passionate UI/UX Designer and Web Developer with a keen eye for detail and a love for creating beautiful, functional digital experiences. I’ve worked on both UI/UX and web development projects, focusing on user-centered design, clean interfaces, and responsive solutions that bring ideas to life.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-square relative rounded-3xl overflow-hidden border border-white/10 group bg-card"
          >
            {profileImage && (
              <Image 
                src={profileImage.imageUrl} 
                alt="Balaji Profile" 
                fill
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                data-ai-hint={profileImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          </motion.div>
        </section>

        {/* Abilities Section */}
        <section className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 border-b border-white/5 pb-10">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <span className="text-primary font-bold text-[10px] uppercase tracking-[0.6em] mb-4 block">My Abilities</span>
              <h2 className="text-4xl font-headline font-bold text-white uppercase tracking-tighter">My Skills</h2>
            </motion.div>
            <p className="text-white/40 uppercase text-xs font-bold tracking-widest max-w-xs text-right">
              I've worked with a variety of technologies in the web development world. Here are the technologies I'm most proficient in.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, idx) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-center justify-center text-center group hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/60 group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Journey & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40">
          {/* Education */}
          <section>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <GraduationCap className="w-6 h-6 text-primary" />
              <div>
                <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] block">My Journey</span>
                <h2 className="text-3xl font-headline font-bold text-white uppercase tracking-tighter">Education</h2>
              </div>
            </motion.div>
            <p className="text-xs text-white/30 uppercase tracking-widest mb-12">My academic background and educational qualifications.</p>
            <div className="space-y-12">
              {EDUCATION.map((edu, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-10 border-l border-white/5"
                >
                  <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 block">{edu.year}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-sm text-white/40 mb-4 font-medium uppercase tracking-wider">{edu.school}</p>
                  <p className="text-xs text-white/30 leading-relaxed mb-4">{edu.description}</p>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-primary/60 font-bold border border-white/10 uppercase tracking-widest">Score: {edu.score}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Internship */}
          <section>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <Briefcase className="w-6 h-6 text-primary" />
              <div>
                <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] block">Professional Growth</span>
                <h2 className="text-3xl font-headline font-bold text-white uppercase tracking-tighter">Internship Experience</h2>
              </div>
            </motion.div>
            <p className="text-xs text-white/30 uppercase tracking-widest mb-12">My hands-on experience and learning during internships.</p>
            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-10 rounded-3xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-4 block">Internship | {exp.year}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <p className="text-sm text-white/40 font-bold uppercase tracking-widest mb-8">{exp.company}</p>
                
                <ul className="space-y-4 mb-8">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="flex gap-4 text-xs text-white/60 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-1 shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-black text-[9px] font-black text-white/40 border border-white/5 rounded-full uppercase tracking-widest hover:text-primary hover:border-primary/30 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </section>
        </div>

        {/* Strengths & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-12 rounded-3xl"
          >
            <div className="flex items-center gap-4 mb-10">
              <Target className="w-6 h-6 text-primary" />
              <div>
                <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] block">Core Strengths</span>
                <h2 className="text-2xl font-headline font-bold text-white uppercase tracking-tighter">Key Responsibilities</h2>
              </div>
            </div>
            <div className="space-y-8">
              <StrengthItem 
                title="Communication Skills" 
                desc="Communication skills that align stakeholders and teams, ensuring clear understanding and collaboration across all project phases."
              />
              <StrengthItem 
                title="Leadership" 
                desc="Leadership cultivated through academic and internship roles, demonstrating ability to guide teams and drive project success."
              />
              <StrengthItem 
                title="Quick learner" 
                desc="Quick learner with ability to adapt to new technologies and frameworks efficiently for project development and team collaboration."
              />
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-12 rounded-3xl"
          >
            <div className="flex items-center gap-4 mb-10">
              <Languages className="w-6 h-6 text-primary" />
              <div>
                <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] block">Languages Known</span>
                <h2 className="text-2xl font-headline font-bold text-white uppercase tracking-tighter">Fluency</h2>
              </div>
            </div>
            <p className="text-xs text-white/30 uppercase tracking-widest mb-10">Languages I speak and write fluently.</p>
            <div className="space-y-6">
              {["English", "Tamil"].map(lang => (
                <div key={lang} className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-white/60 font-bold uppercase tracking-widest text-sm">{lang}</span>
                  <span className="text-[10px] text-primary font-black uppercase tracking-widest px-4 py-1 bg-primary/10 rounded-full">Fluent</span>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

function StrengthItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="space-y-2">
      <h3 className="text-primary font-black uppercase text-xs tracking-widest">{title}</h3>
      <p className="text-xs text-white/40 leading-relaxed uppercase tracking-wider">{desc}</p>
    </div>
  );
}
