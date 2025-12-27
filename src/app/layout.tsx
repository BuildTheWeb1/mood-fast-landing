import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://mood-fast-landing.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mood Fast - Track Your Mood in Seconds | iOS App",
    template: "%s | Mood Fast",
  },
  description:
    "Track your mood in just 2 seconds, discover emotional patterns, and get personalized wellness activities. Free iOS app for mental health and emotional wellness.",
  keywords: [
    "mood tracker app",
    "emotional wellness app",
    "mental health tracker",
    "mood journal",
    "daily mood log",
    "anxiety tracker",
    "mood patterns",
    "gratitude journal app",
    "wellness activities",
    "mood analytics",
    "iOS mood app",
    "mental health app",
  ],
  authors: [{ name: "Mood Fast" }],
  creator: "Mood Fast",
  publisher: "Mood Fast",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mood Fast",
    title: "Mood Fast - Track Your Mood in Seconds | iOS App",
    description:
      "Track your mood in just 2 seconds, discover emotional patterns, and get personalized wellness activities. Free iOS app for mental health.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mood Fast - Your Personal Companion for Emotional Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mood Fast - Track Your Mood in Seconds",
    description:
      "Track your mood in just 2 seconds, discover patterns, and get personalized wellness activities. Free on the App Store.",
    images: ["/images/og-image.png"],
    creator: "@buildtheweb1",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Health & Wellness",
  appLinks: {
    ios: {
      url: "https://apps.apple.com/app/mood-fast",
      app_store_id: "mood-fast",
      app_name: "Mood Fast",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
