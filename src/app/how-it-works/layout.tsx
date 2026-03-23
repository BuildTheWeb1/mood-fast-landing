import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how Mood Fast helps you track your mood in 2 seconds, get personalized wellness activities, and discover emotional patterns through your mood calendar and visual analytics.",
  alternates: {
    canonical: "/how-it-works",
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
