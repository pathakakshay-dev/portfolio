"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/constants/portfolio";
import { motion } from "framer-motion";

export function SkillsSection() {
  const skills = skillGroups.flatMap((group) => group.skills.map((skill) => ({ skill, group: group.title })));

  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Skill Matrix" title="Interactive technology cloud, not progress bars" />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal className="glass relative min-h-[520px] overflow-hidden rounded-[2rem] p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,.18),transparent_34rem)]" />
            {skills.map((item, index) => {
              const angle = (index / skills.length) * Math.PI * 2;
              const radius = 35 + (index % 3) * 18;
              const x = (50 + Math.cos(angle) * radius).toFixed(4);
              const y = (50 + Math.sin(angle) * radius * 0.72).toFixed(4);
              return (
                <motion.div
                  key={item.skill}
                  className="absolute rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-bold text-white shadow-glow backdrop-blur"
                  style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                  animate={{ y: [0, -12, 0], opacity: [0.72, 1, 0.72] }}
                  transition={{ duration: 3 + (index % 4), repeat: Infinity, delay: index * 0.08 }}
                  whileHover={{ scale: 1.18, backgroundColor: "rgba(0,245,255,.22)" }}
                >
                  {item.skill}
                </motion.div>
              );
            })}
            <div className="absolute left-1/2 top-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-violet/40 bg-violet/15 text-center text-sm font-black text-white shadow-violet">
              MERN
              <br />
              CORE
            </div>
          </Reveal>
          <div className="grid gap-4">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.08} className="glass rounded-3xl p-5">
                <h3 className="text-xl font-black text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => <span key={skill} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">{skill}</span>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
