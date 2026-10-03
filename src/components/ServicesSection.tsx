import { portfolio } from '../data/portfolio';
import { Reveal } from './Reveal';

export function ServicesSection() {
  const copy = portfolio.copy.services;
  return (
    <section className="section section-wrap services-section" id="services" aria-labelledby="services-title">
      <Reveal className="section-heading-row">
        <div><p className="eyebrow section__eyebrow"><span>{copy.sectionNumber}</span> {copy.eyebrow}</p><h2 className="section-title" id="services-title">{copy.titleLead}<br /><span>{copy.titleAccent}</span></h2></div>
        <p className="section-heading-row__aside">{copy.aside}</p>
      </Reveal>
      <div className="services-grid">
        {portfolio.services.map((service, index) => (
          <Reveal className="service-card" key={service.title} delay={index * 45}>
            <div className="service-card__top"><span className="eyebrow">{String(index + 1).padStart(2, '0')} / {copy.capabilityLabel}</span><span className="service-card__mark" aria-hidden="true">{service.mark}</span></div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
