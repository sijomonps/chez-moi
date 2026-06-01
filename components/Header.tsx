"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Collection", href: "/collection" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    // Sync React state with documentElement class (pre-set by blocking head script)
    if (document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Background glassmorphism backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-foreground/5 pointer-events-none" />
      
      <div className="relative mx-auto w-full max-w-6xl px-6 pt-5 pb-3">
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 text-foreground group w-fit">
            <div className="relative h-10 w-36 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={theme}
                  src={theme === "dark" ? "/images/black%20bg-main.png" : "/images/white%20bg-main.png"}
                  alt="Chez Moi Logo"
                  className="h-full w-full object-contain object-left cursor-pointer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
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
                      isActive(link.href)
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

          {/* Theme Toggle & WhatsApp Action */}
          <div className="justify-self-end flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 text-foreground hover:border-foreground/30 hover:bg-foreground/5 cursor-pointer transition-colors"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              <AnimatePresence mode="wait">
                {theme === "light" ? (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.8, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Moon size={16} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0.8, opacity: 0, rotate: 45 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.8, opacity: 0, rotate: -45 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Sun size={16} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

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
          <Link href="/" className="flex items-center gap-3 text-foreground group">
            <div className="relative h-9 w-32 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={theme}
                  src={theme === "dark" ? "/images/black%20bg-main.png" : "/images/white%20bg-main.png"}
                  alt="Chez Moi Logo"
                  className="h-full w-full object-contain object-left"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
            </div>
          </Link>
          
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground cursor-pointer"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              <AnimatePresence mode="wait">
                {theme === "light" ? (
                  <motion.div
                    key="sun-mobile"
                    initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.8, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Moon size={16} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon-mobile"
                    initial={{ scale: 0.8, opacity: 0, rotate: 45 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.8, opacity: 0, rotate: -45 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Sun size={16} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            
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
                          isActive(link.href)
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
