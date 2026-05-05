"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const products = [
  {
    name: "LumiAI",
    description:
      "LumiAI delivers GPU-accelerated video analytics — real-time detection of people, vehicles, and objects across all your cameras with Lumicade.",
    href: "https://lumiai.my/",
    src: "/images/products/lumi-ai.jpeg",
    color: "#172141",
    logo: "/images/products/logo-lumiai.png",
  },
  {
    name: "GajiSaya",
    description:
      "GajiSaya helps Malaysian gig riders aggregate income, track expenses, and estimate tax obligations in real-time with Lumicade.",
    href: "https://gajisaya.me/en",
    src: "/images/products/gaji-saya.png",
    color: "#de7348",
    logo: "/images/products/logo-gajisaya.png",
  },
  {
    name: "Bhumi",
    description:
      "Bhumi powers interactive 360° virtual tours for properties, venues, and campuses — built and deployed with Lumicade.",
    href: "https://bhumi.my/",
    src: "/images/products/bhumi.png",
    color: "#f8f9fa",
    logo: "/images/products/logo-bhumi.png",
  },
];

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex((r) => r === entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6, root: container },
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-left mb-20">
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface mb-6">
            Proprietary Products
          </h2>
        </div>
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-5 -mx-6 px-6 pb-2 [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible"
        >
          {products.map((product, index) => (
            <div
              key={product.name}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="w-[85vw] flex-shrink-0 snap-center md:w-auto group relative z-0 hover:z-10 transition-transform duration-300 ease-out hover:scale-x-[1.03] origin-center"
            >
              <div
                className={`relative overflow-hidden rounded aspect-[4/5] transition-transform duration-300 ease-out md:scale-100 ${
                  index === activeIndex ? "scale-100" : "scale-[0.88]"
                }`}
                style={
                  product.color ? { backgroundColor: product.color } : undefined
                }
              >
                {product.logo ? (
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <Image
                      alt={product.name}
                      src={product.logo}
                      width={240}
                      height={240}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ) : (
                  <Image
                    alt={product.name}
                    fill
                    className="object-cover"
                    src={product.src}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <span className="text-white font-medium text-lg">
                    {product.name}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-on-surface-variant text-sm leading-relaxed mb-3">
                  {product.description}
                </p>
                <a
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:gap-3 transition-all duration-200 ease-out"
                  href={product.href}
                >
                  Discover {product.name} <ArrowRightIcon size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
