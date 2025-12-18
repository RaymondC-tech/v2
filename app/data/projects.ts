export interface Project {
  title: string;
  description: string;
  date: string;
  href?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "UofTMarket",
    description: "A comprehensive marketplace platform built for University of Toronto students to buy, sell, and trade items within the campus community. The platform has grown to over 1,000 active users with 50,000+ page views, facilitating hundreds of transactions and creating a thriving student marketplace ecosystem.",
    date: "January 2025 - Present",
    href: "https://uoftmarket.com/",
    github: "https://github.com/RaymondC-tech/uoftmarket",
  },
  {
    title: "Fairloft",
    description: "A scroll-first e-commerce platform revolutionizing the golf equipment market. Fairloft combines discounted premium golf gear, peer-to-peer resale marketplace, and AI-powered coaching features into a unified experience. Built with modern web technologies to provide golfers with an all-in-one platform for shopping, learning, and connecting with the golf community.",
    date: "April 2025 - Present",
    href: "https://fairloftgolf.com/",
  },
  {
    title: "Archctl",
    description: "Archctl is a CLI tool and VS Code extension that helps teams maintain clean architecture by enforcing dependency rules, layer boundaries, and architectural patterns",
    date: "December 2025",
    github: "https://github.com/qiuethan/archctl",
  },
  {
    title: "Cybermetrics",
    description: "A data-driven baseball roster analysis platform that helps teams identify weaknesses and find optimal player replacements. Features a React + TypeScript frontend with Clean Architecture backend using FastAPI, Firebase authentication, and pybaseball data integration.",
    date: "September 2025 - December 2025",
    href: "https://cybermetrics.vercel.app/",
  },
];

