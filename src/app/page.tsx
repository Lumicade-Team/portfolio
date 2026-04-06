import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumicade Solutions | We Architect Digital Excellence",
  description:
    "Crafting bespoke software solutions and high-performance SaaS for visionary brands who demand precision engineering.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Products />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}
