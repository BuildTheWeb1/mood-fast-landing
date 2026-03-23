"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

const featureImages = [
  "mood-fast_mood.png",
  "mood-fast_activities.png",
  "mood-fast_progress.png",
  "mood-fast_gratitude.png",
  "mood-fast_activity.png",
];

const features = [
  {
    title: "Track How You Feel",
    description:
      "Log your mood in seconds and discover patterns over time. Build daily streaks and stay consistent with your emotional wellness journey.",
    points: [
      "Quick 2-second mood check-ins",
      "Visual mood trends & insights",
      "Build daily streaks",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Get Personalized Support",
    description:
      "Receive activities tailored to how you're feeling right now. From breathing exercises to movement routines, find what works for you.",
    points: [
      "Breathing exercises for calm",
      "Movement to boost energy",
      "Mindfulness & reframing techniques",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Discover Your Patterns",
    description:
      "Visualize your emotional journey with weekly and monthly charts. Your mood calendar reveals what's really affecting your wellbeing — so you can make informed decisions.",
    points: [
      "Weekly and monthly mood graphs",
      "Mood calendar with color-coded history",
      "Spot emotional trends over time",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Practice Daily Gratitude",
    description:
      "Record what you're grateful for in seconds. Guided prompts make it easy, and a running streak keeps you consistent.",
    points: [
      "Daily gratitude prompts",
      "Journal your thoughts",
      "Track your gratitude streak",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Celebrate Your Progress",
    description:
      "Stay motivated with achievements, streaks, and weekly goals. Watch your emotional wellness journey unfold.",
    points: ["Unlock achievements", "Set weekly goals", "Track your streaks"],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function HowItWorksPage() {
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
                How It Works
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6B7280]">
                Mood Fast makes emotional wellness simple. Here&apos;s how it
                works — and why it actually sticks.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── STEPS ── */}
        <section className="bg-[#faf9ff] px-6 py-20 lg:px-20">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              <StepCard
                number="1"
                title="Log your mood"
                description="Open the app and tap how you're feeling. It takes just 2 seconds."
              />
              <StepCard
                number="2"
                title="Get recommendations"
                description="Get a personalized activity matched to how you're feeling — right now."
              />
              <StepCard
                number="3"
                title="Track progress"
                description="See your emotional patterns build week by week. Your progress is always visible."
              />
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="bg-white px-6 py-20 lg:px-20">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal variant="fade-up">
              <h2 className="mb-12 text-center text-3xl font-bold text-[#1A1A1A]">
                Features
              </h2>
            </ScrollReveal>
            <div className="space-y-12">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex flex-col items-center gap-8 md:flex-row ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <ScrollReveal
                    variant={index % 2 === 0 ? "fade-right" : "fade-left"}
                    delay={100}
                    className="flex-1"
                  >
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B6FE8]/10 text-[#8B6FE8]">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-[#1A1A1A]">
                      {feature.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-[#6B7280]">
                      {feature.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {feature.points.map((point) => (
                        <li key={point} className="flex items-center gap-2 text-[#6B7280]">
                          <svg className="h-5 w-5 text-[#83F6CC]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </ScrollReveal>
                  <ScrollReveal
                    variant={index % 2 === 0 ? "fade-left" : "fade-right"}
                    delay={200}
                    className="flex-1"
                  >
                    <div className="relative mx-auto h-[400px] w-[200px] overflow-hidden rounded-3xl bg-white shadow-xl">
                      <Image
                        src={`/images/${featureImages[index]}`}
                        alt={`${feature.title} screenshot`}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
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

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="rounded-3xl border border-[rgba(139,111,232,0.15)] bg-white p-6"
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(139,111,232,0.15)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#8B6FE8] text-lg font-bold text-white">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-[#1A1A1A]">{title}</h3>
      <p className="mt-2 text-[#6B7280]">{description}</p>
    </motion.div>
  );
}
