"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/constants/portfolio";
import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Career Timeline" title="Enterprise work, measurable outcomes" />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan via-violet to-transparent md:left-1/2" />
          {experiences.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.07} className={`relative mb-8 md:w-[calc(50%-2rem)] ${index % 2 ? "md:ml-auto" : ""}`}>
              <motion.article whileHover={{ y: -6, scale: 1.01 }} className="glass spotlight rounded-[2rem] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">{item.role}</p>
                <h3 className="mt-3 text-2xl font-black text-white">{item.company}</h3>
                <p className="mt-3 rounded-full border border-violet/30 bg-violet/10 px-4 py-2 text-sm font-bold text-violet-200">{item.metric}</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                  {item.achievements.map((achievement) => <li key={achievement}>- {achievement}</li>)}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tech.map((tech) => <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{tech}</span>)}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
