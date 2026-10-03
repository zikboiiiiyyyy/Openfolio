import { portfolio } from '../data/portfolio';
import { Button } from './Button';
import { MediaFrame } from './MediaFrame';
import { Reveal } from './Reveal';

export function FeaturedCaseStudy() {
  const project = portfolio.projects.find((candidate) => candidate.featured) ?? portfolio.projects[0];
  if (!project) return null;

  const copy = portfolio.copy.caseStudy;
  const details = [
    { label: copy.briefLabel, value: project.problem },
    { label: copy.approachLabel, value: project.solution },
    { label: copy.roleLabel, value: project.role },
    { label: copy.outcomeLabel, value: project.outcome },
  ];
  const noteGroups = [
    { label: portfolio.copy.projects.featuresLabel, items: project.features },
    { label: portfolio.copy.projects.challengesLabel, items: project.challenges },
    { label: portfolio.copy.projects.lessonsLabel, items: project.lessonsLearned },
  ].filter((group) => group.items.length > 0);

  return (
    <section className="section section-wrap case-study" id="featured-case-study" aria-labelledby="case-study-title">
      <Reveal className="case-study__intro">
        <p className="eyebrow section__eyebrow"><span>{copy.sectionNumber}</span> {copy.eyebrow}</p>
        <div className="case-study__headline"><p className="case-study__project-name">{project.name}<span className="accent-dot">.</span></p><h2 className="section-title" id="case-study-title">{copy.title}</h2></div>
        <p className="case-study__description">{project.detailedDescription}</p>
      </Reveal>
      <div className="case-study__layout">
        <Reveal className="case-study__visual" variant="left">
          <MediaFrame
            src={project.image}
            alt={project.imageAlt}
            aspectRatio="5 / 3"
            sizes="(max-width: 900px) 100vw, 55vw"
            fallback={portfolio.copy.imageFallback}
          />
          <span className="case-study__visual-note">{copy.visualNote}</span>
        </Reveal>
        <Reveal className="case-study__details" variant="right" delay={100}>
          <dl className="case-study__list">
            {details.map((detail) => <div key={detail.label}><dt>{detail.label}</dt><dd>{detail.value}</dd></div>)}
          </dl>
          <div className="case-study__tech"><span className="eyebrow">{copy.builtWith}</span><div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
          {noteGroups.length > 0 && (
            <div className="case-study__notes">
              {noteGroups.map((group) => (
                <section key={group.label}>
                  <h3>{group.label}</h3>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </section>
              ))}
            </div>
          )}
          <Button href="#contact" variant="secondary">{copy.cta}</Button>
        </Reveal>
      </div>
    </section>
  );
}
