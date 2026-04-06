import {
  Code,
  Devices,
  Brain,
  Flag,
} from "@phosphor-icons/react";

export const whyCards = [
  {
    id: 1,
    title: "End-to-End Development",
    description: "From initial concept and design through to deployment and maintenance — we handle the full lifecycle so you don't juggle multiple vendors.",
    icon: <Code size={28} />,
  },
  {
    id: 2,
    title: "Multi-Domain Expertise",
    description: "Web, mobile, AI, SaaS — our team works across industries and tech stacks to deliver the right solution for every challenge.",
    icon: <Devices size={28} />,
  },
  {
    id: 3,
    title: "AI-First Approach",
    description: "We embed intelligent automation into workflows from day one — not as an afterthought, but as a core design principle.",
    icon: <Brain size={28} />,
  },
  {
    id: 4,
    title: "Subscription-Ready Services",
    description: "Our proprietary SaaS microservices are built for easy integration and available on flexible monthly plans — plug in and go.",
    icon: <Flag size={28} />,
  },
];

export const techStack = [
  "Next.js", "React", "React Native", "Node.js", "Python",
  "TypeScript", "PostgreSQL", "Supabase", "AWS", "Docker",
  "TailwindCSS", "OpenAI", "LangChain", "Flutter",
];

export const processSteps = [
  {
    number: "01",
    title: "Research",
    description: "Deep-dive into your domain, users, and technical landscape before writing a single line of code.",
  },
  {
    number: "02",
    title: "Design",
    description: "Architecture, UI/UX, and system design — every decision is intentional and documented.",
  },
  {
    number: "03",
    title: "Build",
    description: "Iterative sprints with continuous delivery. You see progress every week, not just at the end.",
  },
  {
    number: "04",
    title: "Deploy",
    description: "Production-ready delivery with monitoring, CI/CD, and post-launch support built in.",
  },
];

export const stats = [
  { value: "6+", label: "Service Domains" },
  { value: "MY", label: "Based in Malaysia" },
  { value: "24h", label: "Response Time" },
  { value: "100%", label: "Project Delivery" },
];
