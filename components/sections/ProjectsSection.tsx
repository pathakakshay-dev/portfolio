"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/constants/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useState } from "react";

export function ProjectsSection() {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Featured Systems" title="Startup-grade showcases for real business workflows">
          Two focused projects communicate what recruiters care about most: systems thinking, practical UX, performance, and scalable state management.
        </SectionHeading>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <motion.button
                onClick={() => setActive(project)}
                whileHover={{ rotateX: 4, rotateY: -4, y: -8 }}
                className="glass spotlight group min-h-[420px] w-full overflow-hidden rounded-[2rem] p-7 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan">Case Study</span>
                  <ExternalLink className="size-5 text-slate-400 transition group-hover:text-cyan" />
                </div>
                <div className="my-10 h-40 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,245,255,.16),rgba(124,58,237,.18)),radial-gradient(circle_at_30%_20%,rgba(255,255,255,.22),transparent_22rem)] p-4">
                  <div className="grid h-full grid-cols-3 gap-3">
                    <div className="rounded-xl bg-black/25" />
                    <div className="rounded-xl bg-cyan/20 shadow-glow" />
                    <div className="rounded-xl bg-black/25" />
                    <div className="col-span-2 rounded-xl bg-white/10" />
                    <div className="rounded-xl bg-violet/25" />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-white">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.description}</p>
                <p className="mt-5 text-sm font-semibold text-cyan">{project.impact}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{tech}</span>)}
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {active ? (
          <motion.div className="fixed inset-0 z-[110] grid place-items-center bg-black/70 p-4 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div initial={{ scale: 0.94, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 30 }} className="glass max-h-[86vh] w-full max-w-3xl overflow-auto rounded-[2rem] p-7">
              <button onClick={() => setActive(null)} className="ml-auto grid size-10 place-items-center rounded-full bg-white/10 text-white"><X className="size-5" /></button>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan">Project Intelligence</p>
              <h3 className="mt-3 text-4xl font-black text-white">{active.title}</h3>
              <p className="mt-4 text-lg text-slate-300">{active.description}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {active.features.map((feature) => <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">{feature}</div>)}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
