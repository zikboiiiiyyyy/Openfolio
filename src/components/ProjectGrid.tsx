import { portfolio } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';

export function ProjectGrid() {
  const copy = portfolio.copy.projects;
  return (
    <section className="section section-wrap projects-section" id="projects" aria-labelledby="projects-title">
      <Reveal className="section-heading-row">
        <div><p className="eyebrow section__eyebrow"><span>{copy.sectionNumber}</span> {copy.eyebrow}</p><h2 className="section-title" id="projects-title">{copy.titleLead} <span>{copy.titleAccent}</span></h2></div>
        <p className="section-heading-row__aside">{copy.aside}</p>
      </Reveal>
      <div className="projects-grid">
        {portfolio.projects.map((project, index) => (
          <Reveal key={project.id} className="project-card-reveal" delay={index * 65}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
