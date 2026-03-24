"use client";

import { FaqAccordion } from "@/components/FaqAccordion";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Mood Fast free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free to download with no time limit. Log your mood, track patterns, and follow a gratitude practice at $0. PRO ($4.99/month or $29.99/year) unlocks unlimited daily check-ins, your full mood history, advanced analytics, custom reminders, and data export.",
      },
    },
    {
      "@type": "Question",
      name: "Is Mood Fast a replacement for therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — Mood Fast is a self-awareness tool, not therapy. It helps you spot patterns and try evidence-based activities like breathing and grounding exercises. If you're dealing with clinical depression or anxiety, please see a professional. That said, many users find Mood Fast makes therapy more effective — you'll have real data to bring to sessions.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I upgrade to PRO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The free tier covers daily habits. PRO is for going deeper: unlimited check-ins per day, your complete mood history (up to 10 years), advanced analytics, custom reminder schedules, data export as CSV, JSON, or PDF, and access to premium activities. Most people upgrade after 30 days when they want to keep their full history.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to log a mood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Just 2 seconds. Tap how you're feeling and you're done. Optional notes are there if you want them — never required.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from journaling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional journaling is open-ended writing — it takes time and rarely shows you patterns. Mood Fast is a 2-second tap. Your mood calendar does the pattern-finding for you, so you see trends you'd never catch in a notebook.",
      },
    },
    {
      "@type": "Question",
      name: "What if I miss a day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One missed day won't erase your progress. Your mood history and patterns are all still there when you come back. Streaks reset, but your data doesn't.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your data is encrypted end-to-end and stored securely on your device. We never sell, share, or use your mood data to train AI models. Period. You own your data — export or delete it anytime from the app.",
      },
    },
    {
      "@type": "Question",
      name: "Can I export my data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PRO users can export their full mood history as CSV, JSON, or PDF at any time from the app settings.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Log moods offline and they sync automatically when you're back online.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        suppressHydrationWarning
      />
      <Header />
      <main className="flex-1 px-6 pb-20 pt-48 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-10 text-3xl font-extrabold text-[#1A1A1A] md:text-4xl">
            Common Questions
          </h1>
          <FaqAccordion />
        </div>
      </main>
      <Footer />
    </div>
  );
}
