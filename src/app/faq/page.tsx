"use client";

import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const faqs = [
	{
		question: "Is Mood Fast free?",
		answer:
			"Yes! Mood Fast is free to download and use. The free version includes mood tracking, basic insights, and access to 10 wellness activities. PRO unlocks unlimited features.",
	},
	{
		question: "How long does it take to log a mood?",
		answer:
			"Just 2 seconds! Simply tap how you're feeling and you're done. Add optional notes if you want to journal more.",
	},
	{
		question: "Is my data private?",
		answer:
			"Absolutely. Your mood data is encrypted and stored securely. We never sell your personal information. All AI processing happens on-device, so your private thoughts stay private.",
	},
	{
		question: "Can I export my data?",
		answer:
			"PRO users can export their mood history as CSV, JSON, or PDF reports at any time.",
	},
	{
		question: "Does it work offline?",
		answer:
			"Yes! You can log moods offline and they'll sync when you're back online.",
	},
];

export default function FAQPage() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<div className="flex min-h-screen flex-col bg-[#F5F5F5] font-sans">
			<Header />
			<main className="flex-1">
				<div className="mx-auto max-w-3xl px-6 py-16 md:px-12">
					<h1 className="text-4xl font-bold text-[#1A1A1A]">
						Frequently Asked Questions
					</h1>
					<p className="mt-4 text-lg text-[#6B7280]">
						Everything you need to know about Mood Fast.
					</p>

					<div className="mt-10 space-y-4">
						{faqs.map((faq, index) => (
							<div
								key={faq.question}
								className="overflow-hidden rounded-2xl bg-white shadow-sm"
							>
								<button
									type="button"
									onClick={() =>
										setOpenIndex(openIndex === index ? null : index)
									}
									className="flex w-full items-center justify-between px-6 py-5 text-left"
								>
									<span className="text-lg font-medium text-[#1A1A1A]">
										{faq.question}
									</span>
									<svg
										className={`h-5 w-5 text-[#6B7280] transition-transform ${
											openIndex === index ? "rotate-180" : ""
										}`}
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
								{openIndex === index && (
									<div className="px-6 pb-5">
										<p className="leading-relaxed text-[#6B7280]">
											{faq.answer}
										</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
