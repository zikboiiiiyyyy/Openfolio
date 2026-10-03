export type ThemeMode = 'dark' | 'light';

export type SocialLink = {
  label: string;
  url: string;
};

export type PortfolioProject = {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl: string;
  featured: boolean;
  category: string;
  year: string;
  problem: string;
  solution: string;
  role: string;
  outcome: string;
  features: string[];
  challenges: string[];
  lessonsLearned: string[];
};

// Customize your portfolio in this file. Keep optional external links empty until they are real.
export const portfolio = {
  theme: {
    defaultMode: 'dark' as ThemeMode,
    allowToggle: true,
    primaryColor: '#26bbff',
    accentColor: '#72d3ff',
    typography: {
      display: "'Manrope', 'Inter Tight', Inter, 'Helvetica Neue', Arial, sans-serif",
      body: "'DM Sans', Inter, 'Helvetica Neue', Arial, sans-serif",
    },
    palettes: {
      dark: {
        background: '#101014',
        surface: '#18181c',
        surfaceElevated: '#202024',
        surfaceGlass: 'rgba(24, 24, 28, 0.88)',
        accent: '#26bbff',
        accentHover: '#72d3ff',
        text: '#ffffff',
        textSecondary: 'rgba(255, 255, 255, 0.72)',
        textMuted: 'rgba(255, 255, 255, 0.48)',
        line: 'rgba(255, 255, 255, 0.12)',
        lineStrong: 'rgba(255, 255, 255, 0.2)',
      },
      light: {
        background: '#f4f6f8',
        surface: '#ffffff',
        surfaceElevated: '#e9eef2',
        surfaceGlass: 'rgba(255, 255, 255, 0.88)',
        accent: '#006b91',
        accentHover: '#005575',
        text: '#111820',
        textSecondary: 'rgba(17, 24, 32, 0.76)',
        textMuted: 'rgba(17, 24, 32, 0.62)',
        line: 'rgba(17, 24, 32, 0.12)',
        lineStrong: 'rgba(17, 24, 32, 0.22)',
      },
    },
  },

  personal: {
    name: 'Your Name',
    monogram: 'DP',
    title: 'Your Professional Title',
    eyebrow: 'DEVELOPER · DIGITAL CRAFT',
    headline: 'Building digital experiences that feel alive.',
    bio: 'A developer focused on modern web applications, interactive interfaces, and visually polished digital experiences.',
    aboutLead: 'A developer who cares as much about how a product works as how it feels.',
    about: [
      'I like the moment a useful idea becomes something you can move through, understand, and enjoy using. My work sits at the intersection of frontend engineering and visual craft.',
      'I build clear, responsive interfaces for the web, from the first interaction to the details that make a product feel finished. I care about structure, accessibility, and the small decisions that make complex things easier to use.',
      'This is sample portfolio copy. Replace it with your story, the problems you solve, and the way you like to work.',
    ],
    profileImage: '',
    profileImageAlt: 'Add a path to your profile image in src/data/portfolio.ts.',
    location: 'Your city',
    availability: 'Availability · update this in portfolio.ts',
    experienceLevel: 'Experience level · update this in portfolio.ts',
    focus: 'Frontend & interactive web',
    technologies: ['React', 'TypeScript', 'JavaScript'],
    email: '',
    githubUrl: '',
    linkedinUrl: '',
    otherSocialLinks: [] as SocialLink[],
    resumeUrl: '',
  },

  navigation: {
    items: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Experience', href: '#experience' },
      { label: 'Education', href: '#education' },
      { label: 'Contact', href: '#contact' },
    ],
    primaryCta: 'Let’s work together',
  },

  copy: {
    accessibility: {
      skipToContent: 'Skip to content',
      mainNavigation: 'Main navigation',
      footerNavigation: 'Footer navigation',
      socialLinks: 'Social links',
      brandHome: 'Home',
      backToTop: 'Back to top',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      themeControl: 'Color theme',
      skills: 'skills',
      technologies: 'technologies',
    },
    totalSectionCount: '08',
    mobileMenu: {
      heading: 'Explore',
      note: 'Sample work and profile details are examples. Replace them in the portfolio configuration.',
    },
    hero: {
      projectsCta: 'View my work',
      contactCta: 'Contact me',
      basedIn: 'Based in',
      imageCaptionIndex: '01 / 04',
      visualIndex: '01',
      imageCaption: 'Interfaces with intention',
      floatingLabel: 'CURRENTLY EXPLORING',
      floatingValue: 'Interaction\n& atmosphere',
      verticalNote: 'SCROLL TO EXPLORE',
      bottomLeft: 'DESIGN-LED FRONTEND',
      bottomRight: 'SCROLL TO DISCOVER ↓',
      image: '/images/hero-sculpture.webp',
      imageAlt: 'Original abstract sculpture in graphite glass with electric-blue light.',
    },
    snapshot: {
      ariaLabel: 'Professional snapshot',
      role: 'ROLE',
      toolkit: 'TOOLKIT',
      focus: 'FOCUS',
      experience: 'EXPERIENCE',
      availability: 'AVAILABILITY',
    },
    about: {
      sectionNumber: '01',
      eyebrow: 'A little about me',
      titleLead: 'Good work lives',
      titleAccent: 'in the details.',
      signature: 'DEVELOPER · PORTFOLIO TEMPLATE',
      resumeCta: 'View résumé / CV',
    },
    skills: {
      sectionNumber: '02',
      eyebrow: 'The toolkit',
      titleLead: 'Skills &',
      titleAccent: 'technologies.',
      aside: 'Tools are only useful when they make the experience clearer. Here’s where this demo developer works.',
      disciplineLabel: 'DISCIPLINE',
    },
    projects: {
      sectionNumber: '03',
      eyebrow: 'Selected work · demo',
      titleLead: 'Made to be',
      titleAccent: 'explored.',
      aside: 'Fictional starting points. Replace the project data, images, and evidence in portfolio.ts.',
      demoLabel: 'DEMO CONCEPT',
      detailsLabel: 'Project notes',
      featuresLabel: 'Features',
      challengesLabel: 'Challenges',
      lessonsLabel: 'Lessons learned',
      liveDemoLabel: 'Live demo',
      sourceLabel: 'Source code',
      caseStudyLabel: 'Featured case study',
      projectImageUnavailable: 'Project image unavailable',
    },
    caseStudy: {
      sectionNumber: '04',
      eyebrow: 'Featured case study · demo',
      title: 'A more considered digital experience.',
      briefLabel: 'The brief',
      approachLabel: 'The approach',
      roleLabel: 'My role',
      outcomeLabel: 'The outcome',
      visualNote: 'DEMO CASE STUDY',
      builtWith: 'BUILT WITH',
      cta: 'Talk about a similar project',
    },
    experience: {
      sectionNumber: '05',
      eyebrow: 'Path so far',
      titleLead: 'Experience,',
      titleAccent: 'in progress.',
      aside: 'Replace the example entries with your real roles, contributions, and dates.',
      placeholderLabel: 'EXAMPLE',
    },
    education: {
      sectionNumber: '06',
      eyebrow: 'Learning & study',
      titleLead: 'Education,',
      titleAccent: 'your way.',
      aside: 'Add formal education, independent study, or remove this section if it does not fit your story.',
      placeholderLabel: 'EXAMPLE',
    },
    services: {
      sectionNumber: '07',
      eyebrow: 'What I can build',
      titleLead: 'Useful by design.',
      titleAccent: 'Polished by default.',
      aside: 'Edit the capability cards in portfolio.ts to describe the work you want to do.',
      capabilityLabel: 'CAPABILITY',
    },
    contact: {
      sectionNumber: '08',
      status: 'OPEN TO GOOD IDEAS · PLACEHOLDER',
      pretitle: 'Have a project in mind?',
      titleLead: 'Let’s build something',
      titleAccent: 'useful.',
      invitation: 'Let’s make something considered, useful, and memorable.',
      replacementNote: 'Replace the sample profile and contact details before publishing.',
      emailLabel: 'EMAIL',
      emailPlaceholder: 'your@email.com',
      emailNote: 'Add your real email in src/data/portfolio.ts to activate this link.',
      emailCta: 'Send an email',
      setupCta: 'Add your contact details',
      projectsCta: 'Explore the work',
    },
    footer: {
      descriptor: 'MODERN DEVELOPER PORTFOLIO TEMPLATE',
      copyright: 'Demo portfolio · replace sample content before publishing.',
      socialLabels: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
      },
    },
    imageFallback: 'Replace with your project image in portfolio.ts.',
  },

  skills: [
    {
      name: 'Frontend',
      summary: 'Interfaces built to feel clear, considered, and at home on any screen.',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Responsive design'],
    },
    {
      name: 'Programming',
      summary: 'Practical tools for connecting ideas, systems, and reliable experiences.',
      skills: ['Python', 'Git', 'APIs', 'Problem solving'],
    },
    {
      name: 'Creative / UI',
      summary: 'The interaction details and visual finish that make a product feel complete.',
      skills: ['UI development', 'Interaction design', 'Animations', 'Visual polish'],
    },
  ],

  experience: [
    {
      period: 'Add dates',
      role: 'Your role or project',
      organization: 'Your organization',
      description: 'Example entry — replace this with your contribution and the work you did.',
      technologies: ['React', 'TypeScript', 'Frontend'],
      isPlaceholder: true,
    },
    {
      period: 'Add dates',
      role: 'A project you explored',
      organization: 'Independent work · example',
      description: 'Example entry — add a project, your part in it, and the tools you used.',
      technologies: ['JavaScript', 'CSS', 'APIs'],
      isPlaceholder: true,
    },
  ],

  education: [
    {
      period: 'Add dates',
      qualification: 'Your qualification or area of study',
      institution: 'Your school, course, or learning path',
      description: 'Example entry — replace or remove this without claiming a real credential.',
      isPlaceholder: true,
    },
  ],

  services: [
    { title: 'Responsive websites', description: 'Fast, flexible sites that stay considered from a small screen to a wide canvas.', mark: '↗' },
    { title: 'React applications', description: 'Clear component-driven experiences designed around real user needs.', mark: '◌' },
    { title: 'Interactive interfaces', description: 'Purposeful interactions that make complex journeys easier to understand.', mark: '⌘' },
    { title: 'Portfolio websites', description: 'Distinctive, personal sites that make work easy to explore and remember.', mark: '▱' },
    { title: 'Landing pages', description: 'Focused pages that tell a clear story and make the next step obvious.', mark: '↗' },
    { title: 'Frontend systems', description: 'Reusable UI foundations that keep product work consistent and maintainable.', mark: '◫' },
    { title: 'API-connected interfaces', description: 'Thoughtful frontend experiences that connect cleanly to useful services and data.', mark: '⌁' },
    { title: 'UI animations', description: 'Lightweight motion that adds feedback and atmosphere without getting in the way.', mark: '⌘' },
    { title: 'Performance-focused web experiences', description: 'Responsive, efficient pages built to feel quick and stay reliable.', mark: '◌' },
  ],

  projects: [
    {
      id: 'noir',
      name: 'NOIR',
      description: 'A quiet, tactile storefront concept for an independent fragrance label.',
      detailedDescription: 'A product-led storefront concept with room for editorial imagery, clear product information, and a calm path through the shopping story.',
      image: '/images/project-noir.webp',
      imageAlt: 'Original still life artwork of a matte-black glass vessel in blue-black light.',
      technologies: ['React', 'TypeScript', 'Commerce UI'],
      githubUrl: '',
      liveDemoUrl: '',
      featured: true,
      category: 'Commerce',
      year: '2026 · demo',
      problem: 'Present a considered product without letting interface chrome compete with the object itself.',
      solution: 'A restrained product-led layout pairs clear purchase information with spacious editorial imagery, careful type, and a short path through the story.',
      role: 'Frontend and UI concept · replace with your contribution',
      outcome: 'A cohesive responsive demo concept that gives product imagery a clear focal point. No measured business results are claimed.',
      features: ['Responsive product storytelling', 'Editorial image treatment', 'Clear product-detail hierarchy'],
      challenges: ['Balancing product detail with generous visual space', 'Keeping the shopping path clear across screen sizes'],
      lessonsLearned: ['A focused hierarchy can make a complex product feel easier to explore.', 'Image crops and type scale need to adapt together.'],
    },
    {
      id: 'vanta',
      name: 'VANTA',
      description: 'A modular workspace concept that makes dense information feel composed.',
      detailedDescription: 'A fictional workspace interface that groups data into calm, scannable panels and makes the next useful action easy to find.',
      image: '/images/project-vanta.webp',
      imageAlt: 'Original abstract artwork of dark glass modules around a cyan focal point.',
      technologies: ['React', 'TypeScript', 'Data UI'],
      githubUrl: '',
      liveDemoUrl: '',
      featured: false,
      category: 'Product',
      year: '2026 · demo',
      problem: 'Make a dense set of workspace information feel legible rather than overwhelming.',
      solution: 'A modular dashboard concept uses clear grouping, restrained color, and consistent interaction patterns.',
      role: 'Frontend concept · replace with your contribution',
      outcome: 'A sample information layout with a clear scan path; this is a visual concept, not a shipped product.',
      features: ['Modular information cards', 'Responsive dashboard composition', 'Distinct status and priority cues'],
      challenges: ['Maintaining hierarchy across data-rich surfaces', 'Keeping smaller viewports easy to scan'],
      lessonsLearned: ['Consistent spacing and grouping do more than extra decoration.', 'Responsive data layouts benefit from deliberate prioritization.'],
    },
    {
      id: 'orbit',
      name: 'ORBIT',
      description: 'An exploratory visual study about connection, movement, and digital systems.',
      detailedDescription: 'An interactive visual-study concept using deliberate motion and layered elements to suggest relationships between systems.',
      image: '/images/project-orbit.webp',
      imageAlt: 'Original artwork of a luminous blue sphere and fine orbital ribbons.',
      technologies: ['React', 'TypeScript', 'Motion'],
      githubUrl: '',
      liveDemoUrl: '',
      featured: false,
      category: 'Interactive',
      year: '2026 · demo',
      problem: 'Communicate an abstract idea of connection without making the interface difficult to use.',
      solution: 'A restrained visual language uses simple controls, clear labels, and optional motion to support exploration.',
      role: 'Interaction and frontend concept · replace with your contribution',
      outcome: 'A demo study that treats motion as supporting information rather than spectacle.',
      features: ['Layered visual composition', 'Reduced-motion-aware interaction concept', 'Responsive framing'],
      challenges: ['Keeping visual movement subordinate to the content', 'Making the concept understandable at a glance'],
      lessonsLearned: ['Motion should explain relationships, not compete for attention.', 'A strong static composition matters even when animation is available.'],
    },
    {
      id: 'frame',
      name: 'FRAME',
      description: 'A digital gallery concept built around generous space and considered pacing.',
      detailedDescription: 'A fictional digital gallery that gives selected work space to breathe and uses a measured reading rhythm.',
      image: '/images/project-frame.webp',
      imageAlt: 'Original gallery artwork with dark metal frames and a deep blue light plane.',
      technologies: ['React', 'CSS', 'Responsive design'],
      githubUrl: '',
      liveDemoUrl: '',
      featured: false,
      category: 'Editorial',
      year: '2026 · demo',
      problem: 'Present a varied collection without flattening every piece into the same card.',
      solution: 'An editorial grid combines consistent framing with flexible content and generous spacing.',
      role: 'Design and frontend concept · replace with your contribution',
      outcome: 'A sample gallery direction that keeps the collection easy to browse across screen sizes.',
      features: ['Flexible collection cards', 'Gallery-first image framing', 'Responsive reading flow'],
      challenges: ['Balancing variety with a coherent visual system', 'Keeping large media useful on small screens'],
      lessonsLearned: ['Rhythm can create distinction without sacrificing consistency.', 'Responsive image choices should be part of the content model.'],
    },
  ] satisfies PortfolioProject[],

  seo: {
    siteTitle: 'Modern Developer Portfolio Template',
    siteUrl: '',
    description: 'A polished, responsive developer portfolio template built with React, TypeScript, and Vite.',
    author: 'Your Name',
    openGraphImage: '/images/hero-sculpture.webp',
    favicon: '/favicon.svg',
    keywords: ['developer portfolio template', 'React portfolio', 'TypeScript portfolio'],
  },
} as const;
