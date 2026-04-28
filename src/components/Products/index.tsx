"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import Image from "next/image";

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
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 bg-surface-container-high rounded-xl p-4 shadow-2xl relative overflow-hidden group">
              <Image
                alt="LumiAI"
                width="1624"
                height="1023"
                className="rounded-lg border border-outline-variant/20 group-hover:scale-105 transition-transform duration-700 w-full"
                src="/images/products/lumi-ai.jpeg"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-headline text-3xl md:text-4xl font-bold mb-6">
                LumiAI
              </h3>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                GPU-accelerated video analytics that detects people, vehicles,
                and objects in real time — across all your cameras. Powered by
                AI object detection and multi-object tracking, so you get
                instant alerts without watching screens all day.
              </p>
              <a
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300"
                href="https://lumiai.my/"
              >
                Learn More
                <ArrowRightIcon size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 order-2 md:order-1">
              <h3 className="font-headline text-3xl md:text-4xl font-bold mb-6">
                GajiSaya
              </h3>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                A web and mobile app for Malaysian Grab, Foodpanda, Lalamove,
                and Shopee Food riders/drivers to automatically aggregate income
                from multiple platforms, track business expenses, and estimate
                their LHDN tax obligation in real-time — so they&apos;re never
                blindsided at year-end.
              </p>
              <a
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300"
                href="https://gajisaya.me/en"
              >
                Learn More
                <ArrowRightIcon size={20} />
              </a>
            </div>
            <div className="flex-1 order-1 md:order-2 bg-surface-container-high rounded-xl p-4 shadow-2xl relative overflow-hidden group">
              <Image
                alt="GajiSaya Dashboard"
                width="1624"
                height="1023"
                className="rounded-lg border border-outline-variant/20 group-hover:scale-105 transition-transform duration-700 w-full"
                src="/images/products/gaji-saya.png"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 bg-surface-container-high rounded-xl p-4 shadow-2xl relative overflow-hidden group">
              <Image
                alt="Bhumi"
                width="1624"
                height="1023"
                className="rounded-lg border border-outline-variant/20 group-hover:scale-105 transition-transform duration-700 w-full"
                src="/images/products/bhumi.png"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-headline text-3xl md:text-4xl font-bold mb-6">
                Bhumi
              </h3>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                A web-based interactive virtual tour builder. Users can upload
                360° panoramic scenes, add interactive hotspots, and create
                navigable tours — similar to Google Street View but for custom
                spaces (property, venues, campus tours).
              </p>
              <a
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300"
                href="https://bhumi.my/"
              >
                Learn More
                <ArrowRightIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
