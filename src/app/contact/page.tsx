
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Loader2, Calendar, CheckCircle2 } from "lucide-react";
import * as Tone from "tone";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const playHoverSound = () => {
    const synth = new Tone.Synth({
      oscillator: { type: "sine" },
      envelope: { attack: 0.001, decay: 0.1, sustain: 0.1, release: 1 }
    }).toDestination();
    synth.triggerAttackRelease("C5", "8n", undefined, 0.1);
  };

  const playClickSound = () => {
    const synth = new Tone.Synth({
      oscillator: { type: "square" },
      envelope: { attack: 0.001, decay: 0.05, sustain: 0, release: 0.1 }
    }).toDestination();
    synth.triggerAttackRelease("G4", "16n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div className="pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-primary font-bold text-xs uppercase tracking-[0.5em] mb-4 block">Get In Touch</span>
            <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase text-white mb-10 tracking-tighter leading-none">
              Let's <br /><span className="text-primary">Discuss</span> <br />Your vision.
            </h1>
            <p className="text-white/40 uppercase text-xs font-bold tracking-widest mb-16 max-w-md leading-loose">
              Let's discuss how I can help bring your ideas to life. Whether you need a complete web application, UI/UX design, or consultation services.
            </p>
            
            <div className="space-y-10">
              <ContactInfo 
                icon={<Mail className="w-5 h-5 text-primary" />} 
                label="Email" 
                value="balajisathyanarayanan09062004@gmail.com" 
              />
              <ContactInfo 
                icon={<Phone className="w-5 h-5 text-primary" />} 
                label="Phone" 
                value="+91 8754544636" 
              />
              <ContactInfo 
                icon={<MapPin className="w-5 h-5 text-primary" />} 
                label="Location" 
                value="Perambur, Chennai" 
              />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-20 p-8 border border-primary/10 bg-primary/5 rounded-3xl inline-flex flex-col gap-4"
            >
              <div className="flex items-center gap-3 text-primary">
                <Calendar className="w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Current Availability</span>
              </div>
              <p className="text-sm text-white/60 font-medium">Available for Work and freelance projects</p>
              <div className="flex items-center gap-2 text-[10px] text-green-400 font-bold uppercase tracking-widest">
                <CheckCircle2 className="w-3 h-3" /> Accepting New Collaborations
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-white/5 p-12 rounded-[2.5rem] backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Name</label>
                  <input 
                    onMouseEnter={playHoverSound}
                    required 
                    className="w-full bg-white/5 border border-white/10 p-5 text-white focus:outline-none focus:border-primary transition-all rounded-2xl placeholder:text-white/10" 
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Email</label>
                  <input 
                    onMouseEnter={playHoverSound}
                    type="email" 
                    required 
                    className="w-full bg-white/5 border border-white/10 p-5 text-white focus:outline-none focus:border-primary transition-all rounded-2xl placeholder:text-white/10" 
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Subject</label>
                <input 
                  onMouseEnter={playHoverSound}
                  required 
                  className="w-full bg-white/5 border border-white/10 p-5 text-white focus:outline-none focus:border-primary transition-all rounded-2xl placeholder:text-white/10" 
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Message</label>
                <textarea 
                  onMouseEnter={playHoverSound}
                  required 
                  rows={4} 
                  className="w-full bg-white/5 border border-white/10 p-5 text-white focus:outline-none focus:border-primary transition-all rounded-2xl resize-none placeholder:text-white/10" 
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                disabled={isSubmitting}
                className="group w-full bg-primary hover:bg-primary/90 text-black py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/10"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Send Message 
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-8 group cursor-pointer">
      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/40 transition-all duration-500 shadow-lg">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">{label}</p>
        <p className="text-lg text-white font-bold group-hover:text-primary transition-colors">{value}</p>
      </div>
    </div>
  );
}
