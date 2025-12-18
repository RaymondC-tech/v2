export interface Note {
  title: string;
  description: string;
  date: string;
  slug: string;
  icon?: "file" | "network" | "server" | "book" | "code" | "database";
}

export const notes: Note[] = [
  {
    title: "Distributed Systems Rizzed Me",
    description: "On growing up with coding problems, missing creation, and finding meaning in distributed systems later on",
    date: "September 2025",
    slug: "distributed-systems-rizzed-me",
    icon: "network",
  },
  // Add more notes here...
];

