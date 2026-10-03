import { portfolio } from '../data/portfolio';
import { Button } from './Button';
import { Reveal } from './Reveal';

export function ContactSection() {
  const copy = portfolio.copy.contact;
  const email = portfolio.personal.email.trim();
  const hasEmail = email.length > 0;

  return (
    <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
      <Reveal className="contact-section__panel">
        <div className="contact-section__topline"><p className="eyebrow"><span className="status-dot" /> {copy.status}</p><span className="contact-section__index">{copy.sectionNumber} / {portfolio.copy.totalSectionCount}</span></div>
        <p className="contact-section__pretitle">{copy.pretitle}</p>
        <h2 id="contact-title">{copy.titleLead} <span>{copy.titleAccent}</span></h2>
        <div className="contact-section__bottom">
          <p>{copy.invitation}<br /><span>{copy.replacementNote}</span></p>
          <div className="contact-section__actions">
            <Button href={hasEmail ? `mailto:${email}` : '#contact-details'}>{hasEmail ? copy.emailCta : copy.setupCta}</Button>
            <Button href="#projects" variant="secondary">{copy.projectsCta}</Button>
          </div>
        </div>
        <div className="contact-section__email" id="contact-details">
          <div><span className="eyebrow">{copy.emailLabel}{hasEmail ? '' : ' · PLACEHOLDER'}</span>
            {hasEmail ? <a className="contact-section__address" href={`mailto:${email}`}>{email}</a> : <span className="contact-section__address">{copy.emailPlaceholder}</span>}
          </div>
          {!hasEmail && <span className="contact-section__placeholder">{copy.emailNote}</span>}
        </div>
      </Reveal>
    </section>
  );
}
