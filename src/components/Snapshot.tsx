import { profile } from '../data/profile';
import { Reveal } from './Reveal';

const snapshotItems = [
  { label: 'ROLE', value: profile.role },
  { label: 'TOOLKIT', value: profile.technologies.join(' / ') },
  { label: 'FOCUS', value: profile.focus },
  { label: 'EXPERIENCE', value: profile.experienceLevel },
  { label: 'AVAILABILITY', value: profile.availability },
];

export function Snapshot() {
  return (
    <section className="snapshot section-wrap" aria-label="Professional snapshot">
      <Reveal className="snapshot__inner">
        {snapshotItems.map((item, index) => (
          <div className="snapshot__item" key={item.label}>
            <span className="snapshot__number">0{index + 1}</span>
            <div><p className="eyebrow">{item.label}</p><p className="snapshot__value">{item.value}</p></div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
