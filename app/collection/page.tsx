import Collection from "@/components/Collection";
import Contact from "@/components/Contact";

export default function CollectionPage() {
  return (
    <main className="flex-1">
      <section className="pb-16 pt-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-foreground/70">
            Collection
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl">
            Home essentials, refined.
          </h1>
          <p className="mt-4 max-w-xl text-base text-foreground/70 sm:text-lg">
            Bedsheets, curtains, towels, and kitchen linen crafted for calm,
            modern interiors.
          </p>
        </div>
      </section>
      <Collection showHeading={false} />
      <Contact />
    </main>
  );
}
