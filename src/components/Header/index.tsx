"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();

  // Track active section based on scroll position
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = ["home", "services", "products", "process", "testimonials"];

    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Handle nav link clicks — smooth scroll for anchor links
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
      setNavbarOpen(false);

      if (path.startsWith("/#")) {
        const hash = path.slice(2);

        if (pathname === "/") {
          e.preventDefault();
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    },
    [pathname],
  );

  // Check if a menu item is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/" && (!activeSection || activeSection === "home");
    }
    if (path.startsWith("/#")) {
      return pathname === "/" && activeSection === path.slice(2);
    }
    return pathname === path;
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-high/60 backdrop-blur-xl shadow-glass">
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/imgs/Lumicade-Solutions-Logo-4096.svg"
            alt="Lumicade Solutions"
            width={60}
            height={60}
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center space-x-10">
          {menuData.map((menuItem) => (
            <li key={menuItem.id}>
              <Link
                href={menuItem.path!}
                onClick={(e) => handleNavClick(e, menuItem.path!)}
                className={`font-headline text-sm tracking-wide font-medium uppercase transition-colors ${
                  isActive(menuItem.path!)
                    ? "text-on-surface"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {menuItem.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + Mobile menu button */}
        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="hidden lg:inline-block px-6 py-2 bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed font-headline text-sm font-bold uppercase rounded-md active:scale-90 transition-transform"
          >
            Get Started
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label="Mobile Menu"
            className="lg:hidden text-on-surface"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`lg:hidden bg-surface-container-high/90 backdrop-blur-xl border-t border-outline-variant/10 overflow-hidden transition-all duration-300 ${
          navbarOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-4">
          {menuData.map((menuItem) => (
            <li key={menuItem.id}>
              <Link
                href={menuItem.path!}
                onClick={(e) => handleNavClick(e, menuItem.path!)}
                className={`font-headline text-sm tracking-wide font-medium uppercase transition-colors ${
                  isActive(menuItem.path!)
                    ? "text-on-surface"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {menuItem.title}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="inline-block px-6 py-2 bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed font-headline text-sm font-bold uppercase rounded-md active:scale-90 transition-transform"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
