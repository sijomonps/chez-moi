import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ProductDetailClient from "@/components/ProductDetailClient";

export function generateStaticParams() {
  const params: { slug: string; productSlug: string }[] = [];
  products.forEach((category) => {
    if (category.isAvailable && category.products) {
      category.products.forEach((prod) => {
        params.push({
          slug: category.slug,
          productSlug: prod.slug,
        });
      });
    }
  });
  return params;
}

type Props = {
  params: Promise<{
    slug: string;
    productSlug: string;
  }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { slug, productSlug } = await params;
  const category = products.find((c) => c.slug === slug);

  if (!category || !category.isAvailable) {
    notFound();
  }

  const product = category.products?.find((p) => p.slug === productSlug);

  if (!product) {
    notFound();
  }

  return (
    <main className="flex-1">
      <ProductDetailClient
        categorySlug={category.slug}
        categoryName={category.name}
        product={product}
      />
    </main>
  );
}
