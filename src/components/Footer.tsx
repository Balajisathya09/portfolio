
"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.363.632 4.672 1.832 6.695L2.667 29.333l6.805-1.787A13.27 13.27 0 0 0 16.003 29.333C23.363 29.333 29.333 23.363 29.333 16S23.363 2.667 16.003 2.667zm0 2.399c6.052 0 10.934 4.882 10.934 10.934 0 6.052-4.882 10.934-10.934 10.934a10.89 10.89 0 0 1-5.567-1.529l-.399-.239-4.038 1.059 1.079-3.942-.261-.411A10.895 10.895 0 0 1 5.07 16c0-6.052 4.882-10.934 10.933-10.934zm-3.261 5.601c-.207 0-.543.078-.827.389-.284.311-1.086 1.061-1.086 2.585s1.112 2.997 1.266 3.205c.155.207 2.171 3.469 5.35 4.727 2.645 1.047 3.182.839 3.755.787.572-.052 1.845-.755 2.105-1.484.259-.729.259-1.354.182-1.484-.078-.13-.285-.208-.597-.364-.311-.156-1.844-.91-2.13-1.014-.285-.103-.493-.156-.7.156-.208.311-.804 1.013-.986 1.22-.181.208-.363.234-.674.078-.311-.156-1.313-.484-2.502-1.547-.924-.825-1.549-1.845-1.73-2.156-.181-.312-.019-.48.136-.635.139-.139.311-.364.467-.546.154-.182.206-.311.309-.519.103-.208.052-.39-.026-.546-.077-.156-.689-1.685-.957-2.306-.258-.602-.524-.518-.7-.527l-.596-.01z"/>
  </svg>
);

const SOCIAL_LINKS = [
  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn", hoverColor: "#0A66C2" },
  { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub", hoverColor: "#ffffff" },
  { icon: <WhatsAppIcon className="w-5 h-5" />, href: "https://wa.me/918754544636", label: "WhatsApp", hoverColor: "#25D366" },
];

export default function Footer() {
  return (
    <footer className="px-12 py-12 border-t border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <div className="flex gap-12">
          {SOCIAL_LINKS.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                default: { delay: idx * 0.1 }, 
                hover: { duration: 0 } 
              }}
              whileHover={{ y: -3, color: link.hoverColor }}
              className="text-white/70"
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
