import { PortfolioSectionType } from '@/lib/types/sections';

export const portfolioSection: PortfolioSectionType = {
  title: 'Meu Portfólio',
  name: 'Caio César da Costa',
  welcomeText: 'Olá, eu sou o Caio César!',
  author: {
    name: 'Caio César da Costa',
    tagline: 'Desenvolvedor Android | Machine Learning Practitioner',
    image: '/profile.jpg',
  },
  socialLinks: {
    github: 'https://github.com/caiocesarcosta',
    linkedin: 'https://www.linkedin.com/in/caiocesarcosta/',
    email: 'caiocesarcosta@hotmail.com',
    instagram: '',
    twitter: '',
    medium: '',
    discord: '',
    facebook: '', // <--- ADICIONADO: Define o facebook como string vazia
  },
};

export const author = portfolioSection.author;
export const socialLinks = portfolioSection.socialLinks;