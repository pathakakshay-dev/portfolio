"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setValue((current) => Math.min(current + Math.ceil(Math.random() * 13), 100)), 90);
    const exit = window.setTimeout(() => setDone(true), 1550);
    return () => {
      window.clearInterval(timer);
      window.clearTimeout(exit);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          className="fixed inset-0 z-[120] grid place-items-center bg-night"
          exit={{ opacity: 0, filter: "blur(18px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mx-auto mb-8 grid size-24 place-items-center rounded-[2rem] border border-cyan/40 bg-cyan/10 shadow-glow"
            >
              <span className="text-3xl font-black text-cyan">AK</span>
            </motion.div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.45em] text-slate-400">Compiling interface</p>
            <div className="h-1 w-72 overflow-hidden rounded-full bg-white/10">
              <motion.div className="h-full bg-gradient-to-r from-cyan via-sky to-violet" animate={{ width: `${value}%` }} />
            </div>
            <p className="mt-4 font-mono text-sm text-cyan">{Math.min(value, 100)}%</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
