"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const galleryItems = [
  { id: 1, aspect: "aspect-[4/5]" },
  { id: 2, aspect: "aspect-[3/4]" },
  { id: 3, aspect: "aspect-[5/6]" },
  { id: 4, aspect: "aspect-[2/3]" },
  { id: 5, aspect: "aspect-[4/5]" },
  { id: 6, aspect: "aspect-[3/5]" },
];

export default function Gallery() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="gallery" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Gallery
          </h2>
        </motion.div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-5 break-inside-avoid"
            >
              <div
                className={`relative w-full overflow-hidden rounded-2xl ${item.aspect}`}
              >
                <Image
                  src="/images/linen-placeholder.svg"
                  alt="Editorial linen scene"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 30vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
