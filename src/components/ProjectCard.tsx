import type { PortfolioProject } from '../data/projects';
import { MediaFrame } from './MediaFrame';

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="project-card">
      <a className="project-card__image-link" href="#contact" aria-label={`Discuss a project like ${project.title}`}>
        <MediaFrame
          src={project.image}
          alt={project.imageAlt}
          aspectRatio="16 / 9"
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          fallback={`${project.title} demo visual`}
          className="project-card__media"
        />
        <span className="project-card__image-label">{project.label}</span>
        <span className="project-card__image-arrow" aria-hidden="true">↗</span>
      </a>
      <div className="project-card__body">
        <div className="project-card__meta"><span>{project.number} / {project.category}</span><span>{project.year}</span></div>
        <div className="project-card__title-row"><h3>{project.title}</h3><a href="#contact" aria-label={`Discuss a project like ${project.title}`}>↗</a></div>
        <p>{project.description}</p>
        <ul className="project-card__stack" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
    </article>
  );
}
