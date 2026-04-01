import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Binary globe background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <svg
          className="absolute w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] opacity-[0.12]"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="binary-grid"
              width="420"
              height="260"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(-8)"
            >
              <text x="0" y="32" fill="#97a9ff" fontFamily="monospace" fontSize="28" letterSpacing="6">10110010 01001101</text>
              <text x="70" y="74" fill="#6dddff" fontFamily="monospace" fontSize="28" letterSpacing="6">01001011 10100110</text>
              <text x="15" y="116" fill="#a68cff" fontFamily="monospace" fontSize="28" letterSpacing="6">11010010 01101001</text>
              <text x="100" y="158" fill="#97a9ff" fontFamily="monospace" fontSize="28" letterSpacing="6">00101101 11010100</text>
              <text x="35" y="200" fill="#6dddff" fontFamily="monospace" fontSize="28" letterSpacing="6">10010110 01011010</text>
              <text x="85" y="242" fill="#a68cff" fontFamily="monospace" fontSize="28" letterSpacing="6">01100101 10110011</text>
            </pattern>
            <radialGradient id="globe-fade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="60%" stopColor="white" stopOpacity="0.8" />
              <stop offset="85%" stopColor="white" stopOpacity="0.15" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="globe-mask">
              <rect width="1000" height="1000" fill="url(#globe-fade)" />
            </mask>
          </defs>
          <g mask="url(#globe-mask)">
            <rect width="1000" height="1000" fill="url(#binary-grid)" />
          </g>
          <ellipse cx="500" cy="500" rx="420" ry="420" fill="none" stroke="#97a9ff" strokeWidth="0.5" opacity="0.3" />
          <ellipse cx="500" cy="500" rx="420" ry="180" fill="none" stroke="#6dddff" strokeWidth="0.5" opacity="0.2" />
          <ellipse cx="500" cy="500" rx="180" ry="420" fill="none" stroke="#a68cff" strokeWidth="0.5" opacity="0.2" />
          <ellipse cx="500" cy="500" rx="300" ry="420" fill="none" stroke="#97a9ff" strokeWidth="0.3" opacity="0.15" />
          <ellipse cx="500" cy="500" rx="420" ry="300" fill="none" stroke="#6dddff" strokeWidth="0.3" opacity="0.15" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/30 to-background" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
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
          <Button variant="gradient" size="lg" asChild>
            <a href="#services" className="w-full md:w-auto px-10 py-4 text-base">
              Explore Our Work
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="#contact"
              className="w-full md:w-auto px-10 py-4 border-outline-variant/30 text-on-surface font-headline text-base font-extrabold uppercase hover:bg-white/5"
            >
              Let&apos;s Talk
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
