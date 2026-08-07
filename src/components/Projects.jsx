import Section from './ui/Section';
import Reveal from './ui/Reveal';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Featured Projects"
      subtitle="A few systems I've built end to end — from data pipeline to prediction to interface."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
