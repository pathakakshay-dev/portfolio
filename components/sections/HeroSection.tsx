"use client";

import avatar from "@/app/images/akshay-img.jpeg";
import { motion } from "framer-motion";
import { ArrowDown, BriefcaseBusiness, Download, Send } from "lucide-react";
import Image from "next/image";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { profile, roles } from "@/constants/portfolio";
import { useEffect, useState } from "react";

function HolographicDeveloperEnvironment() {
  const chips = ["React", "Next", "Redux", "Nest", "SQL", "ERP"];

  return (
    <div className="absolute inset-0 grid place-items-center overflow-hidden rounded-[3rem] border border-cyan/10 bg-[linear-gradient(145deg,rgba(0,245,255,.08),rgba(124,58,237,.10)),radial-gradient(circle_at_center,rgba(0,245,255,.18),transparent_25rem)]">
      <div className="absolute inset-8 rounded-[2.5rem] border border-white/10" />
      <div className="absolute bottom-0 left-1/2 h-28 w-3/4 -translate-x-1/2 rounded-full bg-cyan/20 blur-3xl" />
      <motion.div
        className="relative grid size-72 place-items-center rounded-full border border-cyan/20 bg-cyan/5 shadow-glow md:size-[24rem]"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-5 rounded-full border border-dashed border-violet/35" />
        <div className="absolute inset-14 rounded-full border border-cyan/25" />
        <div className="absolute inset-24 rounded-full border border-white/10" />
        <motion.div
          className="relative size-40 overflow-hidden rounded-full border-2 border-cyan/45 bg-black/35 p-1 shadow-[0_0_70px_rgba(0,245,255,.25)] backdrop-blur md:size-52"
          animate={{ rotate: -360, y: [0, -12, 0] }}
          transition={{ rotate: { duration: 28, repeat: Infinity, ease: "linear" }, y: { duration: 4, repeat: Infinity } }}
        >
          <div className="relative size-full overflow-hidden rounded-full">
            <Image
              src={avatar}
              alt="Akshay Kumar Pathak"
              fill
              sizes="(min-width: 768px) 208px, 160px"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/34 via-transparent to-cyan/10" />
          </div>
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/15" />
        </motion.div>
      </motion.div>
      {chips.map((chip, index) => {
        const angle = (index / chips.length) * Math.PI * 2;
        const x = (50 + Math.cos(angle) * 42).toFixed(4);
        const y = (50 + Math.sin(angle) * 30).toFixed(4);
        return (
          <motion.div
            key={chip}
            className="absolute rounded-full border border-cyan/25 bg-night/45 px-4 py-2 text-xs font-bold text-white shadow-glow backdrop-blur"
            style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
            animate={{ y: [0, -10, 0], opacity: [0.72, 1, 0.72] }}
            transition={{ duration: 3 + index * 0.35, repeat: Infinity, delay: index * 0.1 }}
          >
            {chip}
          </motion.div>
        );
      })}
      <div className="absolute bottom-10 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan to-transparent" />
      <div className="absolute left-1/2 top-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/10" />
    </div>
  );
}

export function HeroSection() {
  const [role, setRole] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setRole((current) => (current + 1) % roles.length), 1800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 bg-radial-grid bg-[length:34px_34px] opacity-25 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,30%),rgba(0,245,255,.18),transparent_28rem)]" />
      <div className="section-shell relative z-10 grid min-h-[calc(100vh-6rem)] items-center gap-12 pb-20 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan shadow-glow">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,.9)]" />
            Available for hiring
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="text-balance text-5xl font-black leading-[.92] tracking-normal text-white sm:text-6xl lg:text-8xl"
          >
            <span className="shimmer">AKSHAY</span>
            <br />
            KUMAR PATHAK
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-7 h-12 overflow-hidden font-mono text-xl text-cyan md:text-2xl">
            <motion.div key={role} initial={{ y: 28, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -28, opacity: 0 }}>
              {roles[role]}
            </motion.div>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34 }} className="mt-4 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            {profile.tagline}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.46 }} className="mt-9 flex flex-wrap gap-4">
            <PremiumButton href="#projects" icon={BriefcaseBusiness}>View Projects</PremiumButton>
            <PremiumButton href="/resume" icon={Download} variant="ghost" download>Download Resume</PremiumButton>
            <PremiumButton href="mailto:akshaypathak.dev@gmail.com" icon={Send} variant="ghost">Hire Me</PremiumButton>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-10 grid max-w-xl gap-3 rounded-2xl border border-cyan/15 bg-black/35 p-4 font-mono text-xs text-slate-300 backdrop-blur">
            <span className="text-emerald-300">$ recruiter.scan --candidate akshay</span>
            <span>status: senior-ready frontend engineer</span>
            <span>stack: react, next, redux, nest, erp systems</span>
          </motion.div>
        </div>
        <div className="relative min-h-[440px]">
          <div className="absolute inset-0 rounded-[3rem] bg-cyan/10 blur-3xl" />
          <HolographicDeveloperEnvironment />
          <div className="glass glow-border absolute left-5 top-6 rounded-2xl px-5 py-4">
            <p className="text-xs text-slate-400">Reliability</p>
            <p className="text-2xl font-black text-white">99.9%</p>
          </div>
          <div className="glass absolute bottom-10 right-5 rounded-2xl px-5 py-4">
            <p className="text-xs text-slate-400">Impact</p>
            <p className="text-2xl font-black text-cyan">50K+</p>
          </div>
          <div className="absolute inset-10 animate-orbit rounded-full border border-dashed border-cyan/20" />
        </div>
      </div>
      <a href="#about" className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 p-3 text-cyan backdrop-blur transition hover:border-cyan/60">
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  );
}
