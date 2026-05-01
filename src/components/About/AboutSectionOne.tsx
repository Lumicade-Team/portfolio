import { stats } from "./aboutData";
import ProcessSteps from "./ProcessSteps";

const AboutSectionOne = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section id="about" className="relative isolate overflow-hidden bg-lumi-navy pt-[160px] pb-24 md:pb-32">
        {/* Background layers */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/[0.06] blur-[120px]" />
          <div className="absolute -bottom-40 -left-32 h-[500px] w-[500px] rounded-full bg-teal/[0.05] blur-[100px]" />
          <svg className="absolute inset-0 h-full w-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="aboutGrid" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#F4F7FF" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#aboutGrid)" />
          </svg>
          <div className="absolute top-0 left-[20%] h-full w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
          <div className="absolute top-0 right-[25%] h-full w-px bg-gradient-to-b from-transparent via-teal/10 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left — story */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-teal" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                  About Us
                </span>
              </div>

              <h1 className="mb-8 text-4xl font-light leading-[1.1] text-lumi-offwhite sm:text-5xl md:text-[52px]">
                Software built with
                <span className="relative ml-2 inline-block">
                  <span className="relative z-10">intent</span>
                  <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-primary/30 md:bottom-2 md:h-4" />
                </span>
              </h1>

              <p className="mb-6 max-w-[520px] text-lg leading-[1.8] text-body-color-dark/80">
                Lumicade Solutions is a Malaysia-based software house and SaaS provider. We don&apos;t just write code — we research your domain, design with purpose, build with precision, and deliver systems that scale.
              </p>

              <p className="max-w-[520px] text-base leading-[1.8] text-body-color-dark/60">
                From custom web platforms and mobile apps to AI-powered automation and our own subscription-based microservices — every project gets the same rigour, regardless of size.
              </p>
            </div>

            {/* Right — stats grid */}
            <div className="flex items-center">
              <div className="grid w-full grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`rounded-lg border p-7 transition-all duration-md ease-out-stripe hover:border-primary/40 ${
                      i % 2 === 0
                        ? "border-lumi-mutednav/40 bg-lumi-mutednav/10"
                        : "border-primary/20 bg-primary/[0.04]"
                    }`}
                  >
                    <p className={`mb-1 text-3xl font-light tracking-normal ${
                      i % 2 === 0 ? "text-teal" : "text-primary"
                    }`}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-body-color-dark/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      <ProcessSteps />
    </>
  );
};

export default AboutSectionOne;
