import Image from "next/image";
import Link from "next/link";

export function Header() {
	return (
		<header className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
			<Link href="/" className="flex items-center gap-2">
				<Image
					src="/images/mood-fast_logo.png"
					alt="Mood Fast logo"
					width={40}
					height={40}
					priority
				/>
				<span className="text-xl font-bold text-[#1A1A1A]">Mood Fast</span>
			</Link>
			<nav className="hidden items-center gap-8 md:flex">
				<Link
					href="/how-it-works"
					className="text-[#6B7280] transition-colors hover:text-[#1A1A1A]"
				>
					How it works
				</Link>
				<Link
					href="/privacy"
					className="text-[#6B7280] transition-colors hover:text-[#1A1A1A]"
				>
					Privacy
				</Link>
				<Link
					href="/faq"
					className="text-[#6B7280] transition-colors hover:text-[#1A1A1A]"
				>
					FAQ
				</Link>
			</nav>
			<a
				href="https://apps.apple.com/app/mood-fast"
				className="rounded-full bg-[#1A1A1A] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#333]"
			>
				Download
			</a>
		</header>
	);
}
