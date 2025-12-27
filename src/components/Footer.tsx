export function Footer() {
	return (
		<footer className="py-6">
			<div className="mx-auto max-w-7xl px-6 text-center md:px-12">
				<a
					href="https://x.com/buildtheweb1"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 text-[#1A1A1A] transition-opacity hover:opacity-70"
				>
					<span>follow on</span>
					<svg
						className="h-4 w-4"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden="true"
					>
						<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
					</svg>
				</a>
				<p className="mt-2 text-sm text-[#1A1A1A]">
					© 2025 Mood Fast. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
