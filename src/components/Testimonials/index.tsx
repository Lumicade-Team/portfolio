"use client";

import { CaretLeft, CaretRight, Quotes } from "@phosphor-icons/react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Trusted by Visionaries
            </h2>
            <p className="text-on-surface-variant text-lg mb-12">
              We don&apos;t just build software; we build partnerships that
              redefine industries. Here is what our partners say about the
              Lumicade standard.
            </p>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-white/5 transition-colors">
                <CaretLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-white/5 transition-colors">
                <CaretRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-surface-container-high p-10 rounded-xl glass-glow border border-outline-variant/10">
              <Quotes size={40} className="text-primary mb-6" weight="fill" />
              <p className="text-on-surface text-xl italic mb-8 font-light leading-relaxed">
                &ldquo;Lumicade Solutions didn&apos;t just deliver a platform;
                they delivered an evolution. Their precision and attention to
                detail are unparalleled in the industry.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-outline-variant/20 flex items-center justify-center overflow-hidden">
                  <img
                    alt="Client"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXbBR_artbzYUmR_hkI8OxQoVk-Pb2c_RWHlr50enG6OqnTKHjy0BIOx0xGvfgnlXAjKfriGxaBDVwJ_EZxV67bhMMU18xBEpBK7YbTd8hUNNzVc9iakHw8W7reInw5wkLSZ9MspVa9xvMdFowzw5NadpGrR7ZaUJ1SLg8ID3gS5Ieboa5m7e0bTtFDHG9QwYDKfIl91YoQD1DWMuLB09LDLw-ThFEOBCJBkqD7mXwxCNQsyYW7oFeQK0Eb-o-leYzRcfC5ye2o4M"
                  />
                </div>
                <div>
                  <h5 className="font-headline font-bold text-on-surface">
                    Julian Thorne
                  </h5>
                  <p className="text-on-surface-variant text-xs uppercase tracking-widest">
                    CTO, Veridian Global
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
