import Link from "next/link";
import { ExternalLink } from "lucide-react";

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
  const linkUrl = href || github;
  
  return (
    <div className={`card-border ${className || ""}`}>
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="flex-1">
          {linkUrl ? (
            <Link
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-title-link"
            >
              {title}
            </Link>
          ) : (
            <h3 className="card-title">
              {title}
            </h3>
          )}
          <p className="card-date">
            {date}
          </p>
        </div>
        {linkUrl && (
          <div className="flex gap-2">
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="View project"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
      <p className="card-description">
        {description}
      </p>
    </div>
  );
}

