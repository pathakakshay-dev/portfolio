import type { Experience, Project, SkillGroup } from "@/types/portfolio";

export const profile = {
  name: "Akshay Kumar Pathak",
  headline: "Innovative React & Frontend Developer | Software Engineer",
  experience: "3.5+ Years Experience",
  tagline: "Crafting scalable digital experiences with futuristic frontend engineering.",
  email: "akshaypathak.dev@gmail.com",
  phone: "+91 7004765080",
  linkedin: "https://linkedin.com/in/pathakakshay-dev",
  github: "https://github.com/pathakakshay-dev",
  location: "Ranchi, Jharkhand"
};

export const roles = [
  "Software Engineer",
  "React Developer",
  "Next.js Architect",
  "Frontend Specialist",
  "ERP System Builder"
];

export const stats = [
  { value: "3.5+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "50K+", label: "Users Impacted" },
  { value: "99.9%", label: "State Reliability" }
];

export const dna = [
  "Problem Solver",
  "UI Craftsman",
  "Performance Focused",
  "Scalable Architecture",
  "Product Mindset"
];

export const experiences: Experience[] = [
  {
    company: "Eastern Estate Construction & Developers PVT. LTD.",
    role: "Software Engineer",
    metric: "35% dashboard efficiency gain",
    achievements: [
      "Built an enterprise real estate ERP for property and CRM workflows.",
      "Managed 100+ property units with structured inventory visibility.",
      "Automated reporting workflows for faster operational reviews.",
      "Improved dashboard efficiency by 35% through focused UX and state design."
    ],
    tech: ["Next.js", "Nest.js", "Redux", "SQL", "Tailwind"]
  },
  {
    company: "Swati Industries",
    role: "Frontend Developer",
    metric: "50K+ residents impacted",
    achievements: [
      "Developed a Municipal Corporation Portal for digital citizen services.",
      "Shipped water connection, bill payment, complaint, and dashboard flows.",
      "Optimized key screens for a 30% performance improvement."
    ],
    tech: ["React.js", "Redux", "Responsive UI", "Performance"]
  },
  {
    company: "Jharkhand IT Services",
    role: "Frontend Developer",
    metric: "20% SEO traffic lift",
    achievements: [
      "Built medical and educational platforms with accessible UX patterns.",
      "Improved search visibility through semantic structure and SEO optimization.",
      "Created scalable frontends for forms, content, and admin workflows."
    ],
    tech: ["React.js", "SEO", "UI Engineering", "Forms"]
  },
  {
    company: "FormsADDA / Palaksys",
    role: "UI/UX Developer",
    metric: "10+ websites designed",
    achievements: [
      "Designed and customized 10+ websites across business categories.",
      "Handled WordPress customization and digital branding systems.",
      "Translated business goals into polished, conversion-minded web pages."
    ],
    tech: ["WordPress", "Figma", "Canva", "Branding"]
  }
];

export const projects: Project[] = [
  {
    title: "Real Estate ERP",
    description: "Enterprise-grade property and CRM management system.",
    impact: "100+ units, faster reporting, executive dashboards",
    features: [
      "Inventory Management",
      "Booking Workflow",
      "Payment Tracking",
      "Lead Management",
      "Real-time Analytics"
    ],
    tech: ["Next.js", "Redux", "Nest.js", "SQL"]
  },
  {
    title: "Municipal Corporation Portal",
    description: "Digital governance platform for citizen services.",
    impact: "50K+ residents served through modern public workflows",
    features: [
      "Water Connection Services",
      "Online Bill Payment",
      "Complaint Management",
      "Resident Dashboard"
    ],
    tech: ["React.js", "Redux", "Citizen UX", "Performance"]
  }
];

export const skillGroups: SkillGroup[] = [
  { title: "Frontend", skills: ["React.js", "Next.js", "Redux", "Tailwind", "Bootstrap"] },
  { title: "Backend", skills: ["Node.js", "Nest.js", "Express.js"] },
  { title: "Database", skills: ["MongoDB", "SQL"] },
  { title: "Tools", skills: ["Git", "GitHub", "Figma", "WordPress", "Canva"] }
];

export const impactMetrics = [
  { label: "Performance Improvement", value: 35, suffix: "%", detail: "dashboard efficiency" },
  { label: "User Reach", value: 50, suffix: "K+", detail: "citizens and users impacted" },
  { label: "SEO Growth", value: 20, suffix: "%", detail: "traffic improvement" },
  { label: "Workflow Automation", value: 100, suffix: "+", detail: "managed property units" }
];
