export const LINK_REQUIRED = 'LINK_REQUIRED'

export type ProjectLink = string | typeof LINK_REQUIRED | null

export interface PortfolioProfile {
  name: string
  title: string
  alternateTitle: string
  intro: string
  bio: string
  email: string
  phone: string
  phoneHref: string
  location: string
  avatar: string
  github: string
  linkedin: string
  resumePath: string
  availability: string
}

export interface SkillCategory {
  category: string
  skills: readonly string[]
}

export interface PortfolioProject {
  id: string
  title: string
  technologies: readonly string[]
  description: string
  features: readonly string[]
  image: string
  githubUrl: ProjectLink
  liveUrl: ProjectLink
}

export interface ExperienceItem {
  title: string
  company: string
  dates: string
  responsibilities: readonly string[]
}

export interface EducationItem {
  title: string
  institution: string
}

export interface CertificationItem {
  title: string
  issuer: string
}

export const portfolioProfile: PortfolioProfile = {
  name: 'Jahid Sami',
  title: 'Junior Frontend Developer',
  alternateTitle: 'Junior Frontend Developer',
  intro:
    'CSE graduate and Junior Frontend Developer focused on building responsive web experiences with TypeScript, React, Next.js and Tailwind CSS.',
  bio:
    'I am a CSE graduate and Junior Frontend Developer focused on creating responsive, user-friendly websites with TypeScript, React, Next.js and Tailwind CSS. My technical skills also include Node.js, Python, Django, C and JavaScript.',
  email: 'engineerjahidsami@gmail.com',
  phone: '+880-1752868876',
  phoneHref: '+8801752868876',
  location: 'Dhaka, Bangladesh',
  avatar: '/profile.png',
  github: 'https://github.com/jahidsami985',
  linkedin: 'https://www.linkedin.com/in/jahid-uddin-sami-4b52823a1/',
  resumePath: '/Jahid_Uddin_Sami_Resume.docx',
  availability: 'Open to junior frontend developer roles',
}

export const heroStats = [
  { label: 'Projects', value: '2' },
  { label: 'Web Experience', value: '2023-2026' },
  { label: 'Focus', value: 'Frontend' },
]

export const skillCategories: readonly SkillCategory[] = [
  {
    category: 'Technical Skills',
    skills: [
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'Python',
      'Django',
      'C',
      'JavaScript',
    ],
  },
]

export const featuredSkillBadges = [
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'JavaScript',
]

export const portfolioProjects: readonly PortfolioProject[] = [
  {
    id: 'softzino-tech-website',
    title: 'softzino_tech_website',
    technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    description:
      'A multi-page website for Softzino Technologies, built from Figma designs with Next.js, TypeScript and Tailwind CSS.',
    features: [
      'Company and service detail pages',
      'Developer hiring and engagement pages',
      'Product and solutions showcase',
      'Services mega-menu navigation',
      'Talent request form with submission feedback',
    ],
    image: '/project-softzino.png',
    githubUrl: 'https://github.com/jahidsami985/softzino_tech_website',
    liveUrl: 'https://softzino-tech-website.vercel.app/',
  },
  {
    id: 'sami-tea-stall-project',
    title: 'sami-tea-stall-project',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'Express.js', 'SQLite'],
    description:
      'A tea-stall e-commerce website with a searchable menu, shopping cart, checkout and an AI-powered tea assistant.',
    features: [
      'Menu search and filtering',
      'Persistent shopping cart and checkout',
      'WhatsApp ordering',
      'AI-powered tea assistant',
      'Customer reviews and admin dashboard',
    ],
    image: '/project-sami-tea-stall.png',
    githubUrl: 'https://github.com/jahidsami985/sami-tea-stall-project',
    liveUrl: 'https://sami-tea-stall-project.vercel.app/',
  },
]

export const experienceItems: readonly ExperienceItem[] = [
  {
    title: 'Junior Software Engineer',
    company: 'Spinoff Studio',
    dates: '2026-Present',
    responsibilities: [],
  },
  {
    title: 'Junior Web Developer',
    company: 'Amar Fuel',
    dates: '2023-2025',
    responsibilities: [
      'Built and maintained web application features using Django, React and MySQL',
      'Worked across backend and frontend layers',
      'Developed and updated database-driven pages',
      'Contributed to REST API endpoints for internal product features',
      'Identified and fixed frontend and backend bugs',
      'Helped improve release stability during testing cycles',
    ],
  },
]

export const educationItems: readonly EducationItem[] = [
  {
    title: 'Bachelor of Science in Computer Science and Engineering',
    institution: 'United International University, Dhaka',
  },
]

export const certificationItems: readonly CertificationItem[] = [
  {
    title: 'Full Stack Web Development with Python, Django & React',
    issuer: 'Ostad',
  },
]

export const languageItems = [
  'English',
  'Bangla',
  'Hindi',
  'Japanese',
]

export function hasUsableLink(link: ProjectLink): link is string {
  return Boolean(link && link !== LINK_REQUIRED)
}
