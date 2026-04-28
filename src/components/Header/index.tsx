"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { List } from "@phosphor-icons/react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import menuData from "./menuData";

const Header = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  // Track active section based on scroll position
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = [
      "home",
      "services",
      "products",
      "process",
      "testimonials",
    ];

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
      setSheetOpen(false);

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
            src="/images/logo-with-title.png"
            alt="Lumicade Solutions"
            width={84}
            height={84}
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

          {/* Mobile Sheet */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Mobile Menu"
                className="lg:hidden text-on-surface"
              >
                <List size={28} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-surface-container-high/95 backdrop-blur-xl border-outline-variant/10 w-72"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <ul className="flex flex-col py-8 space-y-6">
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
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
