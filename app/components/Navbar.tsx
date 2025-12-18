import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full max-w-[640px] mx-auto px-4 pt-16 pb-6 border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-wrap items-center gap-6 text-sm">
        <Link
          href="/"
          className="font-medium text-foreground hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
        >
          raymond chan
        </Link>
        
        <div className="flex items-center gap-6 ml-auto">
          <Link
            href="/projects"
            className="text-foreground hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
          >
            projects
          </Link>

          <span className="text-zinc-400 dark:text-zinc-600">•</span>

          <Link
            href="/projects"
            className="text-foreground hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
          >
            notes
          </Link>
          
          <span className="text-zinc-400 dark:text-zinc-600">•</span>
          
          <button
            className="text-foreground hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
            aria-label="Toggle theme"
          >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

