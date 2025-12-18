import PageLayout from "../layout/PageLayout";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <PageLayout>
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>
      
      <div>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            date={project.date}
            href={project.href}
            github={project.github}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="https://github.com/RaymondC-tech"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-zinc-800 dark:bg-zinc-200 text-zinc-100 dark:text-zinc-900 font-medium rounded-xl hover:bg-zinc-900 dark:hover:bg-zinc-100 transition-colors underline"
        >
          View more projects on GitHub
        </Link>
      </div>
    </PageLayout>
  );
}

