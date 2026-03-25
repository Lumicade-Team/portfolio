"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-lumi-navy pt-16 md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/assets/imgs/Lumicade-Solutions-Logo-4096.svg"
                    alt="Lumicade Solutions"
                    width={140}
                    height={140}
                    className="h-[140px] w-[140px]"
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color-dark">
                  Researching. Building. Delivering.
                </p>
                <div className="flex items-center">
                  <a
                    href="mailto:hello@lumicade.dev"
                    aria-label="Email"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color-dark duration-300 hover:text-primary"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.236-8 5-8-5V6l8 5 8-5v2.236Z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lumicade-solutions-490aa838b/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color-dark duration-300 hover:text-primary"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.5 0h-15A1.5 1.5 0 000 1.5v15A1.5 1.5 0 001.5 18h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0016.5 0zM5.25 15H2.625V6.75H5.25V15zm-1.312-9A1.312 1.312 0 113.938 4.375 1.312 1.312 0 013.938 6zm11.062 9h-2.625v-4.125c0-.984-.016-2.25-1.375-2.25-1.375 0-1.584 1.078-1.584 2.188V15H6.791V6.75h2.5v1.125h.035a2.75 2.75 0 012.48-1.375c2.656 0 3.146 1.75 3.146 4.031V15z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/lumicade_dev"
                    aria-label="X (Twitter)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color-dark duration-300 hover:text-primary"
                  >
                    <svg width="18" height="18" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1199.61 0H950.09L600.01 462.09L249.91 0H0L462.09 629.13L0 1227H249.91L600.01 764.91L950.09 1227H1200L737.91 597.87L1199.61 0ZM900.09 1113.6L600.01 713.04L299.91 1113.6H149.91L600.01 484.5L1050.09 1113.6H900.09Z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/lumicade.dev/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color-dark duration-300 hover:text-primary"
                  >
                    <svg width="18" height="18" viewBox="0 0 448 448" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="448" height="448" rx="96" fill="currentColor"/>
                      <path d="M224 144c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm88-132c0 10.7-8.7 19.4-19.4 19.4-10.7 0-19.4-8.7-19.4-19.4s8.7-19.4 19.4-19.4c10.7 0 19.4 8.7 19.4 19.4z" fill="#142336"/>
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@LumicadeSolutions"
                    aria-label="YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color-dark duration-300 hover:text-primary"
                  >
                    <svg width="18" height="18" viewBox="0 0 448 448" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="448" height="448" rx="96" fill="currentColor"/>
                      <path d="M186.8 304.6l123.7-64.6c7.7-4 7.7-15.6 0-19.6l-123.7-64.6c-7.7-4-17.1 1.2-17.1 9.8v129.2c0 8.6 9.4 13.8 17.1 9.8z" fill="#142336"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-lumi-offwhite">
                  Navigation
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color-dark duration-300 hover:text-primary"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#services"
                      className="mb-4 inline-block text-base text-body-color-dark duration-300 hover:text-primary"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#products"
                      className="mb-4 inline-block text-base text-body-color-dark duration-300 hover:text-primary"
                    >
                      Products
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-lumi-offwhite">
                  Company
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/#about"
                      className="mb-4 inline-block text-base text-body-color-dark duration-300 hover:text-primary"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="mb-4 inline-block text-base text-body-color-dark duration-300 hover:text-primary"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contact"
                      className="mb-4 inline-block text-base text-body-color-dark duration-300 hover:text-primary"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-lumi-offwhite">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/#contact"
                      className="mb-4 inline-block text-base text-body-color-dark duration-300 hover:text-primary"
                    >
                      Open Support Ticket
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color-dark duration-300 hover:text-primary"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color-dark duration-300 hover:text-primary"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-lumi-mutednav to-transparent"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color-dark">
              &copy; {new Date().getFullYear()} Lumicade Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
