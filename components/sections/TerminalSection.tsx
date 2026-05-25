"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useEffect, useState } from "react";

const lines = [
  "> initializing recruiter brief",
  "> loading frontend systems experience",
  "> validating React, Next.js, Redux, ERP workflows",
  "> candidate signal: creative, scalable, product-minded",
  "> recommendation: schedule interview"
];

export function TerminalSection() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => setCount((value) => (value >= lines.length ? lines.length : value + 1)), 750);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Interactive Terminal" title="Recruiter command line" />
        <Reveal className="glass mx-auto max-w-4xl overflow-hidden rounded-[2rem]">
          <div className="flex gap-2 border-b border-white/10 p-4">
            <span className="size-3 rounded-full bg-red-400" />
            <span className="size-3 rounded-full bg-yellow-400" />
            <span className="size-3 rounded-full bg-emerald-400" />
          </div>
          <div className="min-h-72 p-6 font-mono text-sm leading-8 text-cyan">
            {lines.slice(0, count).map((line) => <p key={line}>{line}</p>)}
            <span className="animate-pulse">_</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
