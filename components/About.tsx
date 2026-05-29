"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Feather, ShieldCheck, Sparkles, Wind } from "lucide-react";

const features = [
  { label: "Premium Fabrics", icon: Sparkles },
  { label: "Breathable", icon: Wind },
  { label: "Durable", icon: ShieldCheck },
  { label: "Elegant", icon: Feather },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Welcome Home
          </h2>
          <p className="mt-4 max-w-2xl text-base text-foreground/70 sm:text-lg">
            Chez Moi means My Home. We create elegant home linens designed for
            comfort, durability, and timeless style.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-6 md:flex-nowrap">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="flex items-center gap-3"
              >
                <Icon size={18} className="text-accent" aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-[0.26em]">
                  {feature.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
