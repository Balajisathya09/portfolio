
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Loader2, Calendar, CheckCircle2, XCircle, Github, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string()
    .min(1, "Name is required")
    .regex(/^[a-zA-Z\s.]+$/, "Name must contain only alphabets, space and dot"),
  email: z.string()
    .min(1, "Email is required")
    .email("Invalid email address (must contain @)"),
  phone: z.string()
    .min(1, "Phone number is required")
    .regex(/^[0-9]{10}$/, "Phone must contain exactly 10 digits"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const playHoverSound = () => {};

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(false);
    try {
      await emailjs.send(
        "service_dwexfnq",
        "template_qhx6l2e",
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          to_email: "balajisathyanarayanan09062004@gmail.com",
        },
        "MfED-K0KhxnnFuxZr"
      );
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 6000);
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
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
                href="mailto:balajisathyanarayanan09062004@gmail.com"
              />
              <ContactInfo 
                icon={<Phone className="w-5 h-5 text-primary" />} 
                label="Phone" 
                value="+91 8754544636" 
                action="Call Now"
                href="tel:+918754544636"
              />
              <ContactInfo 
                icon={<MapPin className="w-5 h-5 text-primary" />} 
                label="Location" 
                value="Perambur, Chennai" 
              />
            </div>

            <div className="flex items-center gap-6 pt-8">
              <a 
                href="https://github.com/Balajisathya09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all duration-500 shadow-lg group"
              >
                <Github className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/balaji-sathyanarayanan-2b4a5728b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all duration-500 shadow-lg group"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
              </a>
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
                {success && (
                  <div className="bg-green-500/10 border border-green-500/50 text-green-400 p-4 rounded-xl flex items-center justify-center gap-2 mb-6">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm font-bold tracking-widest uppercase">Message sent successfully!</span>
                  </div>
                )}
                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl flex items-center justify-center gap-2 mb-6">
                    <XCircle className="w-5 h-5" />
                    <span className="text-sm font-bold tracking-widest uppercase">Failed to send. Please try again!</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/50">Name</label>
                    <input 
                      {...register("name")}
                      onMouseEnter={playHoverSound}
                      className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/20'} p-5 text-white focus:outline-none focus:border-primary transition-all rounded-2xl placeholder:text-white/40 text-xs tracking-widest uppercase`} 
                      placeholder="Your Name"
                    />
                    {errors.name && <p className="text-[8px] text-red-400 font-bold uppercase tracking-widest">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/50">Email</label>
                    <input 
                      {...register("email")}
                      onMouseEnter={playHoverSound}
                      type="email" 
                      className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/20'} p-5 text-white focus:outline-none focus:border-primary transition-all rounded-2xl placeholder:text-white/40 text-xs tracking-widest uppercase`} 
                      placeholder="email@example.com"
                    />
                    {errors.email && <p className="text-[8px] text-red-400 font-bold uppercase tracking-widest">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/50">Phone Number</label>
                  <input 
                    {...register("phone")}
                    onMouseEnter={playHoverSound}
                    className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500/50' : 'border-white/20'} p-5 text-white focus:outline-none focus:border-primary transition-all rounded-2xl placeholder:text-white/40 text-xs tracking-widest uppercase`} 
                    placeholder="9876543210"
                    maxLength={10}
                  />
                  {errors.phone && <p className="text-[8px] text-red-400 font-bold uppercase tracking-widest">{errors.phone.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/50">Subject</label>
                  <input 
                    {...register("subject")}
                    onMouseEnter={playHoverSound}
                    className={`w-full bg-white/5 border ${errors.subject ? 'border-red-500/50' : 'border-white/20'} p-5 text-white focus:outline-none focus:border-primary transition-all rounded-2xl placeholder:text-white/40 text-xs tracking-widest uppercase`} 
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && <p className="text-[8px] text-red-400 font-bold uppercase tracking-widest">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/50">Message</label>
                  <textarea 
                    {...register("message")}
                    onMouseEnter={playHoverSound}
                    rows={4} 
                    className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/20'} p-5 text-white focus:outline-none focus:border-primary transition-all rounded-2xl resize-none placeholder:text-white/40 text-xs tracking-widest uppercase`} 
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

function ContactInfo({ icon, label, value, action, href }: { icon: React.ReactNode, label: string, value: string, action?: string, href?: string }) {
  const Content = (
    <>
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
    </>
  );

  return href ? (
    <a href={href} className="flex items-center gap-8 group cursor-pointer">
      {Content}
    </a>
  ) : (
    <div className="flex items-center gap-8 group cursor-pointer">
      {Content}
    </div>
  );
}
