import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Mood Fast. Learn about pricing, privacy, data export, offline mode, and how the mood tracking app works.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
