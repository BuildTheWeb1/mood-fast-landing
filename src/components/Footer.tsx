export function Footer() {
  return (
    <footer className="bg-[#111] py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 md:flex-row md:justify-between md:px-12">
        <div className="flex items-center gap-2">
          <div className="h-[22px] w-[22px] rounded-[6px] bg-gradient-to-br from-[#8B6FE8] to-[#83F6CC]" />
          <span className="text-sm font-semibold text-white">Mood Fast</span>
        </div>
        <p className="text-sm text-white/35">
          © 2025–{new Date().getFullYear()} Mood Fast. All rights reserved.
        </p>
        <a
          href="https://x.com/buildtheweb1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/40 transition-opacity hover:opacity-70"
        >
          <span className="text-sm">follow on</span>
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
