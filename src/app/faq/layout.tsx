import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "FAQs about Mood Fast: pricing, privacy, data export, offline mode, and how our mood tracking app works.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
