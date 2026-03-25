import Link from "next/link";
import HeroDecorations from "./HeroDecorations";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-lumi-navy md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-lumi-navy dark:text-lumi-offwhite sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                We Build. We Automate. We Scale.
              </h1>
              <p className="mb-12 text-base leading-relaxed! text-body-color dark:text-body-color-dark sm:text-lg md:text-xl max-w-[680px] mx-auto">
                Lumicade Solutions is a full-service software house and SaaS provider. From custom web systems and mobile apps to AI-powered workflows and our own subscription-based microservices — we turn ideas into production-ready solutions.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/#products"
                  className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-lumi-offwhite duration-300 ease-in-out hover:bg-primary/80"
                >
                  View Our Work
                </Link>
                <Link
                  href="/contact"
                  className="inline-block rounded-lg border border-primary px-8 py-4 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary hover:text-lumi-offwhite dark:text-lumi-offwhite dark:border-lumi-offwhite dark:hover:bg-primary dark:hover:border-primary"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroDecorations />
    </section>
  );
};

export default Hero;
