import { NavbarSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'sobre', url: '/#about' },
    { name: 'habilidades', url: '/#skills' },
    { name: 'experiencia', url: '/#experience' },
    { name: 'projetos', url: '/#projects' },
    { name: 'contato', url: '/#contact' },
  ],
  cta: {
    title: 'currículo',
    url: `/${resumeFileName}`,
  },
};

