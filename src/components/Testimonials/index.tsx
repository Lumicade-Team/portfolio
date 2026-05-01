"use client";

import { CaretLeft, CaretRight, Quotes } from "@phosphor-icons/react";

const Testimonials = () => {
  return (
    <>
      {/* Dark "backbone" section — Stripe-style dark mid-page section */}
      <section className="py-32 bg-[#0a2540] overflow-hidden relative">
        {/* Subtle gradient accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-tight">
                The backbone of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#635bff] to-[#06b6d4]">
                  Digital Malaysia.
                </span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                From logistics to fintech, from mobile to enterprise — Lumicade
                powers the critical software infrastructure that ambitious
                Malaysian businesses rely on.
              </p>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                  <div className="font-headline text-4xl font-bold text-white mb-2">40+</div>
                  <div className="text-white/50 text-sm uppercase tracking-widest">Clients Served</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                  <div className="font-headline text-4xl font-bold text-white mb-2">6+</div>
                  <div className="text-white/50 text-sm uppercase tracking-widest">Industry Domains</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                  <div className="font-headline text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-white/50 text-sm uppercase tracking-widest">On-time Delivery</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                  <div className="font-headline text-4xl font-bold text-white mb-2">24h</div>
                  <div className="text-white/50 text-sm uppercase tracking-widest">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section id="testimonials" className="py-32 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface mb-8">
                Trusted by Visionaries
              </h2>
              <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
                We don&apos;t just build software; we build partnerships that
                redefine industries. Here is what our partners say about the
                Lumicade standard.
              </p>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors duration-sm ease-out-stripe text-on-surface-variant hover:text-on-surface">
                  <CaretLeft size={20} />
                </button>
                <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors duration-sm ease-out-stripe text-on-surface-variant hover:text-on-surface">
                  <CaretRight size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-10 rounded-xl border border-outline-variant shadow-card">
                <Quotes size={36} className="text-primary mb-6" weight="fill" />
                <p className="text-on-surface text-lg italic mb-8 leading-relaxed">
                  &ldquo;Lumicade Solutions didn&apos;t just deliver a platform;
                  they delivered an evolution. Their precision and attention to
                  detail are unparalleled in the industry.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden border border-outline-variant">
                    <img
                      alt="Client"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXbBR_artbzYUmR_hkI8OxQoVk-Pb2c_RWHlr50enG6OqnTKHjy0BIOx0xGvfgnlXAjKfriGxaBDVwJ_EZxV67bhMMU18xBEpBK7YbTd8hUNNzVc9iakHw8W7reInw5wkLSZ9MspVa9xvMdFowzw5NadpGrR7ZaUJ1SLg8ID3gS5Ieboa5m7e0bTtFDHG9QwYDKfIl91YoQD1DWMuLB09LDLw-ThFEOBCJBkqD7mXwxCNQsyYW7oFeQK0Eb-o-leYzRcfC5ye2o4M"
                    />
                  </div>
                  <div>
                    <h5 className="font-headline font-bold text-on-surface text-sm">
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
    </>
  );
};

export default Testimonials;
