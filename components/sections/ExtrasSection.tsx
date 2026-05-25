"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Github, Music2, Sparkles, Trophy } from "lucide-react";

export function ExtrasSection() {
  const days = Array.from({ length: 70 }, (_, i) => (i * 17) % 5);
  return (
    <section className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Premium Signals" title="Small details that make the brand memorable" />
        <div className="grid gap-5 lg:grid-cols-3">
          <Reveal className="glass rounded-[2rem] p-6 lg:col-span-2">
            <div className="mb-5 flex items-center gap-3 text-white"><Github className="size-5 text-cyan" /><h3 className="text-xl font-black">GitHub Activity Visualization</h3></div>
            <div className="grid grid-cols-10 gap-2">
              {days.map((level, index) => (
                <span key={index} className="aspect-square rounded-md" style={{ background: `rgba(0,245,255,${0.08 + level * 0.14})` }} />
              ))}
            </div>
          </Reveal>
          <Reveal className="glass rounded-[2rem] p-6">
            <div className="flex items-center gap-3 text-white"><Music2 className="size-5 text-cyan" /><h3 className="text-xl font-black">Now Playing</h3></div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="font-semibold text-white">Deep Focus Build Mode</p>
              <p className="mt-1 text-sm text-slate-400">Spotify-ready integration slot</p>
            </div>
          </Reveal>
          <Reveal className="glass rounded-[2rem] p-6">
            <div className="flex items-center gap-3 text-white"><Trophy className="size-5 text-cyan" /><h3 className="text-xl font-black">Achievement Badges</h3></div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["ERP Builder", "Dashboard Systems", "SEO Lift", "50K+ Impact"].map((badge) => <span key={badge} className="rounded-full bg-violet/15 px-3 py-2 text-sm text-violet-100">{badge}</span>)}
            </div>
          </Reveal>
          <Reveal className="glass rounded-[2rem] p-6 lg:col-span-2">
            <div className="mb-5 flex items-center gap-3 text-white"><Sparkles className="size-5 text-cyan" /><h3 className="text-xl font-black">Dynamic Blog Preview</h3></div>
            <div className="grid gap-3 md:grid-cols-3">
              {["Building ERP dashboards with React", "State architecture for business apps", "Designing portals citizens can use"].map((post) => (
                <article key={post} className="rounded-2xl bg-white/5 p-4">
                  <p className="text-sm font-bold text-white">{post}</p>
                  <p className="mt-3 text-xs text-slate-400">Draft-ready thought leadership slot</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
