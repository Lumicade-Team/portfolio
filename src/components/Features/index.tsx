const Features = () => {
  return (
    <section id="services" className="py-32 bg-surface-container-low relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Our Services
            </h2>
            <p className="text-on-surface-variant text-lg">
              Engineering sophisticated tools for the modern digital landscape.
            </p>
          </div>
          <div className="h-[1px] flex-grow bg-outline-variant/20 mb-4 hidden md:block mx-12" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="group p-10 rounded-xl bg-surface-container-high/40 backdrop-blur-md glass-glow border border-outline-variant/10 hover:bg-surface-container-highest/60 transition-all duration-500">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">
                terminal
              </span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">
              Software Development
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              Scalable, secure, and robust custom architectures built with the
              world&apos;s most modern tech stacks.
            </p>
          </div>

          {/* Service 2 */}
          <div className="group p-10 rounded-xl bg-surface-container-high/40 backdrop-blur-md glass-glow border border-outline-variant/10 hover:bg-surface-container-highest/60 transition-all duration-500">
            <div className="w-14 h-14 rounded-full bg-tertiary/10 flex items-center justify-center mb-8 group-hover:bg-tertiary/20 transition-colors">
              <span className="material-symbols-outlined text-tertiary text-3xl">
                psychology
              </span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">
              AI &amp; Automation
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              Intelligent workflows and custom machine learning models that
              transform operational efficiency.
            </p>
          </div>

          {/* Service 3 */}
          <div className="group p-10 rounded-xl bg-surface-container-high/40 backdrop-blur-md glass-glow border border-outline-variant/10 hover:bg-surface-container-highest/60 transition-all duration-500">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-8 group-hover:bg-secondary/20 transition-colors">
              <span className="material-symbols-outlined text-secondary text-3xl">
                layers
              </span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">
              Product Design
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
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
