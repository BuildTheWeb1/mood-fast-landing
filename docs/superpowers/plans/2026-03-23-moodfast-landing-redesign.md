# MoodFast Landing Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the MoodFast Next.js landing page with a lavender/purple palette, dark gradient hero, tabbed feature showcase, and trust strip — matching the approved wireframe.

**Architecture:** Five files are modified/created. A new `FeatureTabs` client component handles the interactive tab switcher. All other sections are inlined in `page.tsx`. Shared layout components (`Header`, `Footer`) are updated in-place.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, `next/image`

---

## Color Reference

Use these exact values throughout — do not use the old `#60B5FF` blue or `#F5F5F5` grey.

| Role | Value |
|------|-------|
| Primary purple | `#8B6FE8` |
| Mint accent | `#83F6CC` |
| Dark bg | `#1A1A1A` |
| Dark gradient | `linear-gradient(145deg, #1A1A1A 0%, #2d1f4e 60%, #1a3028 100%)` |
| Lavender section bg | `#faf9ff` |
| Lavender tint (cards/borders) | `#f0eaff` |
| Tab bar bg | `#ede8ff` |
| Muted text | `#6B7280` |
| Stars | `#FFD93D` |

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `src/components/Header.tsx` | Modify | Dark sticky header, white nav, white pill CTA |
| `src/components/Footer.tsx` | Modify | Dark `#111` footer, white text |
| `src/components/FaqAccordion.tsx` | Modify | Update focus ring + chevron colors to purple |
| `src/components/FeatureTabs.tsx` | **Create** | Client component: tab bar + feature panel with useState |
| `src/app/page.tsx` | Rewrite | All page sections using updated components |

---

## Task 1: Update Header

**Files:**
- Modify: `src/components/Header.tsx`

- [ ] **Step 1: Replace Header content**

Open `src/components/Header.tsx` and replace the entire file with:

```tsx
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
```

- [ ] **Step 2: Start dev server and verify header**

```bash
cd /Users/webspacedeveloper/Documents/projects/mood-fast-landing && npm run dev
```

