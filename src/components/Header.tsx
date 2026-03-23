import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[rgba(139,111,232,0.2)] bg-[rgba(26,26,26,0.85)] px-6 py-4 backdrop-blur-md md:px-12 lg:px-20">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/mood-fast_logo.png"
          alt="Mood Fast logo"
          width={40}
          height={40}
          priority
        />
        <span className="text-xl font-bold text-white">Mood Fast</span>
      </Link>
      <nav className="hidden items-center gap-8 md:flex">
        <Link
          href="/how-it-works"
          className="text-sm text-white/60 transition-colors hover:text-white"
        >
          How it works
        </Link>
        <Link
          href="/privacy"
          className="text-sm text-white/60 transition-colors hover:text-white"
        >
          Privacy
        </Link>
        <Link
          href="/#faq"
          className="text-sm text-white/60 transition-colors hover:text-white"
        >
          FAQ
        </Link>
      </nav>
      <a
        href="https://apps.apple.com/app/mood-fast/id6755293215"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
      >
        Download
      </a>
    </header>
  );
}
