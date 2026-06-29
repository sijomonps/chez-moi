export type BedsheetProduct = {
  name: string;
  slug: string;
  images: string[];
  summary: string;
  description: string;
  features: string[];
  priceLabel: string;
  code: string;
};

export type Product = {
  name: string;
  slug: string;
  image: string;
  summary: string;
  description: string;
  features: string[];
  priceLabel: string;
  isAvailable: boolean;
  products?: BedsheetProduct[];
};

export const whatsappNumber = "0000000000";

export const products: Product[] = [
  {
    name: "Bedsheets",
    slug: "bedsheets",
    image: "/images/bedsheet-silk-sateen.png",
    summary: "Soft, breathable layers for effortless sleep.",
    description: "Our bedsheets are woven for a cool, smooth handfeel and a relaxed drape that elevates every bedroom.",
    features: [
      "Long-staple cotton blend",
      "300 thread count feel",
      "Easy-care, low-crease finish",
    ],
    priceLabel: "From ₹2099",
    isAvailable: true,
    products: [
      {
        name: "Designer Kingsize Printed Cotton Bedsheet",
        slug: "designer-kingsize-cotton",
        images: [
          "/Products/Bedsheets/product1/img1.jpg",
          "/Products/Bedsheets/product1/img2.jpg",
          "/Products/Bedsheets/product1/img3.jpg",
          "/Products/Bedsheets/product1/img4.jpg",
        ],
        summary: "Premium quality designer kingsize printed cotton bedsheet set.",
        description: "Experience the ultimate in bedroom comfort with our premium designer kingsize printed cotton bedsheet. Crafted from high-grade JUTE Cotton, this set offers exceptional softness, durability, and a clean modern look to elevate your sleeping space.",
        features: [
          "Size: Kingsize 108/108 inches",
          "Fabric: JUTE Cotton",
          "Set Contains: 1 Bedsheet with 2 Pillow Covers",
          "Pattern: DESIGNER PRINTED",
          "Price: 2099 FreeShipping",
          "Product Code: BB",
        ],
        priceLabel: "₹2099 (Free Shipping)",
        code: "BB",
      },
    ],
  },
  {
    name: "Curtains",
    slug: "curtains",
    image: "/images/coming-soon-main.png",
    summary: "Light-filtering elegance for calm interiors.",
    description: "Graceful curtains with a soft fall, designed to temper light while keeping rooms airy and serene.",
    features: [
      "Textured linen blend",
      "Room-darkening option",
      "Tailored, full-length drop",
    ],
    priceLabel: "Coming Soon",
    isAvailable: false,
  },
  {
    name: "Towels",
    slug: "towels",
    image: "/images/coming-soon-main.png",
    summary: "Plush, absorbent essentials for every day.",
    description: "Quick-drying towels that feel luxe yet practical, perfect for daily rituals and spa-like moments.",
    features: [
      "High-absorbency loops",
      "Softened for skin comfort",
      "Colorfast, low-lint weave",
    ],
    priceLabel: "Coming Soon",
    isAvailable: false,
  },
  {
    name: "Kitchen Linen",
    slug: "kitchen-linen",
    image: "/images/coming-soon-main.png",
    summary: "Workhorse linens with a refined finish.",
    description: "Durable kitchen linens that handle everyday cooking while keeping your space polished and calm.",
    features: [
      "Stain-resistant fibers",
      "Quick-dry weave",
      "Matching set options",
    ],
    priceLabel: "Coming Soon",
    isAvailable: false,
  },
];

export const getOrderLink = (productName: string, code?: string) => {
  const text = code 
    ? `Hi! I want to order the ${productName} (Code: ${code}).` 
    : `Hi! I want to order ${productName}.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
};
