import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';

export function ProjectGrid() {
  return (
    <section className="section section-wrap projects-section" id="projects" aria-labelledby="projects-title">
      <Reveal className="section-heading-row">
        <div><p className="eyebrow section__eyebrow"><span>03</span> Selected work · demo</p><h2 className="section-title" id="projects-title">Made to be <span>explored.</span></h2></div>
        <p className="section-heading-row__aside">Four fictional starting points. Swap in your own projects, images, and evidence.</p>
      </Reveal>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal key={project.id} className="project-card-reveal" delay={index * 65}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
