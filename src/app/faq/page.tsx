"use client";

import { FaqAccordion } from "@/components/FaqAccordion";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
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
