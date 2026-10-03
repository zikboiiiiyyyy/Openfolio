import { portfolio } from '../data/portfolio';

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { personal, copy, navigation } = portfolio;
  const socials = [
    { label: copy.footer.socialLabels.github, href: personal.githubUrl },
    { label: copy.footer.socialLabels.linkedin, href: personal.linkedinUrl },
    ...personal.otherSocialLinks.map((social) => ({ label: social.label, href: social.url })),
  ].filter((social) => social.href.trim());
  const mark = personal.monogram;

  return (
    <footer className="site-footer section-wrap">
      <div className="site-footer__top">
        <a className="brand brand--footer" href="#home" aria-label={`${personal.name} ${copy.accessibility.brandHome}`}>
          <span className="brand__mark" aria-hidden="true"><span>{mark.slice(0, 1)}</span><span>{mark.slice(1, 2)}</span></span>
          <span className="brand__name">{personal.name.toUpperCase()}<span className="brand__dot">.</span></span>
        </a>
        <p className="site-footer__descriptor">{copy.footer.descriptor}</p>
        <a className="back-to-top" href="#home">{copy.accessibility.backToTop} <span aria-hidden="true">↑</span></a>
      </div>
      <div className="site-footer__bottom">
        <p>© {year} {personal.name}. {copy.footer.copyright}</p>
        <nav className="site-footer__nav" aria-label={copy.accessibility.footerNavigation}>
          {navigation.items.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        {socials.length > 0 && (
          <nav className="site-footer__socials" aria-label={copy.accessibility.socialLinks}>
            {socials.map((social) => <a href={social.href} key={social.label} target="_blank" rel="noopener noreferrer">{social.label}</a>)}
          </nav>
        )}
      </div>
    </footer>
  );
}
