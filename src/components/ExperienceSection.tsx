import { experience } from '../data/experience';
import { Reveal } from './Reveal';

export function ExperienceSection() {
  return (
    <section className="section section-wrap experience-section" id="experience" aria-labelledby="experience-title">
      <Reveal className="section-heading-row">
        <div><p className="eyebrow section__eyebrow"><span>05</span> Path so far</p><h2 className="section-title" id="experience-title">Experience, <span>in progress.</span></h2></div>
        <p className="section-heading-row__aside">Replace each demo entry with your real roles, contributions, and dates.</p>
      </Reveal>
      <div className="experience-list">
        {experience.map((entry, index) => (
          <Reveal className="experience-entry" key={`${entry.role}-${index}`} delay={index * 80}>
            <span className="experience-entry__number">0{index + 1}</span>
            <div className="experience-entry__title"><span className="eyebrow">{entry.period} · PLACEHOLDER</span><h3>{entry.role}</h3><p>{entry.organization}</p></div>
            <div className="experience-entry__description"><p>{entry.description}</p><ul className="project-card__stack">{entry.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
