import Link from "next/link";

interface NoteCardProps {
  title: string;
  description: string;
  date: string;
  slug: string;
  icon?: string;
  className?: string;
}

export default function NoteCard({
  title,
  description,
  date,
  slug,
  icon,
  className,
}: NoteCardProps) {
  return (
    <Link
      href={`/notes/${slug}`}
      className={`block border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0 hover:opacity-80 transition-opacity ${className || ""}`}
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="text-2xl shrink-0">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-zinc-700 dark:text-zinc-300 font-medium text-xl underline">
              {title}
            </h3>
            <p className="text-zinc-500 dark:text-zinc-500 text-sm whitespace-nowrap">
              {date}
            </p>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

