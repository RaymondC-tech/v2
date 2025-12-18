import { notFound } from "next/navigation";
import { getNoteBySlug, getAllNotes } from "../../lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import PageLayout from "../../layout/PageLayout";

export async function generateStaticParams() {
  const notes = getAllNotes();
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <PageLayout>
      <article>
        <h1 className="text-3xl font-semibold mb-2 text-zinc-900 dark:text-foreground">{note.frontmatter.title}</h1>
        <p className="card-date mb-6">{note.frontmatter.date}</p>
        
        <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:mt-8 prose-headings:mb-4 prose-p:leading-relaxed prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-h2:text-2xl prose-h2:font-semibold prose-h2:text-zinc-700 dark:prose-h2:text-zinc-300 prose-h2:mt-8 prose-h2:mb-4 prose-strong:text-zinc-700 dark:prose-strong:text-zinc-300 prose-a:underline prose-a:text-zinc-700 dark:prose-a:text-zinc-300 prose-blockquote:border-l-zinc-300 dark:prose-blockquote:border-l-zinc-700 prose-blockquote:text-zinc-600 dark:prose-blockquote:text-zinc-400">
          <MDXRemote source={note.content} />
        </div>
      </article>
    </PageLayout>
  );
}

