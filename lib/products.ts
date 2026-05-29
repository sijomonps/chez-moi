export type Product = {
  name: string;
  slug: string;
  image: string;
  summary: string;
  description: string;
  features: string[];
  priceLabel: string;
};

export const whatsappNumber = "0000000000";

export const products: Product[] = [
  {
    name: "Bedsheets",
    slug: "bedsheets",
    image: "/images/linen-placeholder.svg",
    summary: "Soft, breathable layers for effortless sleep.",
    description:
      "Our bedsheets are woven for a cool, smooth handfeel and a relaxed drape that elevates every bedroom.",
    features: [
      "Long-staple cotton blend",
      "300 thread count feel",
      "Easy-care, low-crease finish",
    ],
    priceLabel: "From $45",
  },
  {
    name: "Curtains",
    slug: "curtains",
    image: "/images/linen-placeholder.svg",
    summary: "Light-filtering elegance for calm interiors.",
    description:
      "Graceful curtains with a soft fall, designed to temper light while keeping rooms airy and serene.",
    features: [
      "Textured linen blend",
      "Room-darkening option",
      "Tailored, full-length drop",
    ],
    priceLabel: "From $60",
  },
  {
    name: "Towels",
    slug: "towels",
    image: "/images/linen-placeholder.svg",
    summary: "Plush, absorbent essentials for every day.",
    description:
      "Quick-drying towels that feel luxe yet practical, perfect for daily rituals and spa-like moments.",
    features: [
      "High-absorbency loops",
      "Softened for skin comfort",
      "Colorfast, low-lint weave",
    ],
    priceLabel: "From $18",
  },
  {
    name: "Kitchen Linen",
    slug: "kitchen-linen",
    image: "/images/linen-placeholder.svg",
    summary: "Workhorse linens with a refined finish.",
    description:
      "Durable kitchen linens that handle everyday cooking while keeping your space polished and calm.",
    features: [
      "Stain-resistant fibers",
      "Quick-dry weave",
      "Matching set options",
    ],
    priceLabel: "From $12",
  },
];

export const getOrderLink = (productName: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi! I want to order ${productName}.`
  )}`;
