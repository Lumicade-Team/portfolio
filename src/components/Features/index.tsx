"use client";

import { Terminal, Brain, Stack } from "@phosphor-icons/react";

const Features = () => {
  return (
    <section id="services" className="py-32 bg-surface-container-low relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface mb-6">
              Our Services
            </h2>
            <p className="text-on-surface-variant text-lg">
              Engineering sophisticated tools for the modern digital landscape.
            </p>
          </div>
          <div className="h-[1px] flex-grow bg-outline-variant/50 mb-4 hidden md:block mx-12" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="group p-10 rounded-xl bg-white border border-outline-variant shadow-card hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-lg ease-smooth hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors duration-sm ease-out-stripe">
              <Terminal size={28} className="text-primary" weight="duotone" />
            </div>
            <h3 className="font-headline text-xl font-bold text-on-surface mb-4">
              Software Development
            </h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Scalable, secure, and robust custom architectures built with the
              world&apos;s most modern tech stacks.
            </p>
          </div>

          {/* Service 2 */}
          <div className="group p-10 rounded-xl bg-white border border-outline-variant shadow-card hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-lg ease-smooth hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-tertiary/10 flex items-center justify-center mb-8 group-hover:bg-tertiary/20 transition-colors duration-sm ease-out-stripe">
              <Brain size={28} className="text-tertiary" weight="duotone" />
            </div>
            <h3 className="font-headline text-xl font-bold text-on-surface mb-4">
              AI &amp; Automation
            </h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Intelligent workflows and custom machine learning models that
              transform operational efficiency.
            </p>
          </div>

          {/* Service 3 */}
          <div className="group p-10 rounded-xl bg-white border border-outline-variant shadow-card hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-lg ease-smooth hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:bg-secondary/20 transition-colors duration-sm ease-out-stripe">
              <Stack size={28} className="text-secondary" weight="duotone" />
            </div>
            <h3 className="font-headline text-xl font-bold text-on-surface mb-4">
              Product Design
            </h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              User-centric interfaces designed with an editorial eye for
              clarity, function, and brand distinction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
