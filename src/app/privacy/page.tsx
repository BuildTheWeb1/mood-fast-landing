import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Mood Fast protects your privacy. Your mood data is encrypted, AI processing happens on-device, and we never sell your personal information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F5F5] font-sans">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-12">
          <h1 className="text-4xl font-bold text-[#1A1A1A]">Privacy Policy</h1>
          <p className="mt-2 text-sm text-[#6B7280]">
            Last Updated: December 2025
          </p>

          <div className="mt-10 space-y-8">
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
        </div>
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
    <div>
      <h2 className="mb-3 text-xl font-semibold text-[#1A1A1A]">{title}</h2>
      <div className="text-[#6B7280] leading-relaxed">{children}</div>
    </div>
  );
}
