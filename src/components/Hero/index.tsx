"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

// Per-blob config: [xStrength, yStrength] in px (positive = follows, negative = counter)
const BLOB_STRENGTHS: [number, number][] = [
  [30, 30],
  [-20, 20],
  [18, -14],
  [-14, 18],
  [22, -20],
];

const LERP = 0.06; // lower = slower/smoother follow

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Current interpolated positions per blob
    const pos = BLOB_STRENGTHS.map(() => ({ x: 0, y: 0 }));
    // Target positions per blob
    const target = { nx: 0, ny: 0 }; // normalized -0.5 → 0.5

    let rafId: number;

    const tick = () => {
      blobRefs.current.forEach((el, i) => {
        if (!el) return;
        const [sx, sy] = BLOB_STRENGTHS[i];
        const tx = target.nx * sx;
        const ty = target.ny * sy;
        pos[i].x += (tx - pos[i].x) * LERP;
        pos[i].y += (ty - pos[i].y) * LERP;
        el.style.transform = `translate(${pos[i].x.toFixed(2)}px, ${pos[i].y.toFixed(2)}px)`;
      });
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    const handleMouse = (e: MouseEvent) => {
      const { left, top, width, height } = section.getBoundingClientRect();
      target.nx = (e.clientX - left) / width - 0.5;
      target.ny = (e.clientY - top) / height - 0.5;
    };

    const handleMouseLeave = () => {
      target.nx = 0;
      target.ny = 0;
    };

    const handleTilt = (e: DeviceOrientationEvent) => {
      target.nx = Math.max(-15, Math.min(15, e.gamma ?? 0)) / 30;
      target.ny = Math.max(-15, Math.min(15, (e.beta ?? 0) - 45)) / 30;
    };

    const isTouchDevice = window.matchMedia("(hover: none)").matches;

    if (isTouchDevice) {
      window.addEventListener("deviceorientation", handleTilt);
    } else {
      section.addEventListener("mousemove", handleMouse);
      section.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      cancelAnimationFrame(rafId);
      if (isTouchDevice) {
        window.removeEventListener("deviceorientation", handleTilt);
      } else {
        section.removeEventListener("mousemove", handleMouse);
        section.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white"
    >
      {/* Rainbow gradient mesh background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Pink blob — top right */}
        <div
          ref={(el) => { blobRefs.current[0] = el; }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#ff6b9d] opacity-[0.13] blur-[120px]"
        />
        {/* Purple blob — center */}
        <div
          ref={(el) => { blobRefs.current[1] = el; }}
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[#635bff] opacity-[0.10] blur-[100px]"
        />
        {/* Orange blob — bottom left */}
        <div
          ref={(el) => { blobRefs.current[2] = el; }}
          className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-[#f97316] opacity-[0.10] blur-[120px]"
        />
        {/* Yellow blob — right center */}
        <div
          ref={(el) => { blobRefs.current[3] = el; }}
          className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#fbbf24] opacity-[0.08] blur-[100px]"
        />
        {/* Cyan blob — bottom right */}
        <div
          ref={(el) => { blobRefs.current[4] = el; }}
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
