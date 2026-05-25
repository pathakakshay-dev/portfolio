import { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-cyan">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-black leading-tight text-white md:text-5xl">{title}</h2>
      {children ? <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">{children}</p> : null}
    </div>
  );
}
