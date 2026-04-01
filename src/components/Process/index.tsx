const Process = () => {
  return (
    <section id="process" className="py-32 bg-surface-container-lowest">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Our Process
          </h2>
          <p className="text-on-surface-variant text-lg">
            A disciplined approach to solving complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent" />

          {/* Step 1 */}
          <div className="relative bg-surface-container-high p-8 rounded-xl border border-outline-variant/10 group hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl font-headline font-black text-outline-variant/20 mb-6 group-hover:text-primary/20 transition-colors">
              01
            </div>
            <h4 className="font-headline text-xl font-bold mb-3">Discovery</h4>
            <p className="text-on-surface-variant text-sm">
              Defining goals, mapping users, and establishing technical
              constraints.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-surface-container-high p-8 rounded-xl border border-outline-variant/10 group hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl font-headline font-black text-outline-variant/20 mb-6 group-hover:text-tertiary/20 transition-colors">
              02
            </div>
            <h4 className="font-headline text-xl font-bold mb-3">Design</h4>
            <p className="text-on-surface-variant text-sm">
              Architecting the visual and structural blueprint of the
              experience.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-surface-container-high p-8 rounded-xl border border-outline-variant/10 group hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl font-headline font-black text-outline-variant/20 mb-6 group-hover:text-secondary/20 transition-colors">
              03
            </div>
            <h4 className="font-headline text-xl font-bold mb-3">Develop</h4>
            <p className="text-on-surface-variant text-sm">
              Clean, tested code written for high-performance and future
              scaling.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative bg-surface-container-high p-8 rounded-xl border border-outline-variant/10 group hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl font-headline font-black text-outline-variant/20 mb-6 group-hover:text-primary-dim/20 transition-colors">
              04
            </div>
            <h4 className="font-headline text-xl font-bold mb-3">Deploy</h4>
            <p className="text-on-surface-variant text-sm">
              Strategic launch with continuous monitoring and optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
