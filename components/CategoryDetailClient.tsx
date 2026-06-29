"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getOrderLink, Product } from "@/lib/products";

type CategoryDetailClientProps = {
  category: Product;
};

export default function CategoryDetailClient({ category }: CategoryDetailClientProps) {
  const reduceMotion = useReducedMotion();

  // If the category is not available yet, show the premium Coming Soon screen
  if (!category.isAvailable) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center py-20 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mb-8 aspect-video w-full overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/5 shadow-inner"
          >
            <Image
              src={category.image}
              alt={`${category.name} Coming Soon`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-background/25 backdrop-blur-[1px]" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-[11px] font-semibold uppercase tracking-[0.4em] text-accent"
          >
            Coming Soon
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground"
          >
            {category.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 text-sm sm:text-base text-foreground/70 leading-relaxed max-w-md mx-auto"
          >
            We are curating a premium collection of {category.name.toLowerCase()} for the modern home. Click below to register your interest on WhatsApp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href={`https://wa.me/0000000000?text=Hi!%20Notify%20me%20when%20the%20Chez%20Moi%20${encodeURIComponent(category.name)}%20collection%20launches.`}
              className="rounded-full bg-foreground px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] !text-[#faf8f2] transition duration-200 hover:brightness-110"
            >
              Notify Me on WhatsApp
            </a>
            <Link
              href="/#collection"
              className="rounded-full border border-foreground/15 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground transition-colors hover:border-foreground/40"
            >
              Back to Collection
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  // If category is available, show the products grid (e.g. Bedsheets)
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center">
          <Link
            href="/#collection"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.3em] text-foreground/70 hover:text-foreground transition-colors"
          >
            <ArrowLeft size={12} />
            Collection
          </Link>
        </div>

        {/* Category Header */}
        <div className="mt-10 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-accent">
            Category
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
            {category.name}
          </h1>
          <p className="mt-6 text-sm sm:text-base text-foreground/70 leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {category.products?.map((item, idx) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="group flex flex-col justify-between"
            >
              <div>
                <Link
                  href={`/products/${category.slug}/${item.slug}`}
                  className="block relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-foreground/5"
                >
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 90vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="rounded-full bg-background/90 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.25em] text-foreground shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      View Details
                    </span>
                  </div>
                </Link>

                <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-foreground line-clamp-2">
                  <Link href={`/products/${category.slug}/${item.slug}`} className="hover:text-accent transition-colors">
                    {item.name}
                  </Link>
                </h3>
                <p className="mt-2 text-xs font-semibold tracking-wider text-accent uppercase">
                  {item.priceLabel}
                </p>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed line-clamp-2">
                  {item.summary}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href={`/products/${category.slug}/${item.slug}`}
                  className="flex-1 text-center rounded-full border border-foreground/20 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.28em] text-foreground transition-colors hover:border-foreground/50 hover:bg-foreground/5"
                >
                  View Details
                </Link>
                <a
                  href={getOrderLink(item.name, item.code)}
                  className="flex-1 text-center rounded-full bg-foreground px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.28em] !text-[#faf8f2] transition-colors hover:bg-foreground/90"
                >
                  Order now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
