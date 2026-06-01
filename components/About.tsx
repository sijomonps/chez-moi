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
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-3xl px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
            Our Philosophy
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Welcome Home
          </h2>
          <p className="mt-6 text-sm md:text-base leading-relaxed text-foreground/70">
            Chez Moi means My Home. We craft elegant home linens designed for
            comfort, durability, and timeless style. By combining premium natural
            materials with minimalist design, our collections bring quiet luxury
            to your personal sanctuary.
          </p>
        </motion.div>

        {/* Minimal inline list of features */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : idx * 0.08, ease: "easeOut" }}
                className="flex items-center gap-2"
              >
                <Icon size={14} className="text-accent" aria-hidden="true" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/80">
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
