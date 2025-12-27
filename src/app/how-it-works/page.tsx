import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const features = [
	{
		title: "Track How You Feel",
		description:
			"Log your mood in seconds and discover patterns over time. Build daily streaks and stay consistent with your emotional wellness journey.",
		points: [
			"Quick 2-second mood check-ins",
			"Visual mood trends & insights",
			"Build daily streaks",
		],
		icon: (
			<svg
				className="h-8 w-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
	},
	{
		title: "Get Personalized Support",
		description:
			"Receive activities tailored to how you're feeling right now. From breathing exercises to movement routines, find what works for you.",
		points: [
			"Breathing exercises for calm",
			"Movement to boost energy",
			"Mindfulness & reframing techniques",
		],
		icon: (
			<svg
				className="h-8 w-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
				/>
			</svg>
		),
	},
	{
		title: "Discover Your Patterns",
		description:
			"Visualize your emotional journey with beautiful charts and AI-powered insights. Understand what affects your mood and make informed decisions.",
		points: [
			"Weekly and monthly mood graphs",
			"AI-generated insights",
			"Pattern recognition",
		],
		icon: (
			<svg
				className="h-8 w-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
				/>
			</svg>
		),
	},
	{
		title: "Practice Daily Gratitude",
		description:
			"Start each day with intention. Our guided gratitude prompts help you focus on the positive and build a more optimistic mindset.",
		points: [
			"Daily gratitude prompts",
			"Journal your thoughts",
			"Track your gratitude streak",
		],
		icon: (
			<svg
				className="h-8 w-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
				/>
			</svg>
		),
	},
	{
		title: "Celebrate Your Progress",
		description:
			"Stay motivated with achievements, streaks, and weekly goals. Watch your emotional wellness journey unfold.",
		points: ["Unlock achievements", "Set weekly goals", "Track your streaks"],
		icon: (
			<svg
				className="h-8 w-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
				/>
			</svg>
		),
	},
];

export default function HowItWorksPage() {
	return (
		<div className="flex min-h-screen flex-col bg-[#F5F5F5] font-sans">
			<Header />
			<main className="flex-1">
				<div className="mx-auto max-w-5xl px-6 py-16 md:px-12">
					<div className="text-center">
						<h1 className="text-4xl font-bold text-[#1A1A1A] md:text-5xl">
							How It Works
						</h1>
						<p className="mx-auto mt-4 max-w-2xl text-lg text-[#6B7280]">
							Mood Fast makes emotional wellness simple. Here&apos;s how you can
							transform your life in just a few steps.
						</p>
					</div>

					{/* Steps */}
					<div className="mt-16 grid gap-8 md:grid-cols-3">
						<StepCard
							number="1"
							title="Log your mood"
							description="Open the app and tap how you're feeling. It takes just 2 seconds."
						/>
						<StepCard
							number="2"
							title="Get recommendations"
							description="Receive personalized activities based on your current mood."
						/>
						<StepCard
							number="3"
							title="Track progress"
							description="Watch your patterns emerge and celebrate your wellness journey."
						/>
					</div>

					{/* Features */}
					<div className="mt-20">
						<h2 className="text-center text-3xl font-bold text-[#1A1A1A]">
							Features
						</h2>
						<div className="mt-12 space-y-12">
							{features.map((feature, index) => (
								<div
									key={feature.title}
									className={`flex flex-col items-center gap-8 md:flex-row ${
										index % 2 === 1 ? "md:flex-row-reverse" : ""
									}`}
								>
									<div className="flex-1">
										<div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#60B5FF]/10 text-[#60B5FF]">
											{feature.icon}
										</div>
										<h3 className="text-2xl font-semibold text-[#1A1A1A]">
											{feature.title}
										</h3>
										<p className="mt-3 text-[#6B7280] leading-relaxed">
											{feature.description}
										</p>
										<ul className="mt-4 space-y-2">
											{feature.points.map((point) => (
												<li
													key={point}
													className="flex items-center gap-2 text-[#6B7280]"
												>
													<svg
														className="h-5 w-5 text-[#83F6CC]"
														fill="currentColor"
														viewBox="0 0 20 20"
														aria-hidden="true"
													>
														<path
															fillRule="evenodd"
															d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
															clipRule="evenodd"
														/>
													</svg>
													{point}
												</li>
											))}
										</ul>
									</div>
									<div className="flex-1">
										<div className="relative mx-auto h-[400px] w-[200px] overflow-hidden rounded-3xl bg-white shadow-xl">
											<Image
												src={`/images/mood-fast_${index === 0 ? "home" : index === 1 ? "mood" : "progress"}.png`}
												alt={`${feature.title} screenshot`}
												fill
												className="object-cover object-top"
											/>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

function StepCard({
	number,
	title,
	description,
}: {
	number: string;
	title: string;
	description: string;
}) {
	return (
		<div className="rounded-2xl bg-white p-6 shadow-sm">
			<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#60B5FF] text-lg font-bold text-white">
				{number}
			</div>
			<h3 className="text-xl font-semibold text-[#1A1A1A]">{title}</h3>
			<p className="mt-2 text-[#6B7280]">{description}</p>
		</div>
	);
}
