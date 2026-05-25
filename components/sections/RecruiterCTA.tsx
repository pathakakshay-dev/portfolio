import { PremiumButton } from "@/components/ui/PremiumButton";
import { Calendar, Download, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/constants/portfolio";

export function RecruiterCTA() {
  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <div className="glass glow-border rounded-[2.5rem] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan">Recruiter Attention Zone</p>
              <h2 className="mt-5 text-balance text-4xl font-black leading-tight text-white md:text-6xl">
                Looking for a frontend engineer who understands both technology and product thinking?
              </h2>
              <div className="mt-8 flex flex-wrap gap-4">
                <PremiumButton href={`mailto:${profile.email}?subject=Interview opportunity for Akshay`} icon={Calendar}>Schedule Interview</PremiumButton>
                <PremiumButton href="/resume" icon={Download} variant="ghost" download>Download Resume</PremiumButton>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-black/20 p-6">
              <h3 className="text-2xl font-black text-white">Contact Matrix</h3>
              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <p className="flex gap-3"><Mail className="size-5 text-cyan" /> {profile.email}</p>
                <p className="flex gap-3"><Phone className="size-5 text-cyan" /> {profile.phone}</p>
                <p className="flex gap-3"><MapPin className="size-5 text-cyan" /> {profile.location}</p>
              </div>
              <div className="mt-6 flex gap-3">
                <a className="rounded-full bg-white/10 px-4 py-2 text-sm text-white" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="rounded-full bg-white/10 px-4 py-2 text-sm text-white" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
