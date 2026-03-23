"use client";

import { motion } from "framer-motion";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollReveal } from "@/components/ScrollReveal";

const APP_STORE_URL = "https://apps.apple.com/app/mood-fast/id6755293215";

const AppStoreButton = () => (
  <motion.a
    href={APP_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-[#1A1A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6FE8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2d1f4e]"
    whileHover={{ scale: 1.05, boxShadow: "0 0 24px rgba(255,255,255,0.25)" }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 300, damping: 18 }}
  >
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
    <div className="flex flex-col items-start">
      <span className="text-xs opacity-60">Download on the</span>
      <span className="text-lg font-semibold leading-tight">App Store</span>
    </div>
  </motion.a>
);

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f0eaff] via-[#faf9ff] to-white px-6 pb-16 pt-20 text-center lg:px-20">
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-[400px] w-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(139,111,232,0.15) 0%, transparent 65%)" }}
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-3xl">
            <ScrollReveal variant="fade-up">
              <h1 className="text-4xl font-extrabold text-[#1A1A1A] md:text-5xl">
                Common Questions
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6B7280]">
                Everything you need to know about Mood Fast.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── FAQ BODY ── */}
        <section className="bg-white px-6 py-20 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <FaqAccordion />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2d1f4e] to-[#1a3028] px-6 py-20 text-center lg:px-20">
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-[350px] w-[350px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(139,111,232,0.2) 0%, transparent 65%)" }}
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-3xl">
            <ScrollReveal variant="fade-up">
              <h2 className="text-balance text-3xl font-extrabold text-white md:text-4xl">
                Start your emotional wellness journey today.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-white/55">
                2 seconds a day. Real patterns. Better days.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4">
                <AppStoreButton />
                <p className="text-sm text-white/40">Free to download. No pressure.</p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
