"use client";

import { useLenis } from "@/hooks/useLenis";
import { useMousePosition } from "@/hooks/useMousePosition";
import { ReactNode, useEffect, useState } from "react";

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const { x, y } = useMousePosition();
  const [progress, setProgress] = useState(0);

  useLenis();

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-[90] h-1 bg-gradient-to-r from-cyan via-sky to-violet" style={{ width: `${progress}%` }} />
      <div
        className="pointer-events-none fixed z-[85] hidden h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-3xl md:block"
        style={{ left: x, top: y }}
      />
      <div
        className="pointer-events-none fixed z-[86] hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/70 bg-white/15 shadow-glow md:block"
        style={{ left: x, top: y }}
      />
      {children}
    </>
  );
}
