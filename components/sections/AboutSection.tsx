import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { dna, stats } from "@/constants/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Developer DNA" title="Frontend engineer with product instincts">
          Akshay blends polished interface craft with enterprise delivery experience, building dashboards and systems that are usable, scalable, and visually sharp.
        </SectionHeading>
        <div className="grid gap-6 lg:grid-cols-[.95fr_1.05fr]">
          <Reveal className="glass glow-border rounded-[2rem] p-7">
            <div className="relative border-l border-cyan/30 pl-7">
              {["Understand business workflows", "Design scalable UI systems", "Engineer performant React experiences", "Ship polished production products"].map((item, index) => (
                <div key={item} className="relative pb-9 last:pb-0">
                  <span className="absolute -left-[2.1rem] top-1 grid size-5 place-items-center rounded-full bg-cyan shadow-glow" />
                  <p className="text-sm font-mono text-cyan">0{index + 1}</p>
                  <h3 className="mt-1 text-xl font-bold text-white">{item}</h3>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08} className="glass rounded-3xl p-6">
                <p className="text-4xl font-black text-holo">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </Reveal>
            ))}
            <Reveal className="glass rounded-3xl p-6 sm:col-span-2">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan">Traits</p>
              <div className="flex flex-wrap gap-3">
                {dna.map((trait) => (
                  <span key={trait} className="rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-semibold text-cyan">{trait}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
