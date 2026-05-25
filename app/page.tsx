"use client";

import { ChatAssistant } from "@/components/assistant/ChatAssistant";
import { Loader } from "@/components/animations/Loader";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { NavBar } from "@/components/layout/NavBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { CreativitySection } from "@/components/sections/CreativitySection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ExtrasSection } from "@/components/sections/ExtrasSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { RecruiterCTA } from "@/components/sections/RecruiterCTA";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TerminalSection } from "@/components/sections/TerminalSection";
import { ExperienceProvider } from "@/components/providers/ExperienceProvider";
import { useEffect, useState } from "react";

export default function Home() {
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <ExperienceProvider>
      <Loader />
      <NavBar onCommand={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <PhilosophySection />
        <ImpactSection />
        <CreativitySection />
        <TerminalSection />
        <ExtrasSection />
        <RecruiterCTA />
      </main>
      <ChatAssistant />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Akshay Kumar Pathak",
            jobTitle: "React & Frontend Developer",
            email: "akshaypathak.dev@gmail.com",
            telephone: "+91 7004765080",
            address: "Ranchi, Jharkhand",
            url: "https://akshaypathak.dev",
            sameAs: ["https://linkedin.com/in/pathakakshay-dev", "https://github.com/pathakakshay-dev"],
            knowsAbout: ["React.js", "Next.js", "Redux", "MERN Stack", "ERP Systems", "Scalable Dashboards"]
          })
        }}
      />
    </ExperienceProvider>
  );
}
