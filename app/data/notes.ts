export interface Note {
  title: string;
  description: string;
  date: string;
  slug: string;
  icon?: string; // You can use emoji or icon names
}

export const notes: Note[] = [
  {
    title: "Distributed Systems Rizzed Me",
    description: "On growing up with coding problems, missing creation, and finding meaning in distributed systems later on",
    date: "September 2025",
    slug: "distributed-systems-rizzed-me",
    icon: "📝",
  },
  // Add more notes here...
];

