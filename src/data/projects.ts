export type PortfolioProject = {
  number: string;
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  year: string;
  image: string;
  imageAlt: string;
  label: string;
};

export const projects: PortfolioProject[] = [
  {
    number: '01',
    id: 'noir',
    title: 'NOIR',
    category: 'Commerce · Demo concept',
    description: 'A quiet, tactile storefront concept for an independent fragrance label.',
    technologies: ['React', 'TypeScript', 'Commerce UI'],
    year: '2026 · Demo',
    image: '/manus-storage/async-images/0MNbTKW2qvgnGv0zBY0omX/image-2.webp',
    imageAlt: 'Original still life artwork of a matte-black glass vessel in blue-black light.',
    label: 'DEMO CONCEPT',
  },
  {
    number: '02',
    id: 'vanta',
    title: 'VANTA',
    category: 'Product · Demo concept',
    description: 'A modular workspace concept that makes dense information feel composed.',
    technologies: ['React', 'TypeScript', 'Data UI'],
    year: '2026 · Demo',
    image: '/manus-storage/async-images/0MNbTKW2qvgnGv0zBY0omX/image-3.webp',
    imageAlt: 'Original abstract artwork of dark glass modules around a cyan focal point.',
    label: 'DEMO CONCEPT',
  },
  {
    number: '03',
    id: 'orbit',
    title: 'ORBIT',
    category: 'Interactive · Demo concept',
    description: 'An exploratory visual study about connection, movement, and digital systems.',
    technologies: ['React', 'TypeScript', 'Motion'],
    year: '2026 · Demo',
    image: '/manus-storage/async-images/0MNbTKW2qvgnGv0zBY0omX/image-4.webp',
    imageAlt: 'Original artwork of a luminous blue sphere and fine orbital ribbons.',
    label: 'DEMO CONCEPT',
  },
  {
    number: '04',
    id: 'frame',
    title: 'FRAME',
    category: 'Editorial · Demo concept',
    description: 'A digital gallery concept built around generous space and considered pacing.',
    technologies: ['React', 'CSS', 'Responsive design'],
    year: '2026 · Demo',
    image: '/manus-storage/async-images/0MNbTKW2qvgnGv0zBY0omX/image-5.webp',
    imageAlt: 'Original gallery artwork with dark metal frames and a deep blue light plane.',
    label: 'DEMO CONCEPT',
  },
];

export const featuredCaseStudy = {
  project: 'NOIR',
  title: 'A storefront with room to breathe.',
  category: 'Featured case study · Demo concept',
  problem:
    'The placeholder brief: present a considered product without letting interface chrome compete with the object itself.',
  solution:
    'A restrained product-led layout pairs clear purchase information with spacious editorial imagery, careful type, and a short path through the story.',
  role: 'Frontend concept · replace with your contribution',
  technologies: ['React', 'TypeScript', 'Responsive UI', 'Motion'],
  outcome:
    'A cohesive, responsive concept that gives product imagery a clear focal point and keeps the shopping flow legible. Qualitative demo outcome; no measured business results are claimed.',
  image: '/manus-storage/async-images/0MNbTKW2qvgnGv0zBY0omX/image-2.webp',
  imageAlt: 'Featured original artwork for the fictional NOIR storefront concept.',
};
