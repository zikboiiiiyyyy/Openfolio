import { profile } from '../data/profile';
import { Button } from './Button';
import { MediaFrame } from './MediaFrame';
import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero__content">
        <Reveal variant="left">
          <p className="eyebrow hero__eyebrow"><span className="status-dot" />{profile.eyebrow}</p>
          <h1 id="hero-title">{profile.name}<span className="accent-dot">.</span></h1>
          <p className="hero__tagline">{profile.headline}</p>
          <p className="hero__summary">{profile.shortDescription}</p>
          <div className="hero__actions">
            <Button href="#projects">View my work</Button>
            <Button href="#contact" variant="secondary" showArrow={false}>Contact me</Button>
          </div>
          <div className="hero__meta">
            <span>Based in <strong>{profile.location}</strong></span>
            <span className="hero__meta-separator" aria-hidden="true" />
            <span>{profile.availability}</span>
          </div>
        </Reveal>
        <Reveal className="hero__visual-wrap" variant="right" delay={120}>
          <div className="hero__visual-frame">
            <MediaFrame
              src="/manus-storage/async-images/0MNbTKW2qvgnGv0zBY0omX/image-1.webp"
              alt="Original cinematic abstract sculpture in graphite glass and electric-blue light."
              priority
              loading="eager"
              sizes="(max-width: 900px) 100vw, 54vw"
              aspectRatio="16 / 9"
              focalPoint="62% center"
              fallback="Original visual in progress"
            />
            <div className="hero__image-caption">
              <span className="hero__caption-index">01 / 04</span>
              <span>Interfaces with intention</span>
            </div>
            <div className="hero__float-card" aria-hidden="true">
              <span className="hero__float-label">CURRENTLY EXPLORING</span>
              <span className="hero__float-value">Interaction<br />&amp; atmosphere</span>
              <span className="hero__float-mark">↗</span>
            </div>
          </div>
          <div className="hero__visual-index" aria-hidden="true"><span>01</span><i /><span>SCROLL TO EXPLORE</span></div>
        </Reveal>
      </div>
      <div className="hero__bottom-rule" aria-hidden="true"><span>DESIGN-LED FRONTEND</span><span>SCROLL TO DISCOVER ↓</span></div>
    </section>
  );
}
