import { useEffect } from 'react';
import { profile } from './data/profile';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
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

export default function App() {
  useEffect(() => {
    document.title = `${profile.name} — ${profile.role}`;
    const description = `${profile.role} building modern web applications, interactive interfaces, and visually polished digital experiences.`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', profile.headline);
  }, []);

  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Snapshot />
        <AboutSection />
        <SkillsSection />
        <ProjectGrid />
        <FeaturedCaseStudy />
        <ExperienceSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
