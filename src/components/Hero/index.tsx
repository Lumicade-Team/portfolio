"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 40, damping: 20, mass: 1 };
  const springX = useSpring(rawX, springConfig);
  const springY = useSpring(rawY, springConfig);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouse = (e: MouseEvent) => {
      const { left, top, width, height } = section.getBoundingClientRect();
      rawX.set((e.clientX - left) / width - 0.5);
      rawY.set((e.clientY - top) / height - 0.5);
    };

    const handleMouseLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    const handleTilt = (e: DeviceOrientationEvent) => {
      const gamma = Math.max(-15, Math.min(15, e.gamma ?? 0));
      const beta = Math.max(-15, Math.min(15, (e.beta ?? 0) - 45));
      rawX.set(gamma / 30);
      rawY.set(beta / 30);
    };

    const isTouchDevice = window.matchMedia("(hover: none)").matches;

    if (isTouchDevice) {
      window.addEventListener("deviceorientation", handleTilt);
    } else {
      section.addEventListener("mousemove", handleMouse);
      section.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (isTouchDevice) {
        window.removeEventListener("deviceorientation", handleTilt);
      } else {
        section.removeEventListener("mousemove", handleMouse);
        section.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [rawX, rawY]);

  const x1 = useTransform(springX, (v) => v * 30);
  const y1 = useTransform(springY, (v) => v * 30);

  const x2 = useTransform(springX, (v) => v * -20);
  const y2 = useTransform(springY, (v) => v * 20);

  const x3 = useTransform(springX, (v) => v * 18);
  const y3 = useTransform(springY, (v) => v * -14);

  const x4 = useTransform(springX, (v) => v * -14);
  const y4 = useTransform(springY, (v) => v * 18);

  const x5 = useTransform(springX, (v) => v * 22);
  const y5 = useTransform(springY, (v) => v * -20);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white"
    >
      {/* Rainbow gradient mesh background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Pink blob — top right */}
        <motion.div
          style={{ x: x1, y: y1 }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#ff6b9d] opacity-[0.13] blur-[120px]"
        />
        {/* Purple blob — center */}
        <motion.div
          style={{ x: x2, y: y2 }}
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[#635bff] opacity-[0.10] blur-[100px]"
        />
        {/* Orange blob — bottom left */}
        <motion.div
          style={{ x: x3, y: y3 }}
          className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-[#f97316] opacity-[0.10] blur-[120px]"
        />
        {/* Yellow blob — right center */}
        <motion.div
          style={{ x: x4, y: y4 }}
          className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#fbbf24] opacity-[0.08] blur-[100px]"
        />
        {/* Cyan blob — bottom right */}
        <motion.div
          style={{ x: x5, y: y5 }}
          className="absolute bottom-16 right-1/4 w-[350px] h-[350px] rounded-full bg-[#06b6d4] opacity-[0.07] blur-[90px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-on-surface mb-8 leading-[1.05]">
          We Architect
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
            Digital Excellence.
          </span>
        </h1>

        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Crafting bespoke software, AI automation, and high-performance SaaS
          for visionary brands who demand precision engineering.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
          <Button
            size="lg"
            className="w-full md:w-auto px-10 py-4 text-base bg-primary hover:bg-primary-dim text-white font-medium rounded-lg shadow-md transition-all duration-md ease-out-stripe active:scale-95"
            asChild
          >
            <a href="#services">Explore Our Work</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full md:w-auto px-10 py-4 border-outline-variant text-on-surface font-medium text-base hover:bg-surface-container-low rounded-lg transition-all duration-md ease-out-stripe"
            asChild
          >
            <a href="#contact">Let&apos;s Talk</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
