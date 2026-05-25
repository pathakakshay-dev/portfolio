"use client";

import avatar from "@/app/images/akshay-img.jpeg";
import { Moon, Search, Sun } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = ["about", "experience", "projects", "skills", "impact", "contact"];

export function NavBar({ onCommand }: { onCommand: () => void }) {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light", light);
  }, [light]);

  return (
    <header className="fixed left-0 right-0 top-4 z-50">
      <nav className="section-shell glass flex h-16 items-center justify-between rounded-full px-3 pl-4">
        <a href="#home" className="flex items-center gap-3 font-black text-white">
          <span className="relative size-11 overflow-hidden rounded-full border-2 border-cyan/55 bg-cyan/10 p-0.5 shadow-glow">
            <Image src={avatar} alt="Akshay Kumar Pathak" fill sizes="40px" className="object-cover" priority />
            <span className="absolute inset-0 rounded-full bg-gradient-to-t from-night/30 via-transparent to-cyan/15" />
          </span>
          <span className="hidden text-lg tracking-normal sm:inline">Akshay</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a key={link} href={`#${link}`} className="rounded-full px-4 py-2 text-sm font-medium capitalize text-slate-300 transition hover:bg-white/10 hover:text-white">
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onCommand} aria-label="Open command palette" className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan/50 hover:text-cyan">
            <Search className="size-4" />
          </button>
          <button onClick={() => setLight((v) => !v)} aria-label="Toggle theme" className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan/50 hover:text-cyan">
            {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
