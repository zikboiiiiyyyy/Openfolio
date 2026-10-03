import { profile } from '../data/profile';
import { navigation } from '../data/navigation';

export function SiteFooter() {
  const year = new Date().getFullYear();
  const mark = profile.monogram;
  return (
    <footer className="site-footer section-wrap">
      <div className="site-footer__top">
        <a className="brand brand--footer" href="#home" aria-label={`${profile.name} — back to top`}>
          <span className="brand__mark" aria-hidden="true"><span>{mark.slice(0, 1)}</span><span>{mark.slice(1, 2)}</span></span>
          <span className="brand__name">{profile.name.toUpperCase()}<span className="brand__dot">.</span></span>
        </a>
        <p className="site-footer__descriptor">{profile.role} <span>·</span> {profile.focus}</p>
        <a className="back-to-top" href="#home">Back to top <span aria-hidden="true">↑</span></a>
      </div>
      <div className="site-footer__bottom">
        <p>© {year} {profile.name}. Demo portfolio — replace sample content before publishing.</p>
        <nav className="site-footer__nav" aria-label="Footer navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        {profile.socials.length > 0 && <nav className="site-footer__socials" aria-label="Social links">{profile.socials.map((social) => <a href={social.href} key={social.label} target="_blank" rel="noreferrer">{social.label}</a>)}</nav>}
      </div>
    </footer>
  );
}
