"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { getOrderLink, products } from "@/lib/products";

type CollectionProps = {
  title?: string;
  intro?: string;
  showHeading?: boolean;
};

export default function Collection({
  title = "Collection",
  intro,
  showHeading = true,
}: CollectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="collection" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            {intro ? (
              <p className="mt-3 max-w-xl text-base text-foreground/70">
                {intro}
              </p>
            ) : null}
          </motion.div>
        )}

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group"
            >
              <Link href={`/products/${item.slug}`} className="block group/link">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover/link:scale-[1.03]"
                    sizes="(max-width: 768px) 90vw, 25vw"
                  />
                </div>
                <h3 className="mt-4 text-sm font-medium uppercase tracking-[0.3em] text-foreground group-hover/link:text-accent transition-colors">
                  {item.name}
                </h3>
              </Link>
              <p className="mt-2 text-sm text-foreground/70">
                {item.summary}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Link
                  href={`/products/${item.slug}`}
                  className="rounded-full border border-foreground/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-foreground transition-colors hover:border-foreground/50"
                >
                  View
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
