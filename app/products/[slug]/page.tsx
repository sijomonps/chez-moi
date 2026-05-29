import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getOrderLink, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="flex-1">
      <section className="pb-16 pt-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.4em] text-foreground/70">
            <Link href="/collection" className="hover:text-foreground">
              Collection
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 45vw"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold leading-[1.1] sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-base text-foreground/70 sm:text-lg">
                {product.description}
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-foreground">
                {product.priceLabel}
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-foreground/70">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={getOrderLink(product.name)}
                  className="rounded-full bg-foreground px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] !text-[#faf8f2] transition-colors hover:bg-foreground/90"
                >
                  Order now
                </a>
                <Link
                  href="/collection"
                  className="rounded-full border border-foreground/20 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground transition-colors hover:border-foreground/50"
                >
                  Back to collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
