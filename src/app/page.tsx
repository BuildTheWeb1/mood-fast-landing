import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex h-screen flex-col bg-[#F5F5F5] font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative flex-1 overflow-hidden px-6 lg:px-20">
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center">
          {/* Left floating image - skewed */}
          <div className="absolute left-0 top-1/4 hidden -translate-x-1/4 lg:block">
            <ScrollReveal variant="fade-right" delay={200} duration={800}>
              <div className="relative h-[400px] w-[200px] -rotate-12 transform overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:-rotate-6">
                <Image
                  src="/images/mood-fast_home.png"
                  alt="Mood Fast home screen"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right floating image - skewed */}
          <div className="absolute right-0 top-1/3 hidden translate-x-1/4 lg:block">
            <ScrollReveal variant="fade-left" delay={400} duration={800}>
              <div className="relative h-[400px] w-[200px] rotate-12 transform overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:rotate-6">
                <Image
                  src="/images/mood-fast_progress.png"
                  alt="Mood Fast progress screen"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-[#1A1A1A] md:text-6xl lg:text-7xl">
              Track Your Mood, <span className="text-[#60B5FF]">Transform</span>{" "}
              Your Life.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-[#6B7280] md:text-xl">
              Log your mood in just 2 seconds, discover patterns, and get
              personalized activities to feel your best every day.
            </p>

            {/* App Store Button */}
            <div className="mt-10 flex flex-col items-center gap-4">
              <a
                href="https://apps.apple.com/app/mood-fast"
                className="inline-flex items-center gap-3 rounded-xl bg-[#1A1A1A] px-6 py-3.5 text-white transition-transform hover:scale-105"
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
                  <span className="text-xs opacity-80">Download on the</span>
                  <span className="text-lg font-semibold leading-tight">
                    App Store
                  </span>
                </div>
              </a>
              <p className="text-sm text-[#6B7280]">
                Free to download • iOS only
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
