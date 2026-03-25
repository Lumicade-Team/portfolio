import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const products = [
  {
    id: 1,
    title: "Lumicade OCR",
    description: "Receipt and document data extraction API — fast, accurate, and developer-friendly.",
    available: true,
  },
  {
    id: 2,
    title: "Coming Soon",
    description: "A new productivity tool for teams is currently in development. Stay tuned for updates.",
    available: false,
  },
  {
    id: 3,
    title: "Coming Soon",
    description: "Another microservice is on the roadmap. Subscribe to our newsletter for early access.",
    available: false,
  },
];

export default function Products() {
  return (
    <section id="products" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Own Suite of Tools"
          paragraph="Beyond client work, we build and maintain proprietary SaaS products available by subscription."
          center
          mb="80px"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl border border-lumi-mutednav bg-dark p-8 shadow-card transition-all duration-300 hover:border-teal"
            >
              <h3 className="mb-3 text-xl font-bold text-lumi-offwhite">
                {product.title}
              </h3>
              <p className="mb-6 text-base leading-relaxed text-body-color-dark">
                {product.description}
              </p>
              {product.available ? (
                <Link
                  href="/contact"
                  className="inline-block text-base font-semibold text-teal transition hover:text-teal/80"
                >
                  Learn More &rarr;
                </Link>
              ) : (
                <span className="inline-block text-base font-medium text-lumi-mutednav">
                  In Development
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
