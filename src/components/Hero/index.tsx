import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white"
    >
      {/* Rainbow gradient mesh background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Pink blob — top right */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#ff6b9d] opacity-[0.13] blur-[120px]" />
        {/* Purple blob — center */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[#635bff] opacity-[0.10] blur-[100px]" />
        {/* Orange blob — bottom left */}
        <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-[#f97316] opacity-[0.10] blur-[120px]" />
        {/* Yellow blob — right center */}
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#fbbf24] opacity-[0.08] blur-[100px]" />
        {/* Cyan blob — bottom right */}
        <div className="absolute bottom-16 right-1/4 w-[350px] h-[350px] rounded-full bg-[#06b6d4] opacity-[0.07] blur-[90px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-on-surface mb-8 leading-[1.05]">
          We Build the Software{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
            Behind the Vision.
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
