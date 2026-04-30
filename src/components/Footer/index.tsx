"use client";
import Image from "next/image";
import Link from "next/link";
import {
  EnvelopeSimple,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Phone,
  ThreadsLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-outline-variant/15">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <Link href="/" className="mb-4 inline-flex">
            <Image
              src="/images/logo-with-title.png"
              alt="Lumicade Solutions"
              width={240}
              height={140}
            />
          </Link>
         
          <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
            Engineering with precision. Designing with purpose. Building the
            future of enterprise software.
          </p>
          <div className="space-y-2">
            <a
              href="mailto:info@lumicade.dev"
              className="font-body inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              <EnvelopeSimple size={18} weight="duotone" aria-hidden="true" />
              info@lumicade.dev
            </a>
            <a
              href="tel:+601124104917"
              className="font-body inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              <Phone size={18} weight="duotone" aria-hidden="true" />
              +60 11-2410 4917
            </a>
          </div>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-on-surface font-bold text-sm uppercase mb-6 tracking-widest">
            Navigation
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/#services"
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#products"
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/#process"
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-on-surface font-bold text-sm uppercase mb-6 tracking-widest">
            Legal
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/legal#privacy-policy"
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/legal#terms-of-service"
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/legal#cookie-policy"
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-on-surface font-bold text-sm uppercase mb-6 tracking-widest">
            Connect
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                href="https://www.linkedin.com/in/lumicade-solutions-490aa838b"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                <LinkedinLogo size={18} weight="duotone" aria-hidden="true" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.threads.com/@lumicade.dev?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                <ThreadsLogo size={18} weight="duotone" aria-hidden="true" />
                Threads
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=601124104917"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                <WhatsappLogo size={18} weight="duotone" aria-hidden="true" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lumicade.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                <InstagramLogo size={18} weight="duotone" aria-hidden="true" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61588829380466"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                <FacebookLogo size={18} weight="duotone" aria-hidden="true" />
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Lumicade-Team"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                <GithubLogo size={18} weight="duotone" aria-hidden="true" />
                GitHub
              </a>
            </li>
           
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-outline-variant/10 text-center md:text-left">
        <p className="font-body text-xs text-on-surface-variant opacity-80 hover:opacity-100 transition-all">
          &copy; {new Date().getFullYear()} Lumicade Solutions. Engineering with
          Precision. JM1042046-K
        </p>
      </div>
    </footer>
  );
};

export default Footer;
