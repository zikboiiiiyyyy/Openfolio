import { portfolio } from '../data/portfolio';
import { Button } from './Button';
import { MediaFrame } from './MediaFrame';
import { Reveal } from './Reveal';

export function AboutSection() {
  const { personal, copy } = portfolio;
  const about = copy.about;
  return (
    <section className="section section-wrap about-section" id="about" aria-labelledby="about-title">
      <Reveal className="section__heading-block" variant="left">
        <p className="eyebrow section__eyebrow"><span>{about.sectionNumber}</span> {about.eyebrow}</p>
        <h2 className="section-title" id="about-title">{about.titleLead}<br /><span>{about.titleAccent}</span></h2>
      </Reveal>
      <div className="about-section__body">
        <Reveal variant="right">
          {personal.profileImage && (
            <figure className="about-section__portrait">
              <MediaFrame src={personal.profileImage} alt={personal.profileImageAlt} aspectRatio="1 / 1" sizes="(max-width: 700px) 70vw, 272px" />
            </figure>
          )}
          <p className="about-section__lead">{personal.aboutLead}</p>
          {personal.about.map((paragraph) => (
            <p className="body-copy" key={paragraph}>{paragraph}</p>
          ))}
          <div className="about-section__signature"><span className="signature-line" /><span>{about.signature} · {personal.title.toUpperCase()}</span></div>
          {personal.resumeUrl && <Button href={personal.resumeUrl} variant="quiet" target="_blank" rel="noreferrer">{about.resumeCta}</Button>}
        </Reveal>
      </div>
    </section>
  );
}
