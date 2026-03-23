"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is Mood Fast free?",
    answer:
      "Free to download with no time limit. Log your mood, track patterns, and follow a gratitude practice at $0. PRO ($4.99/month or $29.99/year) unlocks unlimited daily check-ins, your full mood history, advanced analytics, custom reminders, and data export.",
  },
  {
    question: "Why should I upgrade to PRO?",
    answer:
      "The free tier covers daily habits. PRO is for going deeper: unlimited check-ins per day, your complete mood history (up to 10 years), advanced analytics, custom reminder schedules, data export as CSV, JSON, or PDF, and access to premium activities. Most people upgrade after 30 days when they want to keep their full history.",
  },
  {
    question: "How long does it take to log a mood?",
    answer:
      "Just 2 seconds. Tap how you're feeling and you're done. Optional notes are there if you want them — never required.",
  },
  {
    question: "How is this different from journaling?",
    answer:
      "Traditional journaling is open-ended writing — it takes time and rarely shows you patterns. Mood Fast is a 2-second tap. Your mood calendar does the pattern-finding for you, so you see trends you'd never catch in a notebook.",
  },
  {
    question: "What if I miss a day?",
    answer:
      "One missed day won't erase your progress. Your mood history and patterns are all still there when you come back. Streaks reset, but your data doesn't.",
  },
  {
    question: "Is my data private?",
    answer:
      "Absolutely. Your mood data is encrypted and stored securely. We never sell or share your personal information. You can export or delete your data at any time from the app settings.",
  },
  {
    question: "Can I export my data?",
    answer:
      "PRO users can export their full mood history as CSV, JSON, or PDF at any time from the app settings.",
  },
  {
    question: "Does it work offline?",
    answer:
      "Yes. Log moods offline and they sync automatically when you're back online.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={faq.question}
          className="overflow-hidden rounded-2xl border border-[#f0eaff] bg-white"
        >
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index ? (
            <div className="px-6 pb-5">
              <p className="leading-relaxed text-[#6B7280]">{faq.answer}</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
