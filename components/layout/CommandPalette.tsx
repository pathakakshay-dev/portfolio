"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Rocket } from "lucide-react";

const actions = [
  { label: "View Projects", href: "#projects", icon: Rocket },
  { label: "Email Akshay", href: "mailto:akshaypathak.dev@gmail.com", icon: Mail },
  { label: "Download Resume", href: "/resume", icon: Download, download: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/pathakakshay-dev", icon: Linkedin, external: true },
  { label: "GitHub", href: "https://github.com/pathakakshay-dev", icon: Github, external: true }
];

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-[100] grid place-items-start bg-black/60 px-4 pt-28 backdrop-blur-md md:place-items-center md:pt-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div initial={{ scale: 0.96, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 20 }} className="glass w-full max-w-xl overflow-hidden rounded-3xl" onClick={(e) => e.stopPropagation()}>
            <div className="border-b border-white/10 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">Command Center</p>
              <p className="mt-1 text-2xl font-black text-white">Recruiter fast actions</p>
            </div>
            <div className="p-3">
              {actions.map((action) => {
                const Icon = action.icon;
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.external ? "_blank" : undefined}
                    rel={action.external ? "noreferrer" : undefined}
                    download={action.download}
                    onClick={onClose}
                    className="flex items-center gap-4 rounded-2xl p-4 text-slate-200 transition hover:bg-cyan/10 hover:text-white"
                  >
                    <span className="grid size-10 place-items-center rounded-xl bg-white/10 text-cyan"><Icon className="size-5" /></span>
                    <span className="font-semibold">{action.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
