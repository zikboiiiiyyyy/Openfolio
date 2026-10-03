import { useEffect, useRef, useState } from 'react';
import { portfolio, type ThemeMode } from '../data/portfolio';
import { MobileMenu } from './MobileMenu';

type SiteHeaderProps = {
  themeMode: ThemeMode;
  onToggleTheme: () => void;
};

export function SiteHeader({ themeMode, onToggleTheme }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);
  const { accessibility } = portfolio.copy;
  const mark = portfolio.personal.monogram;

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

  const themeLabel = themeMode === 'dark' ? accessibility.switchToLight : accessibility.switchToDark;

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand brand--header" href="#home" aria-label={`${portfolio.personal.name} ${accessibility.brandHome}`}>
            <span className="brand__mark" aria-hidden="true"><span>{mark.slice(0, 1)}</span><span>{mark.slice(1, 2)}</span></span>
            <span className="brand__name">{portfolio.personal.name.toUpperCase()}<span className="brand__dot">.</span></span>
          </a>
          <nav className="desktop-nav" aria-label={accessibility.mainNavigation}>
            {portfolio.navigation.items.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          {portfolio.theme.allowToggle && (
            <button
              className="theme-toggle"
              type="button"
              aria-label={themeLabel}
              aria-pressed={themeMode === 'light'}
              title={themeLabel}
              onClick={onToggleTheme}
            >
              <span className="theme-toggle__icon" aria-hidden="true">{themeMode === 'dark' ? '☼' : '◐'}</span>
              <span className="theme-toggle__label">{themeMode === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
          )}
          <a className="header-cta" href="#contact">
            <span>{portfolio.navigation.primaryCta}</span><span aria-hidden="true">↗</span>
          </a>
          <button
            ref={triggerRef}
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? accessibility.closeMenu : accessibility.openMenu}
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
