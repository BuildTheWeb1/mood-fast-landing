"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-6 py-4 transition-colors duration-300 md:px-12 lg:px-20 ${
        scrolled
          ? "border-b border-[rgba(139,111,232,0.2)] bg-[rgba(26,26,26,0.85)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
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
