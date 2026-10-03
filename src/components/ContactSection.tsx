import { profile } from '../data/profile';
import { Button } from './Button';
import { Reveal } from './Reveal';

export function ContactSection() {
  const contact = profile.contact;
  const contactHref = contact.isPlaceholder ? '#contact-details' : `mailto:${contact.email}`;

  return (
    <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
      <Reveal className="contact-section__panel">
        <div className="contact-section__topline"><p className="eyebrow"><span className="status-dot" /> OPEN TO GOOD IDEAS · PLACEHOLDER</p><span className="contact-section__index">07 / 07</span></div>
        <p className="contact-section__pretitle">Have a project in mind?</p>
        <h2 id="contact-title">Let’s build something <span>useful.</span></h2>
        <div className="contact-section__bottom">
          <p>Let’s make something considered, useful, and memorable.<br /><span>Profile and contact details are editable placeholders.</span></p>
          <div className="contact-section__actions">
            <Button href={contactHref}>{contact.isPlaceholder ? 'Replace contact details' : 'Send an email'}</Button>
            <Button href="#projects" variant="secondary">Explore the work</Button>
          </div>
        </div>
        <div className="contact-section__email" id="contact-details">
          <div><span className="eyebrow">EMAIL · DEMO PLACEHOLDER</span><span className="contact-section__address">{contact.email}</span></div>
          <span className="contact-section__placeholder">{contact.note}</span>
        </div>
      </Reveal>
    </section>
  );
}
