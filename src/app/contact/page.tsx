
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Loader2 } from "lucide-react";
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase text-white mb-10 tracking-tighter">
            Let's <br /><span className="text-primary">Connect.</span>
          </h1>
          
          <div className="space-y-12 mt-20">
            <ContactInfo 
              icon={<Mail className="w-5 h-5 text-primary" />} 
              label="Email" 
              value="hello@fluxion.studio" 
            />
            <ContactInfo 
              icon={<Phone className="w-5 h-5 text-primary" />} 
              label="Phone" 
              value="+1 (555) 000-1122" 
            />
            <ContactInfo 
              icon={<MapPin className="w-5 h-5 text-primary" />} 
              label="Studio" 
              value="New York, NY 10013" 
            />
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-black/50 border border-white/5 p-10 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Name</label>
                <input 
                  onMouseEnter={playHoverSound}
                  required 
                  className="w-full bg-white/5 border-b border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-all rounded-lg" 
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email</label>
                <input 
                  onMouseEnter={playHoverSound}
                  type="email" 
                  required 
                  className="w-full bg-white/5 border-b border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-all rounded-lg" 
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Subject</label>
              <select 
                onMouseEnter={playHoverSound}
                className="w-full bg-white/5 border-b border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-all rounded-lg"
              >
                <option className="bg-background">Project Inquiry</option>
                <option className="bg-background">General Chat</option>
                <option className="bg-background">Technical Support</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Message</label>
              <textarea 
                onMouseEnter={playHoverSound}
                required 
                rows={5} 
                className="w-full bg-white/5 border-b border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-all rounded-lg resize-none" 
                placeholder="Tell us about your vision..."
              />
            </div>

            <button 
              disabled={isSubmitting}
              className="group w-full bg-primary hover:bg-primary/90 text-black py-5 rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Transmit Message 
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-6 group cursor-pointer">
      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">{label}</p>
        <p className="text-xl text-white font-medium group-hover:text-primary transition-colors">{value}</p>
      </div>
    </div>
  );
}
