"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FeatureTabs } from "@/components/FeatureTabs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollReveal } from "@/components/ScrollReveal";

const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 18 },
  },
};

const centerPhoneVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 60,
      damping: 20,
      delay: 0.5,
    },
  },
};

const leftPhoneVariants = {
  hidden: { opacity: 0, y: 80, rotate: -8 },
  show: {
    opacity: 1,
    y: 16,
    rotate: -8,
    transition: {
      type: "spring" as const,
      stiffness: 55,
      damping: 18,
      delay: 0.65,
    },
  },
};

const rightPhoneVariants = {
  hidden: { opacity: 0, y: 80, rotate: 8 },
  show: {
    opacity: 1,
    y: 16,
    rotate: 8,
    transition: {
      type: "spring" as const,
      stiffness: 55,
      damping: 18,
      delay: 0.72,
    },
  },
};

const APP_STORE_URL = "https://apps.apple.com/app/mood-fast/id6755293215";

const CheckIcon = () => (
  <svg
    className="h-4 w-4 flex-shrink-0 text-[#83F6CC]"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

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
    <svg
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
    <div className="flex flex-col items-start">
      <span className="text-xs opacity-60">Download on the</span>
      <span className="text-lg font-semibold leading-tight">App Store</span>
    </div>
  </motion.a>
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />

      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2d1f4e] to-[#1a3028] px-6 pb-24 pt-28 text-center lg:px-20">
          {/* Radial glows */}
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-[400px] w-[400px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(139,111,232,0.25) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -right-20 h-[350px] w-[350px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(131,246,204,0.15) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />

          <motion.div
            className="relative z-10 mx-auto max-w-4xl"
            variants={heroContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={heroItem}
              className="text-balance text-[clamp(36px,6vw,52px)] font-extrabold leading-tight tracking-tight text-white"
            >
              See the <span className="text-[#83F6CC]">patterns</span> behind
              your <span className="text-[#83F6CC]">mood.</span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mx-auto mt-5 max-w-[420px] text-lg leading-relaxed text-white/65"
            >
              2-second check-ins reveal mood trends before they become habits.
              Break the patterns that drag you down.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="mt-8 flex flex-col items-center gap-3"
            >
              <AppStoreButton />
              <p className="text-sm text-white/40">Free to start · iOS only</p>
            </motion.div>

            {/* Phone mockups row */}
            <div className="relative mt-12 flex items-end justify-center gap-4">
              {/* Floating bubbles — desktop only */}
              <motion.div
                className="absolute left-[5%] top-4 hidden rounded-2xl border border-white/20 bg-white/12 px-3 py-2 backdrop-blur-md lg:block"
                aria-hidden="true"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
                transition={{
                  opacity: { delay: 0.9, duration: 0.5 },
                  x: { delay: 0.9, duration: 0.5 },
                  y: {
                    delay: 1.4,
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <p className="text-[9px] text-white/60">Current streak</p>
                <p className="text-sm font-bold text-white">🔥 30 days</p>
              </motion.div>
              <motion.div
                className="absolute right-[5%] top-8 hidden rounded-2xl border border-white/20 bg-white/12 px-3 py-2 backdrop-blur-md lg:block"
                aria-hidden="true"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
                transition={{
                  opacity: { delay: 1.0, duration: 0.5 },
                  x: { delay: 1.0, duration: 0.5 },
                  y: {
                    delay: 1.6,
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <p className="text-[9px] text-white/60">Today&apos;s mood</p>
                <p className="text-sm font-bold text-[#83F6CC]">😊 Great</p>
              </motion.div>
              <motion.div
                className="absolute bottom-20 left-[12%] z-10 hidden rounded-2xl bg-[#83F6CC] px-3 py-2 lg:block"
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { delay: 1.1, duration: 0.4 },
                  scale: {
                    delay: 1.1,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 80,
                  },
                  y: {
                    delay: 1.8,
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <p className="text-[9px] text-[#0a6648]">Level</p>
                <p className="text-sm font-bold text-[#0a6648]">⭐ Level 5</p>
              </motion.div>

              {/* Left phone — desktop only */}
              <motion.div
                className="hidden overflow-hidden rounded-[28px] bg-[#0d0d0d] shadow-[0_28px_70px_rgba(0,0,0,0.5)] lg:block"
                variants={leftPhoneVariants}
                initial="hidden"
                animate="show"
              >
                <div className="relative h-[380px] w-[178px]">
                  <Image
                    src="/images/mood-fast_mood.png"
                    alt="Mood Fast mood tracking screen"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>

              {/* Center phone — always visible */}
              <motion.div
                className="overflow-hidden rounded-[28px] bg-[#0d0d0d] shadow-[0_28px_70px_rgba(0,0,0,0.5)]"
                variants={centerPhoneVariants}
                initial="hidden"
                animate="show"
              >
                <div className="relative h-[380px] w-[210px]">
                  <Image
                    src="/images/mood-fast_home.png"
                    alt="Mood Fast home screen"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>

              {/* Right phone — desktop only */}
              <motion.div
                className="hidden overflow-hidden rounded-[28px] bg-[#0d0d0d] shadow-[0_28px_70px_rgba(0,0,0,0.5)] lg:block"
                variants={rightPhoneVariants}
                initial="hidden"
                animate="show"
              >
                <div className="relative h-[320px] w-[178px]">
                  <Image
                    src="/images/mood-fast_progress.png"
                    alt="Mood Fast progress screen"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ── FEATURE SHOWCASE ── */}
        <section className="bg-[#faf9ff] px-6 py-20 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal variant="fade-up">
              <div className="mb-12 text-center">
                <h2 className="text-balance text-3xl font-extrabold text-[#1A1A1A] md:text-[34px]">
                  Everything you need to feel better
                </h2>
                <p className="mx-auto mt-3 max-w-md text-[#6B7280]">
                  Four core pillars, built to work together — each one takes
                  seconds, not minutes.
                </p>
              </div>
            </ScrollReveal>
            <FeatureTabs />
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="bg-[#faf9ff] px-6 py-20 lg:px-20">
          <div className="mx-auto max-w-[700px]">
            <ScrollReveal variant="fade-up">
              <h2 className="text-balance text-center text-3xl font-extrabold text-[#1A1A1A]">
                Free forever. Or unlock your full pattern.
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-center text-[#6B7280]">
                Free shows you when your moods shift. PRO shows you why.
              </p>
            </ScrollReveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <ScrollReveal variant="fade-right" delay={100}>
                <motion.div
                  className="rounded-3xl border border-[rgba(139,111,232,0.15)] bg-white p-8"
                  whileHover={{
                    scale: 1.01,
                    boxShadow: "0 8px 24px rgba(139,111,232,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                >
                  <p className="text-sm font-semibold text-[#9CA3AF]">Free</p>
                  <p className="mt-2 text-4xl font-extrabold tabular-nums text-[#1A1A1A]">
                    $0
                  </p>
                  <p className="mt-1 text-sm text-[#9CA3AF]">Forever free</p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "2 mood check-ins per day",
                      "30-day mood history",
                      "Guided wellness activities",
                      "Gratitude journal",
                      "Streaks & progress tracking",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-[#6B7280]"
                      >
                        <CheckIcon />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 block rounded-xl bg-[#f0eaff] py-3.5 text-center text-sm font-semibold text-[#8B6FE8] transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6FE8] focus-visible:ring-offset-2"
                  >
                    Download free
                  </a>
                </motion.div>
              </ScrollReveal>
              <ScrollReveal variant="fade-left" delay={200}>
                <motion.div
                  className="rounded-3xl bg-[#1A1A1A] p-8"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 40px rgba(139,111,232,0.35)",
                  }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white/50">PRO</p>
                    <span className="rounded-full bg-[#8B6FE8] px-3 py-1 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  </div>
                  <p className="mt-2 text-4xl font-extrabold tabular-nums text-white">
                    $4.99
                  </p>
                  <p className="mt-1 text-sm text-white/40">
                    per month · or $29.99/year (save 50%)
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "Everything in Free",
                      "Unlimited daily check-ins",
                      "Full mood history (10 years)",
                      "Advanced analytics & insights",
                      "Custom reminders",
                      "Data export (CSV, JSON, PDF)",
                      "Premium activities",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-white/75"
                      >
                        <CheckIcon />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 block rounded-xl bg-[#8B6FE8] py-3.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
                  >
                    Start free, upgrade in-app
                  </a>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="bg-white px-6 py-20 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal variant="fade-up">
              <h2 className="text-balance text-center text-3xl font-extrabold text-[#1A1A1A]">
                Common questions
              </h2>
            </ScrollReveal>
            <div className="mt-8">
              <FaqAccordion />
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2d1f4e] to-[#1a3028] px-6 py-20 text-center lg:px-20">
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-[350px] w-[350px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(139,111,232,0.2) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-3xl">
            <ScrollReveal variant="fade-up">
              <h2 className="text-balance text-3xl font-extrabold text-white md:text-4xl">
                Your patterns are clearer than you think.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-white/55">
                2 seconds a day to finally see them.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4">
                <AppStoreButton />
                <p className="text-sm text-white/40">
                  Free to download. No pressure.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
