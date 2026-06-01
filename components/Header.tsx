"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "Collection", href: "/#collection", id: "collection" },
  { label: "About", href: "/#about", id: "about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  const isActive = (linkId: string) => {
    if (pathname !== "/") return false;
    return activeSection === linkId;
  };

  useEffect(() => {
    // Only track scroll/observer when we are on the homepage
    if (pathname !== "/") return;

    const sections = ["home", "collection", "about"];
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -40% 0px", // Trigger when the section occupies the center of the viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* Background glassmorphism backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-foreground/5 pointer-events-none" />
      
      <div className="relative mx-auto w-full max-w-6xl px-6 pt-4 pb-3">
        <div className="hidden md:grid grid-cols-[1.2fr_auto_1fr] items-center gap-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center text-foreground group w-fit">
            <div className="relative h-20 w-64 lg:h-24 lg:w-80 overflow-hidden flex items-center">
              <motion.img
                src="/images/white%20bg-main.png"
                alt="Chez Moi Logo"
                className="h-full w-full object-contain object-left cursor-pointer transition-transform duration-300 group-hover:scale-[1.02]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <nav
            aria-label="Primary"
            className="rounded-full border border-foreground/10 bg-background/50 backdrop-blur-sm px-8 py-3"
          >
            <ul className="flex items-center gap-8 text-[11px] font-medium uppercase tracking-[0.3em] text-foreground">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    className={
                      isActive(link.id)
                        ? "rounded-full bg-foreground px-4 py-2 font-semibold text-background transition-colors"
                        : "transition-colors hover:text-foreground/70"
                    }
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Column */}
          <div className="justify-self-end flex items-center">
            <a
              href="https://wa.me/0000000000"
              className="rounded-full border border-accent px-5 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-foreground transition-colors hover:bg-accent/10"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Mobile View Header */}
        <div className="flex items-center justify-between md:hidden relative z-10">
          <Link href="/" className="flex items-center text-foreground group">
            <div className="relative h-14 w-44 overflow-hidden flex items-center">
              <img
                src="/images/white%20bg-main.png"
                alt="Chez Moi Logo"
                className="h-full w-full object-contain object-left"
              />
            </div>
          </Link>
          
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-nav"
              className="mt-4 rounded-2xl border border-foreground/10 bg-background/95 backdrop-blur-md px-6 py-5 md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <nav aria-label="Mobile">
                <ul className="flex flex-col gap-4 text-sm font-medium uppercase tracking-[0.28em]">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        className={
                          isActive(link.id)
                            ? "inline-flex rounded-full bg-foreground px-4 py-2 font-semibold text-background transition-colors"
                            : "transition-colors hover:text-foreground/70"
                        }
                        href={link.href}
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/0000000000"
                  className="mt-6 inline-flex rounded-full border border-accent px-5 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-foreground transition-colors hover:bg-accent/10"
                >
                  WhatsApp
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
