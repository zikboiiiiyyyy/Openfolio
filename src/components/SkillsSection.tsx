import { skillGroups } from '../data/skills';
import { Reveal } from './Reveal';

export function SkillsSection() {
  return (
    <section className="section section-wrap skills-section" id="skills" aria-labelledby="skills-title">
      <Reveal className="section-heading-row">
        <div><p className="eyebrow section__eyebrow"><span>02</span> The toolkit</p><h2 className="section-title" id="skills-title">Skills &amp; <span>technologies.</span></h2></div>
        <p className="section-heading-row__aside">Tools are only useful when they make the experience clearer. Here’s where I work.</p>
      </Reveal>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <Reveal className="skill-card" delay={index * 80} key={group.name}>
            <div className="skill-card__top"><span className="eyebrow">{group.number} / DISCIPLINE</span><span className="skill-card__glyph" aria-hidden="true">{['⌘', '↗', '◌'][index]}</span></div>
            <h3>{group.name}</h3>
            <p>{group.summary}</p>
            <ul className="tag-list" aria-label={`${group.name} skills`}>
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
