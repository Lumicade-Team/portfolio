const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Digital Architecture"
          className="w-full h-full object-cover opacity-20 scale-110"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0q0T3bIvfhzrSJVkr83rmc5u1YeNbPKMLccazi9UZ1eAxAhRIIXnUqBeNRWqyI0ThMWnUKz9xU8TJDIteNsg8GBhUkgOBlH2w_whXx2BxZPmoo-CsGLYVrbrebRvbNhZDLcK0qB0IkMY7kHS9QpXGDoEDxO-2CkFrf6k0KtiUNIDINagjywY_HQxFIYu2dKPgytEgjJ9a3wkd82XXBVaFk0MYoJowkiJtnwHlo4vJrwogxSxo2BD7DfTAicEQTF7MwhcgBvuYeh4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <h1 className="font-headline text-5xl md:text-8xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.9]">
          We Architect <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
            Digital Excellence.
          </span>
        </h1>
        <p className="text-on-surface-variant text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Crafting bespoke software solutions and high-performance SaaS for
          visionary brands who demand precision engineering.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="#services"
            className="w-full md:w-auto px-10 py-4 bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed font-headline text-base font-extrabold uppercase rounded-md hover:shadow-[0_0_20px_rgba(151,169,255,0.3)] transition-all duration-300"
          >
            Explore Our Work
          </a>
          <a
            href="#contact"
            className="w-full md:w-auto px-10 py-4 border border-outline-variant/30 text-on-surface font-headline text-base font-extrabold uppercase rounded-md hover:bg-white/5 transition-all duration-300"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
