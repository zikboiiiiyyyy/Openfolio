import { useLayoutEffect, useState } from 'react';
import type { ThemeMode } from './data/portfolio';
import { portfolio } from './data/portfolio';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { FeaturedCaseStudy } from './components/FeaturedCaseStudy';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { ServicesSection } from './components/ServicesSection';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { SkillsSection } from './components/SkillsSection';
import { SkipLink } from './components/SkipLink';
import { Snapshot } from './components/Snapshot';

const themeStorageKey = 'developer-portfolio-theme';

function getInitialTheme(): ThemeMode {
  if (!portfolio.theme.allowToggle || typeof window === 'undefined') return portfolio.theme.defaultMode;
  try {
    const storedMode = window.localStorage.getItem(themeStorageKey);
    return storedMode === 'dark' || storedMode === 'light' ? storedMode : portfolio.theme.defaultMode;
  } catch {
    return portfolio.theme.defaultMode;
  }
}

function setMeta(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!content) {
    element?.remove();
    return;
  }
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
}

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  const palette = portfolio.theme.palettes[mode];
  root.dataset.theme = mode;
  root.style.colorScheme = mode;
  root.style.setProperty('--canvas', palette.background);
  root.style.setProperty('--surface-1', palette.surface);
  root.style.setProperty('--surface-2', palette.surfaceElevated);
  root.style.setProperty('--surface-glass', palette.surfaceGlass);
  root.style.setProperty('--text-primary', palette.text);
  root.style.setProperty('--text-secondary', palette.textSecondary);
  root.style.setProperty('--text-muted', palette.textMuted);
  root.style.setProperty('--line', palette.line);
  root.style.setProperty('--line-strong', palette.lineStrong);
  root.style.setProperty('--accent', palette.accent);
  root.style.setProperty('--accent-hover', palette.accentHover);
  root.style.setProperty('--accent-fill', portfolio.theme.primaryColor);
  root.style.setProperty('--accent-fill-hover', portfolio.theme.accentColor);
  root.style.setProperty('--font-display', portfolio.theme.typography.display);
  root.style.setProperty('--font-body', portfolio.theme.typography.body);
  setMeta('theme-color', palette.background);
}

function applySeoMetadata() {
  const { seo, personal } = portfolio;
  document.title = seo.siteTitle;
  setMeta('description', seo.description);
  setMeta('author', seo.author || personal.name);
  setMeta('keywords', seo.keywords.join(', '));
  setMeta('og:title', seo.siteTitle, 'property');
  setMeta('og:description', seo.description, 'property');
  setMeta('og:type', 'website', 'property');
  setMeta('og:image', seo.openGraphImage ? new URL(seo.openGraphImage, seo.siteUrl || window.location.origin).href : '', 'property');
  setMeta('og:url', seo.siteUrl || window.location.origin, 'property');

  const favicon = document.head.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (favicon) favicon.href = seo.favicon;
}

export default function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialTheme);

  useLayoutEffect(() => {
    applyTheme(themeMode);
  }, [themeMode]);

  useLayoutEffect(() => {
    applySeoMetadata();
  }, []);

  function toggleTheme() {
    const nextMode = themeMode === 'dark' ? 'light' : 'dark';
    try {
      window.localStorage.setItem(themeStorageKey, nextMode);
    } catch {
      // The toggle still works for this page view when storage is unavailable.
    }
    setThemeMode(nextMode);
  }

  return (
    <>
      <SkipLink />
      <SiteHeader themeMode={themeMode} onToggleTheme={toggleTheme} />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Snapshot />
        <AboutSection />
        <SkillsSection />
        <ProjectGrid />
        <FeaturedCaseStudy />
        <ExperienceSection />
        <EducationSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
