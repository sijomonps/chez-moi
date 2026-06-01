import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "CHEZ MOI | My Place",
  description: "Premium home linens crafted for modern living.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans">
        <Preloader />
        <div className="flex min-h-full flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
