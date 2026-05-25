import { Reveal } from "@/components/ui/Reveal";

export function PhilosophySection() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <Reveal className="glass glow-border rounded-[2.5rem] p-8 text-center md:p-14">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan">My Engineering Philosophy</p>
          <blockquote className="mx-auto mt-6 max-w-4xl text-balance text-3xl font-black leading-tight text-white md:text-6xl">
            "I don't just build interfaces. I engineer scalable digital experiences that solve real-world business problems."
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
