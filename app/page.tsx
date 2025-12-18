import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full max-w-[640px] mx-auto px-4 py-12">
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <h1 className="text-3xl font-semibold mb-6">Welcome, I'm Raymond</h1>

        <ul className="grid gap-2 text-base font-light">
          <li className="group flex items-start gap-3 pl-5 relative transition-all duration-200 hover:opacity-80">
            <div className="absolute left-0 top-[12px] w-[5px] h-[5px] rounded-full bg-zinc-700 dark:bg-zinc-300 transform transition-all duration-200 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 group-hover:w-[6px] group-hover:h-[6px]" />
            <span className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              CS @ UToronto with focus in technology leadership and artificial intelligence
            </span>
          </li>

          <li className="group flex items-start gap-3 pl-5 relative transition-all duration-200 hover:opacity-80">
            <div className="absolute left-0 top-[12px] w-[5px] h-[5px] rounded-full bg-zinc-700 dark:bg-zinc-300 transform transition-all duration-200 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 group-hover:w-[6px] group-hover:h-[6px]" />
            <span className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Interested in distributed systems, cloud infrastructure and applied AI
            </span>
          </li>

          <li className="group flex flex-col gap-2.5 pl-5 relative transition-all duration-200 hover:opacity-80">
            <div className="absolute left-0 top-[12px] w-[5px] h-[5px] rounded-full bg-zinc-700 dark:bg-zinc-300 transform transition-all duration-200 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 group-hover:w-[6px] group-hover:h-[6px]" />
            <span className="text-zinc-700 dark:text-zinc-300 font-medium not-italic">
              currently
            </span>
            <ul className="grid gap-1.5 pl-5">
              <li className="relative pl-5 transition-opacity duration-200 hover:opacity-70">
                <span className="absolute left-0 top-0 text-zinc-500 dark:text-zinc-400 text-sm">→</span>
                <span className="text-zinc-600 dark:text-zinc-400">senior developer @uoft blueprint</span>
              </li>
            </ul>
          </li>

          <li className="group flex flex-col gap-2.5 pl-5 relative transition-all duration-200 hover:opacity-80">
            <div className="absolute left-0 top-[12px] w-[5px] h-[5px] rounded-full bg-zinc-700 dark:bg-zinc-300 transform transition-all duration-200 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 group-hover:w-[6px] group-hover:h-[6px]" />
            <span className="text-zinc-700 dark:text-zinc-300 font-medium not-italic">
              previously:
            </span>
            <ul className="grid gap-1.5 pl-5">
              <li className="relative pl-5 transition-opacity duration-200 hover:opacity-70">
                <span className="absolute left-0 top-0 text-zinc-500 dark:text-zinc-400 text-sm">→</span>
                <span className="text-zinc-600 dark:text-zinc-400">software developer @fairloft</span>
              </li>
              <li className="relative pl-5 transition-opacity duration-200 hover:opacity-70">
                <span className="absolute left-0 top-0 text-zinc-500 dark:text-zinc-400 text-sm">→</span>
                <span className="text-zinc-600 dark:text-zinc-400">software developer @uoftMarket</span>
              </li>
              
            </ul>
          </li>

          <li className="group flex flex-col gap-2.5 pl-5 relative transition-all duration-200 hover:opacity-80">
            <div className="absolute left-0 top-[12px] w-[5px] h-[5px] rounded-full bg-zinc-700 dark:bg-zinc-300 transform transition-all duration-200 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 group-hover:w-[6px] group-hover:h-[6px]" />
            <span className="text-zinc-700 dark:text-zinc-300 font-medium not-italic">
              what i've been building:
            </span>
            <ul className="grid gap-1.5 pl-5">
              <li className="relative pl-5 transition-opacity duration-200 hover:opacity-70">
                <span className="absolute left-0 top-0 text-zinc-500 dark:text-zinc-400 text-sm">→</span>
                <span className="text-zinc-600 dark:text-zinc-400">built a marketplace for Uoft students to 1,000+ users with 50,000+ views</span>
              </li>
              <li className="relative pl-5 transition-opacity duration-200 hover:opacity-70">
                <span className="absolute left-0 top-0 text-zinc-500 dark:text-zinc-400 text-sm">→</span>
                <span className="text-zinc-600 dark:text-zinc-400">built out features for golf platform</span>
              </li>
              <li className="relative pl-5 transition-opacity duration-200 hover:opacity-70">
                <span className="absolute left-0 top-0 text-zinc-500 dark:text-zinc-400 text-sm">→</span>
                <span className="text-zinc-600 dark:text-zinc-400">created a cli tool and extention for architecture control for codebases </span>
              </li>
              
            </ul>
          </li>

          <li className="group flex flex-col gap-2.5 pl-5 relative transition-all duration-200 hover:opacity-80">
            <div className="absolute left-0 top-[12px] w-[5px] h-[5px] rounded-full bg-zinc-700 dark:bg-zinc-300 transform transition-all duration-200 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 group-hover:w-[6px] group-hover:h-[6px]" />
            <span className="text-zinc-700 dark:text-zinc-300 font-medium not-italic">
              contact:
            </span>
            <ul className="grid gap-1.5 pl-5">
              <li className="relative pl-5 transition-opacity duration-200 hover:opacity-70">
                <span className="absolute left-0 top-0 text-zinc-500 dark:text-zinc-400 text-sm">→</span>
                <Link href="" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 underline">
                  LinkedIn
                </Link>
              </li>
              <li className="relative pl-5 transition-opacity duration-200 hover:opacity-70">
                <span className="absolute left-0 top-0 text-zinc-500 dark:text-zinc-400 text-sm">→</span>
                <Link href="" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 underline">
                  GitHub
                </Link>
              </li>
              <li className="relative pl-5 transition-opacity duration-200 hover:opacity-70">
                <span className="absolute left-0 top-0 text-zinc-500 dark:text-zinc-400 text-sm">→</span>
                <Link href="" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 underline">
                  Email
                </Link>
              </li>
              <li className="relative pl-5 transition-opacity duration-200 hover:opacity-70">
                <span className="absolute left-0 top-0 text-zinc-500 dark:text-zinc-400 text-sm">→</span>
                <Link href="" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 underline">
                  Repo
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </article>
    </main>
  );
}
