import {
  CTAType,
  ExperienceType,
  FeaturedProjectType,
  NavLinkType,
  ProjectType,
  SocialLinkType,
  SoftwareSkillType,
} from '.';

export interface Section {
  title: string;
}

export interface NavbarSectionType {
  navLinks: NavLinkType[];
  cta: CTAType;
}

export interface HeroSectionType extends Section {
  subtitle?: string;
  tagline: string;
  description?: string;
  specialText?: string;
  cta?: CTAType & {
    hideInDesktop?: boolean;
  };
}

export interface AboutSectionType extends Section {
  list: {
    id: string;
    title: string;
    content: string;
  }[];
  img: {
    src: string;
    alt: string;
  };
}

type SkillType = {
  id: string;
  title: string;
  lottie: {
    light: string;
    dark: string;
  };
  points: string[];
  softwareSkills: SoftwareSkillType[];
};

export interface SkillsSectionType extends Section {
  skills: SkillType[];
}

export interface ExperienceSectionType extends Section {
  experiences: ExperienceType[];
}

export interface ProjectsSectionType extends Section {
  projects: ProjectType[];
}

export interface FeaturedProjectsSectionType extends Section {
  projects: FeaturedProjectType[];
}

export interface ContactSectionType extends Section {
  subtitle?: string;
  contactDetails?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  links?: {
    type: string;
    url: string;
    icon: string;
  }[];
  paragraphs?: string[];
}

export interface PortfolioSectionType extends Section {
  name: string;
  welcomeText: string;
  author: {
    name: string;
    tagline: string;
    image: string;
    email?: string; // <--- ADICIONADO: Propriedade 'email'
  };
  socialLinks: {
    github?: string;
    linkedin?: string;
    email?: string;
    instagram?: string;
    twitter?: string;
    medium?: string;
    discord?: string;
    facebook?: string;
  };
}

export interface SocialSectionType {
  socialLinks: SocialLinkType[];
}

export interface FooterSectionType extends Section {
  link: string;
}

export type SeoSectionType = {
  title: string;
  description: string;
  author: string;
  keywords: string[];
  url: string;
  image: string;

  
};

// *** NOVA INTERFACE: EducationSectionType ***
export interface EducationSectionType extends Section {
  education: {
    institution: string;
    degree: string;
    started: string; // Pode ser Date | string, dependendo de como você quer armazenar
    upto: string;     // Pode ser Date | 'present' | string
    description?: string[]; // Descrição opcional, pode ser um array de pontos
    url?: string;     // URL opcional da instituição
  }[];
}