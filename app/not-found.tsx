import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-radial-grid bg-[length:34px_34px] opacity-25 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
      <div className="absolute left-1/2 top-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-3xl" />
      <section className="glass glow-border relative z-10 w-full max-w-3xl rounded-[2.5rem] p-8 text-center md:p-12">
        <div className="mx-auto mb-7 grid size-20 place-items-center rounded-3xl border border-cyan/30 bg-cyan/10 text-cyan shadow-glow">
          <Search className="size-9" />
        </div>
        <p className="font-mono text-xs font-bold uppercase tracking-[0.36em] text-cyan">404 signal lost</p>
        <h1 className="mt-5 text-balance text-5xl font-black leading-none text-white md:text-7xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
          This route does not exist in Akshay's portfolio system. Return to the main experience and keep exploring the work.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-cyan px-6 text-sm font-bold text-slate-950 shadow-glow">
            <Home className="size-4" />
            Back Home
          </Link>
          <Link href="/#projects" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-cyan/25 bg-white/5 px-6 text-sm font-bold text-white backdrop-blur transition hover:border-cyan/70">
            <ArrowLeft className="size-4" />
            View Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
