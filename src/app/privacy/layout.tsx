import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Mood Fast protects your privacy. Your mood data is encrypted, AI processing happens on-device, and we never sell your personal information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
