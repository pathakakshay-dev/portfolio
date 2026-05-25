"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "ghost";
  download?: boolean;
};

export function PremiumButton({ href, children, icon: Icon, variant = "primary", download }: Props) {
  return (
    <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group relative">
      <a
        href={href}
        download={download}
        className={cn(
          "relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 text-sm font-semibold transition",
          variant === "primary"
            ? "bg-cyan text-slate-950 shadow-glow"
            : "border border-cyan/25 bg-white/5 text-white backdrop-blur-xl hover:border-cyan/70"
        )}
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition duration-700 group-hover:translate-x-full" />
        {Icon ? <Icon className="relative size-4" /> : null}
        <span className="relative">{children}</span>
      </a>
    </motion.div>
  );
}
