import { ArrowRight } from "@phosphor-icons/react";

const Products = () => {
  return (
    <section id="products" className="py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-4">
            The Suite
          </span>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
            Proprietary Products
          </h2>
        </div>

        <div className="space-y-32">
          {/* Product 1 */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 order-2 md:order-1">
              <h3 className="font-headline text-3xl md:text-4xl font-bold mb-6">
                Lumina Analytics
              </h3>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                Real-time predictive modeling for enterprise infrastructure.
                Lumina provides deep insights into your cloud ecosystem with
                unmatched precision.
              </p>
              <a
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300"
                href="#"
              >
                Learn More
                <ArrowRight size={20} />
              </a>
            </div>
            <div className="flex-1 order-1 md:order-2 bg-surface-container-high rounded-xl p-4 shadow-2xl relative overflow-hidden group">
              <img
                alt="Lumina Analytics Interface"
                className="rounded-lg border border-outline-variant/20 group-hover:scale-105 transition-transform duration-700 w-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUhAVB4dxeUKnPan18sQb0GJ169j9WuzAU9rktcmz5eaXHQ5uXGaWtKvffkLBPtMGi_sDqPD-Hg4HMIk9Ve6_kuKqXXhe1c9Md1yy6FLYaoq_6pgjpPcBXr7z4WuOATljEyZUKafXCB0mrXrLsOYikNW1rngKDEZuemgsi-8O06K5nDCreWLTdlObPT4CpVwpRnMrgic0hJUgRUQq8pTWRIllGoZcq4ViSwCtBp97o4Q2SAdDEhitmGtRIRND9XSgnU1bmIW2RRq8"
              />
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 bg-surface-container-high rounded-xl p-4 shadow-2xl relative overflow-hidden group">
              <img
                alt="Cadence Workflow"
                className="rounded-lg border border-outline-variant/20 group-hover:scale-105 transition-transform duration-700 w-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApOPWgoKZ9QnN42fmVyESQGAeZxlBYkoh1l-fqMdzaMzZzHpfeanKt73mfxoL3jJT1WHjYVCSM68kVgNPtko4ZLQzwhEAaiszGSSpiHIlL4SPLuewSP5oeqStyJwu2n2B_xY3EuzFT4WZkmo3uXc-Im4VUeCjdE0aFkkasfRSpm1I9FZu8ybYlCWmFstkxUT6O1ovOix860daMjSWQlm4--PVHIWVOdUdjt_DZnGy7887oOlfHYo5ZvW8jHTG_g_WCJmVtptXChpk"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-headline text-3xl md:text-4xl font-bold mb-6">
                Cadence Flow
              </h3>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                The ultimate automation engine for creative workflows.
                Synchronize cross-functional teams with deterministic logic and
                intuitive design.
              </p>
              <a
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300"
                href="#"
              >
                Learn More
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
