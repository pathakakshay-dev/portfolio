"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, CheckCircle2, Sparkles, X } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Why should we hire Akshay?",
    answer:
      "Akshay brings 3.5+ years of frontend engineering experience with strong React, Next.js, Redux, Tailwind, and MERN stack skills. He is especially useful for teams that need polished product UI, scalable dashboards, ERP workflows, and business-focused execution."
  },
  {
    question: "What kind of projects has he built?",
    answer:
      "He has built an enterprise Real Estate ERP with property inventory, booking, payments, lead management, and analytics. He also worked on a Municipal Corporation Portal for citizen services like water connections, bill payments, complaints, and resident dashboards."
  },
  {
    question: "What is his strongest technical area?",
    answer:
      "His strongest area is frontend architecture for real-world business applications: React components, Next.js App Router, Redux state flows, responsive UI systems, dashboard UX, performance optimization, and API-connected product experiences."
  },
  {
    question: "Is he suitable for enterprise products?",
    answer:
      "Yes. His experience includes ERP systems, scalable dashboards, reporting workflows, municipal portals, medical and educational platforms, and SEO-focused websites. That makes him a strong fit for SaaS, admin panels, CRM, ERP, and internal tools."
  },
  {
    question: "How can recruiters contact him?",
    answer:
      "Recruiters can email him at akshaypathak.dev@gmail.com, call +91 7004765080, or connect through LinkedIn at linkedin.com/in/pathakakshay-dev."
  }
];

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const selected = faqs[active];

  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-cyan text-slate-950 shadow-glow">
        <Bot className="size-6" />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.96 }} className="glass fixed bottom-24 right-5 z-50 w-[calc(100%-2.5rem)] max-w-md rounded-3xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3"><Bot className="size-5 text-cyan" /><h3 className="font-black text-white">Recruiter FAQ</h3></div>
              <button onClick={() => setOpen(false)}><X className="size-5 text-slate-300" /></button>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-400">Select a question to get a quick recruiter-ready answer.</p>
            <div className="mt-4 grid gap-2">
              {faqs.map((faq, index) => (
                <button
                  key={faq.question}
                  onClick={() => setActive(index)}
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm transition ${
                    active === index
                      ? "border-cyan/60 bg-cyan/15 text-white shadow-glow"
                      : "border-white/10 bg-white/5 text-slate-200 hover:border-cyan/50 hover:bg-cyan/10"
                  }`}
                >
                  {active === index ? <CheckCircle2 className="size-4 shrink-0 text-cyan" /> : <Sparkles className="size-4 shrink-0 text-cyan" />}
                  <span className="font-semibold">{faq.question}</span>
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-cyan/20 bg-black/25 p-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan">Answer</p>
              <p className="text-sm leading-6 text-slate-200">{selected.answer}</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
