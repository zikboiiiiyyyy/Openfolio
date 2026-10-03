import { portfolio, type PortfolioProject } from '../data/portfolio';
import { MediaFrame } from './MediaFrame';

type ProjectCardProps = {
  project: PortfolioProject;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const copy = portfolio.copy.projects;
  const noteGroups = [
    { label: copy.featuresLabel, items: project.features },
    { label: copy.challengesLabel, items: project.challenges },
    { label: copy.lessonsLabel, items: project.lessonsLearned },
  ].filter((group) => group.items.length > 0);

  return (
    <article className="project-card">
      <div className="project-card__image-link">
        <MediaFrame
          src={project.image}
          alt={project.imageAlt}
          aspectRatio="16 / 9"
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          fallback={copy.projectImageUnavailable}
          className="project-card__media"
        />
        <span className="project-card__image-label">{copy.demoLabel}</span>
      </div>
      <div className="project-card__body">
        <div className="project-card__meta"><span>{String(index + 1).padStart(2, '0')} / {project.category}</span><span>{project.year}</span></div>
        <div className="project-card__title-row"><h3>{project.name}</h3><span className="accent-dot" aria-hidden="true">↗</span></div>
        <p>{project.description}</p>
        <ul className="project-card__stack" aria-label={`${project.name} ${portfolio.copy.accessibility.technologies}`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-card__actions">
          {project.featured && <a href="#featured-case-study">{copy.caseStudyLabel} <span aria-hidden="true">↗</span></a>}
          {project.liveDemoUrl && <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">{copy.liveDemoLabel} <span aria-hidden="true">↗</span></a>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">{copy.sourceLabel} <span aria-hidden="true">↗</span></a>}
        </div>
        <details className="project-card__notes">
          <summary>{copy.detailsLabel}</summary>
          <p>{project.detailedDescription}</p>
          {noteGroups.length > 0 && (
            <div className="project-card__notes-grid">
              {noteGroups.map((group) => (
                <section key={group.label}>
                  <h4>{group.label}</h4>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </section>
              ))}
            </div>
          )}
        </details>
      </div>
    </article>
  );
}
