import PageLayout from "../layout/PageLayout";
import NoteCard from "../components/NoteCard";
import { notes } from "../data/notes";

export default function Notes() {
  return (
    <PageLayout>
      <h1 className="text-3xl font-semibold mb-6">Random Thoughts</h1>
      
      <div>
        {notes.map((note) => (
          <NoteCard
            key={note.slug}
            title={note.title}
            description={note.description}
            date={note.date}
            slug={note.slug}
            icon={note.icon}
          />
        ))}
      </div>
    </PageLayout>
  );
}

