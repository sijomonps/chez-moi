import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import CategoryDetailClient from "@/components/CategoryDetailClient";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const category = products.find((p) => p.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="flex-1">
      <CategoryDetailClient category={category} />
    </main>
  );
}
