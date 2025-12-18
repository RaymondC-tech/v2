import fs from "fs";
import path from "path";
import matter from "gray-matter";

const notesDirectory = path.join(process.cwd(), "content/notes");

export interface NoteFrontmatter {
  title: string;
  description: string;
  date: string;
  slug: string;
  icon?: "file" | "network" | "server" | "book" | "code" | "database";
}

export interface Note {
  frontmatter: NoteFrontmatter;
  content: string;
  slug: string;
}

export function getAllNotes(): Note[] {
  const fileNames = fs.readdirSync(notesDirectory);
  const allNotes = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const fullPath = path.join(notesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        frontmatter: data as NoteFrontmatter,
        content,
        slug: data.slug,
      };
    });

  // Sort by date, newest first (fallback to string comparison if date parsing fails)
  return allNotes.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime();
    const dateB = new Date(b.frontmatter.date).getTime();
    if (isNaN(dateA) || isNaN(dateB)) {
      return b.frontmatter.date.localeCompare(a.frontmatter.date);
    }
    return dateB - dateA;
  });
}

export function getNoteBySlug(slug: string): Note | null {
  try {
    const fullPath = path.join(notesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      frontmatter: data as NoteFrontmatter,
      content,
      slug: data.slug,
    };
  } catch {
    return null;
  }
}

