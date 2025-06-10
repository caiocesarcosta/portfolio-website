import { NavbarSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'sobre', url: '/#about' },
    { name: 'formação', url: '/#education' }, // Adicionado: Link para a nova seção de Formação Acadêmica
    { name: 'habilidades', url: '/#skills' },
    { name: 'experiência', url: '/#experience' },
    { name: 'projetos', url: '/#projects' },
    { name: 'contato', url: '/#contact' },
  ],
  cta: {
    title: 'currículo',
    url: `/${resumeFileName || '#'}`, // Mantido o fallback para segurança
  },
};

