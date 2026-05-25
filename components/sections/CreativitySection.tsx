import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = ["UI Design", "Performance", "Animation", "Architecture", "User Experience"];

export function CreativitySection() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Code Meets Creativity" title="Product interfaces that feel engineered and alive" />
        <div className="grid gap-4 md:grid-cols-5">
          {items.map((item, index) => (
            <Reveal key={item} delay={index * 0.07} className="glass min-h-44 rounded-3xl p-5">
              <p className="font-mono text-xs text-cyan">0{index + 1}</p>
              <h3 className="mt-10 text-xl font-black text-white">{item}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
