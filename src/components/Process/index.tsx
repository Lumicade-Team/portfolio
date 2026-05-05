const Process = () => {
  return (
    <section id="process" className="py-32 bg-surface-container-low">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-left mb-20">
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface mb-6">
            Our Process
          </h2>
          <p className="text-on-surface-variant text-lg">
            A disciplined approach to solving complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant to-transparent" />

          {/* Step 1 */}
          <div className="relative bg-white p-8 rounded-xl border border-outline-variant shadow-sm group hover:-translate-y-2 transition-all duration-md ease-out-stripe">
            <div className="text-5xl font-headline font-black text-outline-variant/40 mb-6 group-hover:text-primary/30 transition-colors duration-sm ease-out-stripe">
              01
            </div>
            <h4 className="font-headline text-xl font-bold text-on-surface mb-3">
              Discovery
            </h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Defining goals, mapping users, and establishing technical
              constraints.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white p-8 rounded-xl border border-outline-variant shadow-sm group hover:-translate-y-2 transition-all duration-md ease-out-stripe">
            <div className="text-5xl font-headline font-black text-outline-variant/40 mb-6 group-hover:text-tertiary/30 transition-colors duration-sm ease-out-stripe">
              02
            </div>
            <h4 className="font-headline text-xl font-bold text-on-surface mb-3">
              Design
            </h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Architecting the visual and structural blueprint of the
              experience.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white p-8 rounded-xl border border-outline-variant shadow-sm group hover:-translate-y-2 transition-all duration-md ease-out-stripe">
            <div className="text-5xl font-headline font-black text-outline-variant/40 mb-6 group-hover:text-secondary/30 transition-colors duration-sm ease-out-stripe">
              03
            </div>
            <h4 className="font-headline text-xl font-bold text-on-surface mb-3">
              Develop
            </h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Clean, tested code written for high-performance and future
              scaling.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative bg-white p-8 rounded-xl border border-outline-variant shadow-sm group hover:-translate-y-2 transition-all duration-md ease-out-stripe">
            <div className="text-5xl font-headline font-black text-outline-variant/40 mb-6 group-hover:text-primary/30 transition-colors duration-sm ease-out-stripe">
              04
            </div>
            <h4 className="font-headline text-xl font-bold text-on-surface mb-3">
              Deploy
            </h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Strategic launch with continuous monitoring and optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
