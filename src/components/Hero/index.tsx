const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Binary pattern background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-[0.07]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="binary-grid"
              width="480"
              height="280"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(-5)"
            >
              <text x="0" y="36" fill="#97a9ff" fontFamily="monospace" fontSize="32" letterSpacing="8">10110010 01001101</text>
              <text x="80" y="84" fill="#6dddff" fontFamily="monospace" fontSize="32" letterSpacing="8">01001011 10100110</text>
              <text x="20" y="132" fill="#a68cff" fontFamily="monospace" fontSize="32" letterSpacing="8">11010010 01101001</text>
              <text x="120" y="180" fill="#97a9ff" fontFamily="monospace" fontSize="32" letterSpacing="8">00101101 11010100</text>
              <text x="40" y="228" fill="#6dddff" fontFamily="monospace" fontSize="32" letterSpacing="8">10010110 01011010</text>
              <text x="100" y="272" fill="#a68cff" fontFamily="monospace" fontSize="32" letterSpacing="8">01100101 10110011</text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#binary-grid)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/8 blur-[150px] rounded-full" />
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
