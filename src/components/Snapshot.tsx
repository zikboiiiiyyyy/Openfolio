import { portfolio } from '../data/portfolio';
import { Reveal } from './Reveal';

const { personal, copy } = portfolio;
const snapshotItems = [
  { label: copy.snapshot.role, value: personal.title },
  { label: copy.snapshot.toolkit, value: personal.technologies.join(' / ') },
  { label: copy.snapshot.focus, value: personal.focus },
  { label: copy.snapshot.experience, value: personal.experienceLevel },
  { label: copy.snapshot.availability, value: personal.availability },
];

export function Snapshot() {
  return (
    <section className="snapshot section-wrap" aria-label={copy.snapshot.ariaLabel}>
      <Reveal className="snapshot__inner">
        {snapshotItems.map((item, index) => (
          <div className="snapshot__item" key={item.label}>
            <span className="snapshot__number">{String(index + 1).padStart(2, '0')}</span>
            <div><p className="eyebrow">{item.label}</p><p className="snapshot__value">{item.value}</p></div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