Open http://localhost:3000. Confirm: dark frosted header, white "Mood Fast" text, white/translucent nav links, white pill "Download" button.

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.tsx
git commit -m "redesign: dark frosted header with white nav"
```

---

## Task 2: Update Footer

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Replace Footer content**

Open `src/components/Footer.tsx` and replace the entire file with:

```tsx
export function Footer() {
  return (
    <footer className="bg-[#111] py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 md:flex-row md:justify-between md:px-12">
        <div className="flex items-center gap-2">
          <div className="h-[22px] w-[22px] rounded-[6px] bg-gradient-to-br from-[#8B6FE8] to-[#83F6CC]" />
          <span className="text-sm font-semibold text-white">Mood Fast</span>
        </div>
        <p className="text-sm text-white/35">
          © 2025–{new Date().getFullYear()} Mood Fast. All rights reserved.
        </p>
        <a
          href="https://x.com/buildtheweb1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/40 transition-opacity hover:opacity-70"
        >
          <span className="text-sm">follow on</span>
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify footer**

Scroll to the bottom of http://localhost:3000. Confirm: `#111` dark background, gradient logo dot, white "Mood Fast" text, muted copyright, muted X link.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "redesign: dark footer with gradient logo dot"
```

---

## Task 3: Update FaqAccordion colors

**Files:**
- Modify: `src/components/FaqAccordion.tsx`

- [ ] **Step 1: Update color tokens in FaqAccordion**

In `src/components/FaqAccordion.tsx`, make these targeted replacements:

1. Change focus ring color `focus-visible:ring-[#60B5FF]` → `focus-visible:ring-[#8B6FE8]`
2. Change chevron color `text-[#6B7280]` → `text-[#8B6FE8]`
3. Change card background `bg-white shadow-sm` → `bg-white border border-[#f0eaff]` (remove `shadow-sm`, add border)

The updated button element should look like:
```tsx
<button
  type="button"
  aria-expanded={openIndex === index}
  onClick={() => setOpenIndex(openIndex === index ? null : index)}
  className="flex w-full items-center justify-between px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6FE8] focus-visible:ring-inset"
>
  <span className="text-lg font-medium text-[#1A1A1A]">
    {faq.question}
  </span>
  <svg
    className={`h-5 w-5 flex-shrink-0 text-[#8B6FE8] transition-transform duration-200 motion-reduce:transition-none ${
      openIndex === index ? "rotate-180" : ""
    }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
</button>
```

And the wrapper div:
```tsx
<div
  key={faq.question}
  className="overflow-hidden rounded-2xl border border-[#f0eaff] bg-white"
>
```

- [ ] **Step 2: Verify accordion**

Scroll to the FAQ section at http://localhost:3000/#faq. Confirm: purple chevrons, purple focus ring on keyboard nav, lavender card borders.

- [ ] **Step 3: Commit**

```bash
git add src/components/FaqAccordion.tsx
git commit -m "redesign: update FAQ accordion to purple color scheme"
```

---

## Task 4: Create FeatureTabs component

**Files:**
- Create: `src/components/FeatureTabs.tsx`

- [ ] **Step 1: Create the FeatureTabs component**

Create `src/components/FeatureTabs.tsx` with this content:

```tsx
"use client";

import { useState } from "react";
import Image from "next/image";

interface Feature {
  tab: string;
  screenshot: string;
  screenshotAlt: string;
  tag: string;
  heading: string;
  description: string;
  bullets: string[];
}

const features: Feature[] = [
  {
    tab: "😊 Mood Tracking",
    screenshot: "/images/mood-fast_mood.png",
    screenshotAlt: "Mood Fast mood tracking screen",
    tag: "Mood Tracking",
    heading: "2 seconds. No excuses.",
    description:
      "Log how you're feeling in a single tap. No forms, no journals. Mood Fast captures your emotional state and builds a rich picture over time — automatically.",
    bullets: [
      "Positive, neutral & negative moods with intensity",
      "Optional notes (free & PRO limits)",
      "Calendar + weekly chart views",
      "Spot patterns you'd never catch on your own",
    ],
  },
  {
    tab: "🧘 Activities",
    screenshot: "/images/mood-fast_activities.png",
    screenshotAlt: "Mood Fast guided activities screen",
    tag: "Activities",
    heading: "Guided sessions for right now.",
    description:
      "Breathing, grounding, movement, reframing — personalized to how you're feeling today, not in theory.",
    bullets: [
      "6 categories: Breathing, Grounding, Activation, Reframing, Gratitude, Sleep",
      "Sessions recommended based on your current mood",
      "Session reflection with mood delta",
      "Tracks activity completion toward weekly goals",
    ],
  },
  {
    tab: "🌸 Gratitude",
    screenshot: "/images/mood-fast_gratitude.png",
    screenshotAlt: "Mood Fast gratitude journal screen",
    tag: "Gratitude",
    heading: "A daily gratitude practice.",
    description:
      "A simple daily ritual that compounds. Track your streak, reflect with AI-powered prompts, and build positivity over time.",
    bullets: [
      "Daily gratitude flow from the home screen",
      "AI-generated reflection prompts (Apple Intelligence)",
      "Gratitude streak and totals",
      "Journal review screen",
    ],
  },
  {
    tab: "📈 Progress",
    screenshot: "/images/mood-fast_progress.png",
    screenshotAlt: "Mood Fast progress and stats screen",
    tag: "Progress",
    heading: "See how far you've come.",
    description:
      "Streaks, XP, level progression, weekly goals, and achievement badges — all in one place.",
    bullets: [
      "Activity and gratitude streak cards",
      "XP and level progression",
      "Weekly goal editor and tracker",
      "Achievement toasts and badges",
    ],
  },
];

export function FeatureTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = features[activeIndex];

  return (
    <div>
      {/* Tab bar */}
      <div className="mb-10 flex justify-center overflow-x-auto pb-1">
        <div className="flex gap-1.5 rounded-full bg-[#ede8ff] p-1">
          {features.map((f, i) => (
            <button
              key={f.tab}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6FE8] focus-visible:ring-offset-2 ${
                i === activeIndex
                  ? "bg-[#8B6FE8] font-semibold text-white"
                  : "text-[#6B7280] hover:text-[#1A1A1A]"
              }`}
            >
              {f.tab}
            </button>
          ))}
        </div>
      </div>

      {/* Feature panel */}
      <div className="flex flex-col items-center gap-10 rounded-3xl bg-white p-8 shadow-[0_2px_20px_rgba(139,111,232,0.08)] md:flex-row md:gap-12 md:p-10">
        {/* Phone mockup */}
        <div className="relative h-[306px] w-[170px] flex-shrink-0 overflow-hidden rounded-[26px] bg-[#1A1A1A] shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
          <Image
            src={active.screenshot}
            alt={active.screenshotAlt}
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <span className="mb-4 inline-block rounded-full bg-[#f0eaff] px-3 py-1 text-xs font-semibold text-[#8B6FE8]">
            {active.tag}
          </span>
          <h3 className="text-2xl font-extrabold text-[#1A1A1A] md:text-[26px]">
            {active.heading}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#6B7280] md:text-[15px]">
            {active.description}
          </p>
          <ul className="mt-5 space-y-2">
            {active.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-[#4B5563]">
                <span
                  className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#83F6CC]"
                  aria-hidden="true"
                />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify component compiles**

The dev server should still be running. Check http://localhost:3000 for no build errors in the terminal. The component isn't rendered yet — that happens in Task 5+.

- [ ] **Step 3: Commit**

```bash
git add src/components/FeatureTabs.tsx
git commit -m "feat: add FeatureTabs client component with 4 app feature tabs"
```

---

## Task 5: Rewrite page.tsx — scaffolding + Hero section

**Files:**
- Modify: `src/app/page.tsx`

This task replaces the entire `page.tsx`. We build it section by section across Tasks 5–8, but since it's one file, we rewrite it fully in this task and add remaining sections in subsequent tasks.

- [ ] **Step 1: Replace page.tsx with the full redesign**

Replace `src/app/page.tsx` entirely with:

```tsx
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Header } from "@/components/Header";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FeatureTabs } from "@/components/FeatureTabs";

const APP_STORE_URL = "https://apps.apple.com/app/mood-fast/id6755293215";

const testimonials = [
  {
    name: "Sarah M.",
    text: "I never realized how much my mood changes through the week until Mood Fast showed me the pattern. Total game changer.",
    stars: 5,
  },
  {
    name: "James T.",
    text: "Takes literally 2 seconds. I've tried every journal app and quit after a week. I'm on a 30-day streak with this one.",
    stars: 5,
  },
  {
    name: "Priya K.",
    text: "The breathing exercises it suggests when I'm anxious actually help. And the gratitude streak keeps me coming back.",
    stars: 5,
  },
];

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

const AppStoreButton = ({ dark = false }: { dark?: boolean }) => (
  <a
    href={APP_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-3 rounded-xl px-6 py-3.5 transition-[transform,opacity] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
      dark
        ? "bg-[#1A1A1A] text-white focus-visible:ring-[#83F6CC] focus-visible:ring-offset-transparent"
        : "bg-white text-[#1A1A1A] focus-visible:ring-[#8B6FE8] focus-visible:ring-offset-[#2d1f4e]"
    }`}
  >
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
    <div className="flex flex-col items-start">
      <span className="text-xs opacity-70">Download on the</span>
      <span className="text-lg font-semibold leading-tight">App Store</span>
    </div>
  </a>
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />

      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2d1f4e] to-[#1a3028] px-6 pb-0 pt-16 text-center lg:px-20">
          {/* Radial glows */}
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-[400px] w-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(139,111,232,0.25) 0%, transparent 65%)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -right-20 h-[350px] w-[350px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(131,246,204,0.15) 0%, transparent 65%)" }}
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-4xl">
            {/* Social proof badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-[#FFD93D]" aria-hidden="true">★★★★★</span>
              <span className="text-sm font-medium text-white/90">
                <span className="sr-only">Rated 4.8 out of 5.</span>
                <span aria-hidden="true">4.8 · 100+ App Store reviews</span>
              </span>
            </div>

            <h1 className="text-balance text-[clamp(36px,6vw,52px)] font-extrabold leading-tight tracking-tight text-white">
              Your{" "}
              <span className="text-[#83F6CC]">emotional wellness</span>{" "}
              companion.
            </h1>

            <p className="mx-auto mt-5 max-w-[420px] text-lg leading-relaxed text-white/65">
              Log how you&apos;re feeling in 2 seconds. See patterns. Get personalized activities to feel better right now.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3">
              <AppStoreButton />
              <p className="text-sm text-white/40">Free to start · iOS only</p>
            </div>

            {/* Phone mockups row */}
            <div className="relative mt-12 flex items-end justify-center gap-4">
              {/* Floating bubbles — hidden on mobile */}
              <div
                className="absolute left-[5%] top-4 hidden rounded-2xl border border-white/20 bg-white/12 px-3 py-2 backdrop-blur-md lg:block"
                aria-hidden="true"
              >
                <p className="text-[9px] text-white/60">Current streak</p>
                <p className="text-sm font-bold text-white">🔥 30 days</p>
              </div>
              <div
                className="absolute right-[5%] top-8 hidden rounded-2xl border border-white/20 bg-white/12 px-3 py-2 backdrop-blur-md lg:block"
                aria-hidden="true"
              >
                <p className="text-[9px] text-white/60">Today&apos;s mood</p>
                <p className="text-sm font-bold text-[#83F6CC]">😊 Great</p>
              </div>
              <div
                className="absolute bottom-12 left-[12%] hidden rounded-2xl bg-[#83F6CC] px-3 py-2 lg:block"
                aria-hidden="true"
              >
                <p className="text-[9px] text-[#0a6648]">Level</p>
                <p className="text-sm font-bold text-[#0a6648]">⭐ Level 5</p>
              </div>

              {/* Left phone — hidden on mobile */}
              <div className="hidden -translate-y-[-12px] rotate-[-8deg] overflow-hidden rounded-[22px] bg-[#0d0d0d] shadow-[0_28px_70px_rgba(0,0,0,0.5)] lg:block">
                <div className="relative h-[216px] w-[120px]">
                  <Image
                    src="/images/mood-fast_mood.png"
                    alt="Mood Fast mood tracking screen"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Center phone — always visible */}
              <div className="overflow-hidden rounded-[22px] bg-[#0d0d0d] shadow-[0_28px_70px_rgba(0,0,0,0.5)]">
                <div className="relative h-[252px] w-[140px]">
                  <Image
                    src="/images/mood-fast_home.png"
                    alt="Mood Fast home screen"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Right phone — hidden on mobile */}
              <div className="hidden translate-y-3 rotate-[8deg] overflow-hidden rounded-[22px] bg-[#0d0d0d] shadow-[0_28px_70px_rgba(0,0,0,0.5)] lg:block">
                <div className="relative h-[216px] w-[120px]">
                  <Image
                    src="/images/mood-fast_progress.png"
                    alt="Mood Fast progress screen"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ── */}
        <section className="border-t border-[rgba(139,111,232,0.2)] bg-[#111] px-6 py-5">
          <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              "🔒 Encrypted storage",
              "🍎 Sign in with Apple",
              "🚫 Never sold or shared",
              "🔐 Firebase-authenticated",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-[#83F6CC]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
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
                  Four core pillars, built to work together — each one takes seconds, not minutes.
                </p>
              </div>
            </ScrollReveal>
            <FeatureTabs />
          </div>
        </section>

        {/* ── SOCIAL PROOF ── */}
        <section className="bg-white px-6 py-20 lg:px-20">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal variant="fade-up">
              <h2 className="text-balance text-center text-3xl font-extrabold text-[#1A1A1A]">
                What people are saying
              </h2>
              <p className="mt-2 text-center text-sm text-[#6B7280]">
                Real reviews from the App Store
              </p>
            </ScrollReveal>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <ScrollReveal key={t.name} variant="fade-up" delay={i * 100}>
                  <div className="rounded-[18px] border border-[rgba(139,111,232,0.1)] bg-[#faf9ff] p-6">
                    <div className="mb-3 text-[#FFD93D]" aria-label={`${t.stars} out of 5 stars`}>
                      {"★".repeat(t.stars)}
                    </div>
                    <p className="leading-relaxed text-[#1A1A1A]">&ldquo;{t.text}&rdquo;</p>
                    <p className="mt-4 text-sm font-semibold text-[#8B6FE8]">— {t.name}, App Store</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="bg-[#faf9ff] px-6 py-20 lg:px-20">
          <div className="mx-auto max-w-[700px]">
            <ScrollReveal variant="fade-up">
              <h2 className="text-balance text-center text-3xl font-extrabold text-[#1A1A1A]">
                Start free. Go deeper with PRO.
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-center text-[#6B7280]">
                The free tier is genuinely useful. PRO is for when you want the full picture.
              </p>
            </ScrollReveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <ScrollReveal variant="fade-right" delay={100}>
                <div className="rounded-3xl border border-[rgba(139,111,232,0.15)] bg-white p-8">
                  <p className="text-sm font-semibold text-[#9CA3AF]">Free</p>
                  <p className="mt-2 text-4xl font-extrabold tabular-nums text-[#1A1A1A]">$0</p>
                  <p className="mt-1 text-sm text-[#9CA3AF]">Forever free</p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "2 mood check-ins per day",
                      "30-day mood history",
                      "Guided wellness activities",
                      "Gratitude journal",
                      "Streaks & progress tracking",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[#6B7280]">
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
                </div>
              </ScrollReveal>
              <ScrollReveal variant="fade-left" delay={200}>
                <div className="rounded-3xl bg-[#1A1A1A] p-8">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white/50">PRO</p>
                    <span className="rounded-full bg-[#8B6FE8] px-3 py-1 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  </div>
                  <p className="mt-2 text-4xl font-extrabold tabular-nums text-white">$4.99</p>
                  <p className="mt-1 text-sm text-white/40">per month · or $29.99/year (save 50%)</p>
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
                      <li key={item} className="flex items-center gap-2 text-white/75">
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
                </div>
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
```

- [ ] **Step 2: Verify full page renders**

Open http://localhost:3000 and scroll through the full page. Check for:
- No TypeScript errors in the terminal
- Dark hero with 3 phones (center phone visible on all screens, side phones on desktop)
- Trust strip below hero
- Feature tabs working (click each tab — screenshot and text should swap)
- Social proof cards with purple author names
- Pricing cards (free white card, PRO dark card with purple button)
- FAQ accordion with purple chevrons
- Final CTA with same dark gradient as hero
- Dark footer

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "redesign: full landing page — dark hero, feature tabs, trust strip, updated sections"
```

---

## Task 6: Production build verification

**Files:** None modified

- [ ] **Step 1: Run production build**

```bash
cd /Users/webspacedeveloper/Documents/projects/mood-fast-landing && npm run build
```

Expected: Build completes with no errors. Warnings about image optimization are acceptable.

- [ ] **Step 2: Smoke-test production build**

```bash
npm run start
```

Open http://localhost:3000. Confirm the page looks identical to dev. Kill the server with Ctrl+C.

- [ ] **Step 3: Verify responsive layout**

In browser DevTools, check at:
- 375px (iPhone SE) — single phone visible, no floating bubbles, tab bar scrollable
- 768px (tablet) — feature panel stacked, pricing 2-col
- 1280px (desktop) — 3 phones, floating bubbles, feature panel side-by-side

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "redesign: verify production build passes"
```

---

## Implementation Complete

All 6 tasks done means:
- `Header.tsx` — dark sticky, white nav, white pill CTA ✓
- `Footer.tsx` — dark `#111`, gradient logo dot ✓
- `FaqAccordion.tsx` — purple accent colors ✓
- `FeatureTabs.tsx` — interactive 4-tab feature switcher ✓
- `page.tsx` — all 9 sections per spec ✓
- Production build passing ✓
