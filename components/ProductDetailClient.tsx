"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowLeft, Check, Share2, ShoppingCart } from "lucide-react";
import { BedsheetProduct, getOrderLink } from "@/lib/products";

type ProductDetailClientProps = {
  categorySlug: string;
  categoryName: string;
  product: BedsheetProduct;
};

export default function ProductDetailClient({
  categorySlug,
  categoryName,
  product,
}: ProductDetailClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-foreground/60">
            <Link href="/#collection" className="hover:text-foreground transition-colors">
              Collection
            </Link>
            <span aria-hidden="true">/</span>
            <Link href={`/products/${categorySlug}`} className="hover:text-foreground transition-colors">
              {categoryName}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          <Link
            href={`/products/${categorySlug}`}
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground/70 hover:text-foreground transition-colors"
          >
            <ArrowLeft size={12} />
            Back to {categoryName}
          </Link>
        </div>

        {/* Product Workspace */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          {/* Left Column: Premium Interactive Image Gallery */}
          <div className="flex flex-col gap-5">
            {/* Main Image Display */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-foreground/5 shadow-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 h-full w-full"
                >
                  <Image
                    src={product.images[activeImageIndex]}
                    alt={`${product.name} - View ${activeImageIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Product Code Badge */}
              <div className="absolute left-6 top-6 rounded-full bg-background/90 backdrop-blur-sm px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-foreground shadow-sm">
                Code: {product.code}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-square w-full overflow-hidden rounded-xl bg-foreground/5 transition-all duration-300 ${
                      activeImageIndex === idx
                        ? "ring-2 ring-accent scale-[0.98]"
                        : "opacity-75 hover:opacity-100 hover:scale-[1.02]"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="15vw"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Dynamic Info and Details */}
          <div className="lg:sticky lg:top-32">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent">
                  In Stock
                </span>
                <h1 className="mt-2 text-3xl font-extrabold leading-[1.15] text-foreground sm:text-4xl">
                  {product.name}
                </h1>
              </div>

              {/* Share button */}
              <button
                type="button"
                onClick={handleShare}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/10 text-foreground transition-all hover:bg-foreground/5 active:scale-95"
                title="Copy Product Link"
              >
                {copied ? <Check size={16} className="text-accent" /> : <Share2 size={16} />}
              </button>
            </div>

            {/* Price section */}
            <div className="mt-6 border-b border-foreground/10 pb-6">
              <span className="text-2xl font-bold tracking-tight text-foreground">
                {product.priceLabel}
              </span>
            </div>

            {/* Product description */}
            <div className="mt-6">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/50">
                Description
              </h2>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed font-normal">
                {product.description}
              </p>
            </div>

            {/* Specifications list (Creative UI styling) */}
            <div className="mt-8">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/50">
                Specifications
              </h2>
              <ul className="mt-4 grid gap-3.5">
                {product.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: reduceMotion ? 0 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    className="flex items-start gap-3 text-sm text-foreground/80"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check size={10} className="stroke-[3]" />
                    </span>
                    <span className="font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA order button */}
            <div className="mt-10 flex flex-col gap-3">
              <a
                href={getOrderLink(product.name, product.code)}
                className="flex items-center justify-center gap-3 rounded-full bg-foreground px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] !text-[#faf8f2] shadow-sm transition-transform hover:brightness-110 active:scale-[0.98]"
              >
                <ShoppingCart size={14} />
                Order on WhatsApp
              </a>
              <p className="text-center text-[10px] text-foreground/50">
                Secure order processing via WhatsApp chat. Free shipping included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
