"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

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
      <div className="rounded-3xl bg-white p-8 shadow-[0_2px_20px_rgba(139,111,232,0.08)] md:p-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeIndex}
            className="flex flex-col items-center gap-10 md:flex-row md:gap-12 w-full"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {/* Phone mockup */}
            <div className="relative h-[440px] w-[244px] flex-shrink-0 overflow-hidden rounded-[34px] bg-[#1A1A1A] shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
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
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#83F6CC]" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
