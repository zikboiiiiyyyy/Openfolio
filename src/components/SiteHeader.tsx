import { useEffect, useRef, useState } from 'react';
import { navigation, primaryNavigationCta } from '../data/navigation';
import { profile } from '../data/profile';
import { MobileMenu } from './MobileMenu';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);
  const mark = profile.monogram;

  useEffect(() => {
    if (wasOpen.current && !menuOpen) triggerRef.current?.focus();
    wasOpen.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    const closeOnWideScreen = () => {
      if (window.matchMedia('(min-width: 900px)').matches) setMenuOpen(false);
    };
    window.addEventListener('resize', closeOnWideScreen);
    return () => window.removeEventListener('resize', closeOnWideScreen);
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand brand--header" href="#home" aria-label={`${profile.name} home`}>
            <span className="brand__mark" aria-hidden="true"><span>{mark.slice(0, 1)}</span><span>{mark.slice(1, 2)}</span></span>
            <span className="brand__name">{profile.name.toUpperCase()}<span className="brand__dot">.</span></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="header-cta" href={primaryNavigationCta.href}>
            <span>{primaryNavigationCta.label}</span><span aria-hidden="true">↗</span>
          </a>
          <button
            ref={triggerRef}
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-toggle__lines" aria-hidden="true"><i /><i /></span>
          </button>
        </div>
      </header>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
