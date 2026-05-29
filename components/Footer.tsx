export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col leading-none text-foreground">
          <span className="text-sm font-semibold tracking-[0.28em]">
            CHEZ MOI
          </span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/70">
            MY PLACE
          </span>
        </div>
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-foreground/60">
          2026 Chez Moi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
