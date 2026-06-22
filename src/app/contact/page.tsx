
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Loader2, Calendar, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import * as Tone from "tone";

const contactSchema = z.object({
  name: z.string()
    .min(1, "Name is required")
    .regex(/^[a-zA-Z\s]+$/, "Name must contain only alphabets"),
  email: z.string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  phone: z.string()
    .min(1, "Phone number is required")
    .regex(/^[0-9]+$/, "Phone must contain only numbers"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

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

  const onSubmit = (data: ContactFormData) => {
    playClickSound();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    }, 2000);
  };

  return (
    <div className="pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold text-xs uppercase tracking-[0.5em] mb-4 block">Get In Touch</span>
            <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase text-white mb-10 tracking-tighter leading-none">
              Let's <br /><span className="text-primary">Discuss</span> <br />Your vision.
            </h1>
            <p className="text-white/40 uppercase text-[10px] font-bold tracking-[0.3em] mb-16 max-w-md leading-loose">
              I'm currently accepting new projects and collaborations. Whether you need a complete web application, UI/UX design, or consultation services, I'm here to help bring your vision to life.
            </p>
            
            <div className="space-y-10">
              <ContactInfo 
                icon={<Mail className="w-5 h-5 text-primary" />} 
                label="Email" 
                value="balajisathyanarayanan09062004@gmail.com" 
                action="Send Message"
              />
              <ContactInfo 
                icon={<Phone className="w-5 h-5 text-primary" />} 
                label="Phone" 
                value="+91 8754544636" 
                action="Call Now"
              />
              <ContactInfo 
                icon={<MapPin className="w-5 h-5 text-primary" />} 
                label="Location" 
                value="Perambur, Chennai" 
              />
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card border border-white/5 p-12 rounded-[2.5rem] backdrop-blur-xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-60 h-60 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Name</label>
                    <input 
                      {...register("name")}
                      onMouseEnter={playHoverSound}
                      className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} p-5 text-white focus:outline-none focus:border-primary transition-all rounded-2xl placeholder:text-white/10 text-xs tracking-widest uppercase`} 
                      placeholder="Your Name"
                    />
                    {errors.name && <p className="text-[8px] text-red-400 font-bold uppercase tracking-widest">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Email</label>
                    <input 
                      {...register("email")}
                      onMouseEnter={playHoverSound}
                      type="email" 
                      className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} p-5 text-white focus:outline-none focus:border-primary transition-all rounded-2xl placeholder:text-white/10 text-xs tracking-widest uppercase`} 
                      placeholder="email@example.com"
                    />
                    {errors.email && <p className="text-[8px] text-red-400 font-bold uppercase tracking-widest">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Phone Number</label>
                  <input 
                    {...register("phone")}
                    onMouseEnter={playHoverSound}
                    className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500/50' : 'border-white/10'} p-5 text-white focus:outline-none focus:border-primary transition-all rounded-2xl placeholder:text-white/10 text-xs tracking-widest uppercase`} 
                    placeholder="+91 8754544636"
                  />
                  {errors.phone && <p className="text-[8px] text-red-400 font-bold uppercase tracking-widest">{errors.phone.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Subject</label>
                  <input 
                    {...register("subject")}
                    onMouseEnter={playHoverSound}
                    className={`w-full bg-white/5 border ${errors.subject ? 'border-red-500/50' : 'border-white/10'} p-5 text-white focus:outline-none focus:border-primary transition-all rounded-2xl placeholder:text-white/10 text-xs tracking-widest uppercase`} 
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && <p className="text-[8px] text-red-400 font-bold uppercase tracking-widest">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Message</label>
                  <textarea 
                    {...register("message")}
                    onMouseEnter={playHoverSound}
                    rows={4} 
                    className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} p-5 text-white focus:outline-none focus:border-primary transition-all rounded-2xl resize-none placeholder:text-white/10 text-xs tracking-widest uppercase`} 
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="text-[8px] text-red-400 font-bold uppercase tracking-widest">{errors.message.message}</p>}
                </div>

                <button 
                  disabled={isSubmitting}
                  className="group w-full bg-primary hover:bg-primary/90 text-black py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/10"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : success ? (
                    <>
                      Message Sent!
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Send Message 
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-10 border border-primary/10 bg-primary/5 rounded-[2rem] flex flex-col gap-6"
            >
              <div className="flex items-center gap-4 text-primary">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] block">Current Availability</span>
                  <p className="text-lg text-white font-bold">Available for Work and freelance projects</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[10px] text-green-400 font-bold uppercase tracking-widest pl-12">
                <CheckCircle2 className="w-4 h-4" /> Accepting New Collaborations
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, label, value, action }: { icon: React.ReactNode, label: string, value: string, action?: string }) {
  return (
    <div className="flex items-center gap-8 group cursor-pointer">
      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/40 transition-all duration-500 shadow-lg">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">{label}</p>
        <p className="text-lg text-white font-bold group-hover:text-primary transition-colors">{value}</p>
        {action && (
          <span className="text-[9px] font-black uppercase tracking-widest text-primary/40 mt-1 block group-hover:text-primary transition-colors">
            {action}
          </span>
        )}
      </div>
    </div>
  );
}
