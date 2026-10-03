import { featuredCaseStudy } from '../data/projects';
import { Button } from './Button';
import { MediaFrame } from './MediaFrame';
import { Reveal } from './Reveal';

const details = [
  { label: 'The brief', copy: featuredCaseStudy.problem },
  { label: 'The approach', copy: featuredCaseStudy.solution },
  { label: 'My role', copy: featuredCaseStudy.role },
  { label: 'The outcome', copy: featuredCaseStudy.outcome },
];

export function FeaturedCaseStudy() {
  return (
    <section className="section section-wrap case-study" id="featured-case-study" aria-labelledby="case-study-title">
      <Reveal className="case-study__intro">
        <p className="eyebrow section__eyebrow"><span>04</span> {featuredCaseStudy.category}</p>
        <div className="case-study__headline"><p className="case-study__project-name">{featuredCaseStudy.project}<span className="accent-dot">.</span></p><h2 className="section-title" id="case-study-title">{featuredCaseStudy.title}</h2></div>
      </Reveal>
      <div className="case-study__layout">
        <Reveal className="case-study__visual" variant="left">
          <MediaFrame
            src={featuredCaseStudy.image}
            alt={featuredCaseStudy.imageAlt}
            aspectRatio="5 / 3"
            sizes="(max-width: 900px) 100vw, 55vw"
            fallback="Featured demo case study visual"
          />
          <span className="case-study__visual-note">01 — CONCEPT STUDY</span>
        </Reveal>
        <Reveal className="case-study__details" variant="right" delay={100}>
          <dl className="case-study__list">
            {details.map((detail) => <div key={detail.label}><dt>{detail.label}</dt><dd>{detail.copy}</dd></div>)}
          </dl>
          <div className="case-study__tech"><span className="eyebrow">BUILT WITH</span><div className="tag-list">{featuredCaseStudy.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
          <Button href="#contact" variant="secondary">Talk about a similar build</Button>
        </Reveal>
      </div>
    </section>
  );
}
