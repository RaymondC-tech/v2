import PageLayout from "../layout/PageLayout";
import NoteCard from "../components/NoteCard";
import { getAllNotes } from "../lib/mdx";

export default async function Notes() {
  const notes = getAllNotes();

  return (
    <PageLayout>
      <h1 className="text-3xl font-semibold mb-6">Random Thoughts</h1>
      
      <div>
        {notes.map((note) => (
          <NoteCard
            key={note.slug}
            title={note.frontmatter.title}
            description={note.frontmatter.description}
            date={note.frontmatter.date}
            slug={note.slug}
            icon={note.frontmatter.icon}
          />
        ))}
      </div>
    </PageLayout>
  );
}

