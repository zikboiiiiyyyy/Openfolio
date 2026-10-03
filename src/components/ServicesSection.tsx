import { services } from '../data/services';
import { Reveal } from './Reveal';

export function ServicesSection() {
  return (
    <section className="section section-wrap services-section" id="services" aria-labelledby="services-title">
      <Reveal className="section-heading-row">
        <div><p className="eyebrow section__eyebrow"><span>06</span> What I can build</p><h2 className="section-title" id="services-title">Useful by design.<br /><span>Polished by default.</span></h2></div>
        <p className="section-heading-row__aside">From the first layout decision to the final interaction, I bring the pieces together.</p>
      </Reveal>
      <div className="services-grid">
        {services.map((service, index) => (
          <Reveal className="service-card" key={service.number} delay={index * 45}>
            <div className="service-card__top"><span className="eyebrow">{service.number} / CAPABILITY</span><span className="service-card__mark" aria-hidden="true">{service.mark}</span></div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
