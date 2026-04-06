import { Feature } from "@/types/feature";
import {
  Globe,
  Desktop,
  UserGear,
  DeviceMobile,
  Cloud,
  PaintBrush,
} from "@phosphor-icons/react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Globe size={40} />,
    title: "Web Development",
    paragraph:
      "High-performance company sites, landing pages, and web applications built with modern frameworks for speed and scalability.",
  },
  {
    id: 2,
    icon: <Desktop size={40} />,
    title: "Custom Systems & Portals",
    paragraph:
      "Tailored business dashboards, admin portals, and internal tools designed around your exact operational workflows.",
  },
  {
    id: 3,
    icon: <UserGear size={40} />,
    title: "AI Automation & Workflow",
    paragraph:
      "Intelligent automation pipelines and AI-powered integrations that eliminate repetitive work and accelerate decision-making.",
  },
  {
    id: 4,
    icon: <DeviceMobile size={40} />,
    title: "Mobile App Development",
    paragraph:
      "Cross-platform mobile applications across various domains — from consumer apps to enterprise tools, built for iOS and Android.",
  },
  {
    id: 5,
    icon: <Cloud size={40} />,
    title: "SaaS & Microservices",
    paragraph:
      "Our own subscription-based tools and APIs — including OCR data extraction and more in development — ready for you to integrate.",
  },
  {
    id: 6,
    icon: <PaintBrush size={40} />,
    title: "Portfolio & Branding Solutions",
    paragraph:
      "Developer and company portfolio websites that showcase your work with a polished, professional online presence.",
  },
];
export default featuresData;
