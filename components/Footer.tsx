import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050811] text-[#faf8f2]/90 border-t border-[#faf8f2]/5 pt-16 pb-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] pb-12 border-b border-[#faf8f2]/5">
          {/* Logo & Description Column */}
          <div className="flex flex-col items-start gap-4">
            <div className="relative h-20 w-64 overflow-hidden flex items-center">
              <img
                src="/images/black%20bg-main.png"
                alt="Chez Moi Logo"
                className="h-full w-full object-contain object-left"
              />
            </div>
            <p className="max-w-xs text-xs tracking-wide leading-relaxed text-[#faf8f2]/60 mt-2">
              Chez Moi means My Home. We craft elegant home linens designed for comfort, durability, and timeless style.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d4af37]">
              Explore
            </span>
            <ul className="flex flex-col gap-2.5 text-[11px] uppercase tracking-[0.2em] text-[#faf8f2]/70">
              <li>
                <Link href="/" className="hover:text-[#faf8f2] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/collection" className="hover:text-[#faf8f2] transition-colors">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#faf8f2] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Inquiries Column */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d4af37]">
              Inquiries
            </span>
            <div className="flex flex-col gap-2.5 text-[11px] uppercase tracking-[0.2em] text-[#faf8f2]/70">
              <a
                href="https://wa.me/0000000000"
                className="hover:text-[#faf8f2] transition-colors"
              >
                WhatsApp Business
              </a>
              <span className="text-[#faf8f2]/50 tracking-[0.2em] normal-case">
                support@chezmoi.com
              </span>
              <span className="text-[#faf8f2]/50 tracking-[0.2em]">
                +00 000 000 0000
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 pt-8 md:flex-row md:items-center md:justify-between text-[10px] tracking-[0.25em] text-[#faf8f2]/40 uppercase">
          <p>© {new Date().getFullYear()} CHEZ MOI. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#faf8f2]/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#faf8f2]/60 transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
