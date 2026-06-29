export type Product = {
  slug: string;
  name: string;
  image: string;
  shortDescription: string;
  description: string;
  details: string[];
  orderLink: string;
};

export const products: Product[] = [
  {
    slug: "bedsheets",
    name: "Bedsheets",
    image: "/images/linen-placeholder.svg",
    shortDescription: "Soft, breathable sheets with a smooth finish.",
    description:
      "Our bedsheets are woven for an airy feel with a crisp, hotel-grade drape.",
    details: [
      "300 thread-count cotton sateen",
      "Cool-touch weave for warm climates",
      "Easy-care, wrinkle-resistant finish",
    ],
    orderLink:
      "https://wa.me/919633745832?text=I%20want%20to%20order%20Bedsheets",
  },
  {
    slug: "curtains",
    name: "Curtains",
    image: "/images/linen-placeholder.svg",
    shortDescription: "Light-filtering curtains for calm interiors.",
    description:
      "Relaxed drape curtains that soften light while keeping rooms airy and bright.",
    details: [
      "Semi-sheer weave with soft texture",
      "Subtle matte finish",
      "Custom lengths available on request",
    ],
    orderLink:
      "https://wa.me/919633745832?text=I%20want%20to%20order%20Curtains",
  },
  {
    slug: "towels",
    name: "Towels",
    image: "/images/linen-placeholder.svg",
    shortDescription: "Plush, absorbent towels for everyday rituals.",
    description:
      "Spa-inspired towels with a balanced weight for fast drying and softness.",
    details: [
      "High-absorbency looped terry",
      "Gentle on sensitive skin",
      "Fade-resistant neutral dyes",
    ],
    orderLink:
      "https://wa.me/919633745832?text=I%20want%20to%20order%20Towels",
  },
  {
    slug: "kitchen-linen",
    name: "Kitchen Linen",
    image: "/images/linen-placeholder.svg",
    shortDescription: "Durable linens that elevate daily cooking.",
    description:
      "Designed for busy kitchens with durable fibers that soften over time.",
    details: [
      "Absorbent, quick-dry weave",
      "Reinforced edges for longevity",
      "Neutral palette to mix and match",
    ],
    orderLink:
      "https://wa.me/919633745832?text=I%20want%20to%20order%20Kitchen%20Linen",
  },
];
