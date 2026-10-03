import { portfolio } from '../data/portfolio';
import { Reveal } from './Reveal';

export function ExperienceSection() {
  const copy = portfolio.copy.experience;
  return (
    <section className="section section-wrap experience-section" id="experience" aria-labelledby="experience-title">
      <Reveal className="section-heading-row">
        <div><p className="eyebrow section__eyebrow"><span>{copy.sectionNumber}</span> {copy.eyebrow}</p><h2 className="section-title" id="experience-title">{copy.titleLead} <span>{copy.titleAccent}</span></h2></div>
        <p className="section-heading-row__aside">{copy.aside}</p>
      </Reveal>
      <div className="experience-list">
        {portfolio.experience.map((entry, index) => (
          <Reveal className="experience-entry" key={`${entry.role}-${index}`} delay={index * 80}>
            <span className="experience-entry__number">{String(index + 1).padStart(2, '0')}</span>
            <div className="experience-entry__title">
              <span className="eyebrow">{entry.period}{entry.isPlaceholder ? ` · ${copy.placeholderLabel}` : ''}</span>
              <h3>{entry.role}</h3>
              <p>{entry.organization}</p>
            </div>
            <div className="experience-entry__description">
              <p>{entry.description}</p>
              <ul className="project-card__stack">{entry.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
