import { portfolio } from '../data/portfolio';

export function SkipLink() {
  return (
    <a className="skip-link" href="#main-content">
      {portfolio.copy.accessibility.skipToContent}
    </a>
  );
}
