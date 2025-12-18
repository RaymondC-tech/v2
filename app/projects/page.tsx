import PageLayout from "../layout/PageLayout";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

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
    </PageLayout>
  );
}

