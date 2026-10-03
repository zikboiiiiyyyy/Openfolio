import { portfolio } from '../data/portfolio';
import { Button } from './Button';
import { MediaFrame } from './MediaFrame';
import { Reveal } from './Reveal';

export function Hero() {
  const { personal, copy } = portfolio;
  const hero = copy.hero;
  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero__content">
        <Reveal variant="left">
          <p className="eyebrow hero__eyebrow"><span className="status-dot" />{personal.eyebrow}</p>
          <h1 id="hero-title">{personal.name}<span className="accent-dot">.</span></h1>
          <p className="hero__tagline">{personal.headline}</p>
          <p className="hero__summary">{personal.bio}</p>
          <div className="hero__actions">
            <Button href="#projects">{hero.projectsCta}</Button>
            <Button href="#contact" variant="secondary" showArrow={false}>{hero.contactCta}</Button>
          </div>
          <div className="hero__meta">
            <span>{hero.basedIn} <strong>{personal.location}</strong></span>
            <span className="hero__meta-separator" aria-hidden="true" />
            <span>{personal.availability}</span>
          </div>
        </Reveal>
        <Reveal className="hero__visual-wrap" variant="right" delay={120}>
          <div className="hero__visual-frame">
            <MediaFrame
              src={hero.image}
              alt={hero.imageAlt}
              priority
              loading="eager"
              sizes="(max-width: 900px) 100vw, 54vw"
              aspectRatio="16 / 9"
              focalPoint="62% center"
              fallback={copy.imageFallback}
            />
            <div className="hero__image-caption">
              <span className="hero__caption-index">{hero.imageCaptionIndex}</span>
              <span>{hero.imageCaption}</span>
            </div>
            <div className="hero__float-card" aria-hidden="true">
              <span className="hero__float-label">{hero.floatingLabel}</span>
              <span className="hero__float-value">{hero.floatingValue}</span>
              <span className="hero__float-mark">↗</span>
            </div>
          </div>
          <div className="hero__visual-index" aria-hidden="true"><span>{hero.visualIndex}</span><i /><span>{hero.verticalNote}</span></div>
        </Reveal>
      </div>
      <div className="hero__bottom-rule" aria-hidden="true"><span>{hero.bottomLeft}</span><span>{hero.bottomRight}</span></div>
    </section>
  );
}
