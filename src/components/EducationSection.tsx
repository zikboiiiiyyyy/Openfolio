import { portfolio } from '../data/portfolio';
import { Reveal } from './Reveal';

export function EducationSection() {
  const copy = portfolio.copy.education;
  return (
    <section className="section section-wrap education-section" id="education" aria-labelledby="education-title">
      <Reveal className="section-heading-row">
        <div><p className="eyebrow section__eyebrow"><span>{copy.sectionNumber}</span> {copy.eyebrow}</p><h2 className="section-title" id="education-title">{copy.titleLead} <span>{copy.titleAccent}</span></h2></div>
        <p className="section-heading-row__aside">{copy.aside}</p>
      </Reveal>
      <div className="experience-list">
        {portfolio.education.map((entry, index) => (
          <Reveal className="experience-entry" key={`${entry.qualification}-${index}`} delay={index * 80}>
            <span className="experience-entry__number">{String(index + 1).padStart(2, '0')}</span>
            <div className="experience-entry__title">
              <span className="eyebrow">{entry.period}{entry.isPlaceholder ? ` · ${copy.placeholderLabel}` : ''}</span>
              <h3>{entry.qualification}</h3>
              <p>{entry.institution}</p>
            </div>
            <div className="experience-entry__description"><p>{entry.description}</p></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
