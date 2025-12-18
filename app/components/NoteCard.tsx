import Link from "next/link";
import { FileText, Network, Server, BookOpen, Code, Database } from "lucide-react";

interface NoteCardProps {
  title: string;
  description: string;
  date: string;
  slug: string;
  icon?: "file" | "network" | "server" | "book" | "code" | "database";
  className?: string;
}

const iconMap = {
  file: FileText,
  network: Network,
  server: Server,
  book: BookOpen,
  code: Code,
  database: Database,
};

export default function NoteCard({
  title,
  description,
  date,
  slug,
  icon = "file",
  className,
}: NoteCardProps) {
  const IconComponent = iconMap[icon] || FileText;

  return (
    <div className={`card-border ${className || ""}`}>
      <Link
        href={`/notes/${slug}`}
        className="block hover:opacity-80 transition-opacity"
      >
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-1 text-zinc-600 dark:text-zinc-400">
            <IconComponent className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="card-title-link">
              {title}
            </h3>
            <p className="card-date">
              {date}
            </p>
            <p className="card-description mt-2">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

