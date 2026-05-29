"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Camera, MessageCircle } from "lucide-react";

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s Talk
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/0000000000"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[11px] font-medium uppercase tracking-[0.3em] text-background transition-colors hover:bg-foreground/90"
            >
              <MessageCircle size={16} aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href="https://instagram.com/chezmoi"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.3em] text-foreground transition-colors hover:border-foreground/40"
            >
              <Camera size={16} aria-hidden="true" />
              Instagram
            </a>
          </div>
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.35em] text-foreground/70">
            +00 000 000 0000
          </p>
        </motion.div>
      </div>
    </section>
  );
}
