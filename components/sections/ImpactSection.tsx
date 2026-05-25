"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { impactMetrics } from "@/constants/portfolio";
import { motion } from "framer-motion";

export function ImpactSection() {
  return (
    <section id="impact" className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Impact Dashboard" title="The numbers recruiters scan first" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.08} className="glass rounded-[2rem] p-6">
              <p className="text-sm text-slate-400">{metric.label}</p>
              <p className="mt-3 text-4xl font-black text-holo">{metric.value}{metric.suffix}</p>
              <div className="mt-5 h-28 rounded-2xl border border-white/10 bg-black/20 p-3">
                <motion.div className="h-full rounded-xl bg-gradient-to-t from-cyan/60 to-violet/60" initial={{ height: 0 }} whileInView={{ height: `${Math.min(metric.value, 100)}%` }} viewport={{ once: true }} transition={{ duration: 1.1, delay: index * 0.1 }} />
              </div>
              <p className="mt-4 text-xs text-slate-400">{metric.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
