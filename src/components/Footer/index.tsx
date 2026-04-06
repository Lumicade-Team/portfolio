"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-outline-variant/15">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <div className="text-lg font-headline font-bold text-on-surface mb-6 uppercase">
            Lumicade Solutions
          </div>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
            Engineering with precision. Designing with purpose. Building the
            future of enterprise software.
          </p>
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
                href="/"
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/"
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
                href="https://www.linkedin.com/in/lumicade-solutions-490aa838b/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Lumicade-Team"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://x.com/lumicade_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                X (Twitter)
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
