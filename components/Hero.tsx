"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const heroImage = "/images/linen-placeholder.svg";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="min-h-[70svh] md:min-h-[100svh] pb-16 pt-20 md:pb-20 md:pt-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.1fr_1.2fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-foreground/70">
            PREMIUM HOME LINEN
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
            Comfort.
            <br />
            Style.
            <br />
            Home.
          </h1>
          <p className="mt-6 max-w-md text-base text-foreground/70 sm:text-lg">
            Premium home linens crafted for modern living.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/collection"
              className="rounded-full bg-foreground px-6 py-3 text-[11px] font-medium uppercase tracking-[0.3em] text-white transition duration-200 hover:brightness-110"
            >
              View Collection
            </Link>
            <a
              href="https://wa.me/0000000000"
              className="rounded-full border border-foreground/15 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.3em] !text-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:block relative h-[60vh] w-full overflow-hidden rounded-3xl md:h-[80vh]"
        >
          <Image
            src={heroImage}
            alt="Premium bedding scene"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
