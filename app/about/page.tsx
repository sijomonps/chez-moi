import About from "@/components/About";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="pb-16 pt-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-foreground/70">
            About
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl">
            Designed for the way you live.
          </h1>
          <p className="mt-4 max-w-xl text-base text-foreground/70 sm:text-lg">
            A calm collection of linens that elevate everyday rituals at home.
          </p>
        </div>
      </section>
      <About />
      <Gallery />
      <Contact />
    </main>
  );
}
