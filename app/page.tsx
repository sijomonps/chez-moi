import About from "@/components/About";
import Collection from "@/components/Collection";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Collection />
      <About />
      <Gallery />
      <Contact />
    </main>
  );
}
