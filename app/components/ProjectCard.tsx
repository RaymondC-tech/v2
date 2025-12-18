import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  href?: string;
  github?: string;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  date,
  href,
  github,
  className,
}: ProjectCardProps) {
  return (
    <div className={`border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0 ${className || ""}`}>
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="flex-1">
          {href ? (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-300 font-medium text-xl hover:text-zinc-900 dark:hover:text-zinc-100 underline"
            >
              {title}
            </Link>
          ) : (
            <h3 className="text-zinc-700 dark:text-zinc-300 font-medium text-xl">
              {title}
            </h3>
          )}
          <p className="text-zinc-500 dark:text-zinc-500 text-sm mt-1">
            {date}
          </p>
        </div>
        <div className="flex gap-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="View project"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

