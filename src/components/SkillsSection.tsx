import { portfolio } from '../data/portfolio';
import { Reveal } from './Reveal';

const glyphs = ['⌘', '↗', '◌'];

export function SkillsSection() {
  const copy = portfolio.copy.skills;
  return (
    <section className="section section-wrap skills-section" id="skills" aria-labelledby="skills-title">
      <Reveal className="section-heading-row">
        <div><p className="eyebrow section__eyebrow"><span>{copy.sectionNumber}</span> {copy.eyebrow}</p><h2 className="section-title" id="skills-title">{copy.titleLead} <span>{copy.titleAccent}</span></h2></div>
        <p className="section-heading-row__aside">{copy.aside}</p>
      </Reveal>
      <div className="skills-grid">
        {portfolio.skills.map((group, index) => (
          <Reveal className="skill-card" delay={index * 80} key={group.name}>
            <div className="skill-card__top"><span className="eyebrow">{String(index + 1).padStart(2, '0')} / {copy.disciplineLabel}</span><span className="skill-card__glyph" aria-hidden="true">{glyphs[index % glyphs.length]}</span></div>
            <h3>{group.name}</h3>
            <p>{group.summary}</p>
            <ul className="tag-list" aria-label={`${group.name} ${portfolio.copy.accessibility.skills}`}>
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
