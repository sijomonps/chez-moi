"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Collection", href: "/collection" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto w-full max-w-6xl px-6 pt-5">
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center">
          <Link href="/" className="flex flex-col leading-none text-foreground">
            <span className="text-sm font-semibold tracking-[0.28em]">
              CHEZ MOI
            </span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/70">
              MY PLACE
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="rounded-full border border-foreground/10 bg-background px-8 py-3"
          >
            <ul className="flex items-center gap-8 text-[11px] font-medium uppercase tracking-[0.3em] text-foreground">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    className={
                      isActive(link.href)
                        ? "rounded-full bg-white px-4 py-2 font-semibold text-[#1F2A44] transition-colors"
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

          <div className="justify-self-end">
            <a
              href="https://wa.me/0000000000"
              className="rounded-full border border-accent px-5 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-foreground transition-colors hover:bg-accent/10"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between md:hidden">
          <Link href="/" className="flex flex-col leading-none text-foreground">
            <span className="text-sm font-semibold tracking-[0.28em]">
              CHEZ MOI
            </span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/70">
              MY PLACE
            </span>
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

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-nav"
              className="mt-4 rounded-2xl border border-foreground/10 bg-background px-6 py-5 md:hidden"
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
                            ? "inline-flex rounded-full bg-white px-4 py-2 font-semibold text-[#1F2A44] transition-colors"
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
