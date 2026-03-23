"use client";

import { motion } from "framer-motion";
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
    <svg
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
    <div className="flex flex-col items-start">
      <span className="text-xs opacity-60">Download on the</span>
      <span className="text-lg font-semibold leading-tight">App Store</span>
    </div>
  </motion.a>
);

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f0eaff] via-[#faf9ff] to-white px-6 pb-16 pt-48 text-center lg:px-20">
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-[400px] w-[400px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(139,111,232,0.15) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-3xl">
            <ScrollReveal variant="fade-up">
              <div className="mb-4 inline-flex items-center rounded-full border border-[rgba(139,111,232,0.2)] bg-[#f0eaff] px-4 py-2 text-sm font-medium text-[#8B6FE8]">
                Last Updated: December 2025
              </div>
              <h1 className="text-4xl font-extrabold text-[#1A1A1A] md:text-5xl">
                Privacy Policy
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CONTENT ── */}
        <section className="bg-[#faf9ff] px-6 py-20 lg:px-20">
          <div className="mx-auto max-w-3xl space-y-6">
            <Section title="Introduction">
              Mood Fast is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, and safeguard your
              information when you use Mood Fast.
            </Section>

            <Section title="Information We Collect">
              <p className="mb-3">
                <strong>Account Information:</strong>
              </p>
              <ul className="mb-4 list-inside list-disc space-y-1 text-[#6B7280]">
                <li>Name and email address (from Sign in with Apple)</li>
                <li>Profile photo (if you choose to add one)</li>
              </ul>

              <p className="mb-3">
                <strong>Mood and Wellness Data:</strong>
              </p>
              <ul className="mb-4 list-inside list-disc space-y-1 text-[#6B7280]">
                <li>Mood entries and intensity levels</li>
                <li>Journal notes you write</li>
                <li>Activity session history</li>
                <li>Progress and streak data</li>
              </ul>

              <p className="mb-3">
                <strong>App Usage:</strong>
              </p>
              <ul className="list-inside list-disc space-y-1 text-[#6B7280]">
                <li>Notification preferences</li>
                <li>Favorite activities</li>
              </ul>
            </Section>

            <Section title="How We Use Your Information">
              <p className="mb-3">We use your information to:</p>
              <ul className="list-inside list-disc space-y-1 text-[#6B7280]">
                <li>Provide and personalize the Mood Fast experience</li>
                <li>Track your mood patterns and progress</li>
                <li>Generate insights about your emotional wellbeing</li>
                <li>Send you reminders and notifications (if enabled)</li>
                <li>Improve the app&apos;s features and functionality</li>
              </ul>
            </Section>

            <Section title="Data Storage">
              Your data is stored securely using Firebase, a service provided by
              Google. Your mood entries, journal notes, and progress data are
              associated with your account and stored in the cloud to enable
              syncing across devices.
              <br />
              <br />
              We implement appropriate security measures to protect your data
              from unauthorized access.
            </Section>

            <Section title="On-Device AI Processing">
              Mood Fast uses Apple Foundation Models for AI-powered features
              such as personalized insights, journal companion, and activity
              recommendations.
              <br />
              <br />
              <strong>Important:</strong> All AI processing happens entirely on
              your device. Your mood data, journal entries, and personal
              information are never sent to external AI servers. This ensures
              your private thoughts and feelings remain private.
            </Section>

            <Section title="Data Sharing">
              We do not sell your personal information to third parties.
              <br />
              <br />
              We may share data only in the following circumstances:
              <ul className="mt-3 list-inside list-disc space-y-1 text-[#6B7280]">
                <li>
                  With service providers who help us operate the app (e.g.,
                  Firebase for data storage)
                </li>
                <li>If required by law or legal process</li>
                <li>To protect the rights and safety of our users</li>
              </ul>
            </Section>

            <Section title="Your Rights">
              <p className="mb-3">You have the right to:</p>
              <ul className="mb-4 list-inside list-disc space-y-1 text-[#6B7280]">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your account and associated data</li>
                <li>Export your data</li>
                <li>Opt out of notifications</li>
              </ul>
              You can manage most of these options in the app&apos;s Settings.
            </Section>

            <Section title="Data Retention">
              We retain your data for as long as your account is active. If you
              delete your account, we will delete your personal data within 30
              days, except where we are required to retain it for legal
              purposes.
            </Section>

            <Section title="Children's Privacy">
              Mood Fast is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children under
              13.
            </Section>

            <Section title="Changes to This Policy">
              We may update this Privacy Policy from time to time. We will
              notify you of any significant changes through the app. Your
              continued use of Mood Fast after changes are posted constitutes
              your acceptance of the updated policy.
            </Section>

            <Section title="Contact Us">
              If you have questions or concerns about this Privacy Policy or
              your data, please contact us through the app&apos;s support
              feature.
            </Section>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2d1f4e] to-[#1a3028] px-6 py-20 text-center lg:px-20">
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-[350px] w-[350px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(139,111,232,0.2) 0%, transparent 65%)",
            }}
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
                <p className="text-sm text-white/40">
                  Free to download. No pressure.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="rounded-2xl border border-[rgba(139,111,232,0.1)] bg-white p-8"
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(139,111,232,0.15)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <h2 className="mb-3 border-l-4 border-[#8B6FE8] pl-4 text-xl font-semibold text-[#1A1A1A]">
        {title}
      </h2>
      <div className="leading-relaxed text-[#6B7280]">{children}</div>
    </motion.div>
  );
}
