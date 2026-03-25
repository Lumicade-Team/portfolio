import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Web Development",
    paragraph:
      "High-performance company sites, landing pages, and web applications built with modern frameworks for speed and scalability.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Custom Systems & Portals",
    paragraph:
      "Tailored business dashboards, admin portals, and internal tools designed around your exact operational workflows.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
        <path d="M8.24 9.93A4 4 0 0 1 12 2" />
        <path d="M16 16c0-2.21-1.79-4-4-4s-4 1.79-4 4" />
        <circle cx="12" cy="22" r="2" />
        <path d="M12 20v-4" />
        <path d="M4 16l1.5-1.5" />
        <path d="M20 16l-1.5-1.5" />
      </svg>
    ),
    title: "AI Automation & Workflow",
    paragraph:
      "Intelligent automation pipelines and AI-powered integrations that eliminate repetitive work and accelerate decision-making.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: "Mobile App Development",
    paragraph:
      "Cross-platform mobile applications across various domains — from consumer apps to enterprise tools, built for iOS and Android.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    title: "SaaS & Microservices",
    paragraph:
      "Our own subscription-based tools and APIs — including OCR data extraction and more in development — ready for you to integrate.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Portfolio & Branding Solutions",
    paragraph:
      "Developer and company portfolio websites that showcase your work with a polished, professional online presence.",
  },
];
export default featuresData;
