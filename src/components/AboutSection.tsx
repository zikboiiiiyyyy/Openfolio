import { profile } from '../data/profile';
import { Reveal } from './Reveal';

export function AboutSection() {
  return (
    <section className="section section-wrap about-section" id="about" aria-labelledby="about-title">
      <Reveal className="section__heading-block" variant="left">
        <p className="eyebrow section__eyebrow"><span>01</span> A little about me</p>
        <h2 className="section-title" id="about-title">Good work lives<br /><span>in the details.</span></h2>
      </Reveal>
      <div className="about-section__body">
        <Reveal variant="right">
          <p className="about-section__lead">A creative developer who cares as much about how a product works as how it feels.</p>
          {profile.about.map((paragraph, index) => (
            <p className={index === profile.about.length - 1 ? 'about-section__placeholder' : 'body-copy'} key={paragraph}>{paragraph}</p>
          ))}
          <div className="about-section__signature"><span className="signature-line" /><span>ARI VALE · {profile.role.toUpperCase()}</span></div>
        </Reveal>
      </div>
    </section>
  );
}
