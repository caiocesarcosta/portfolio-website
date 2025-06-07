import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Olá, meu nome é', // Atualizado para português
  title: 'Caio César.', // Atualizado para o seu nome
  tagline: 'Desenvolvedor Android Sênior e Praticante de Machine Learning.', // Reflete que está praticando e aprofundando
  description:
    'Com mais de 10 anos de experiência como Desenvolvedor Android Sênior, sou apaixonado por criar aplicativos inovadores com Kotlin, Java e Jetpack (Compose, Room), aplicando arquiteturas MVVM/MVP/MVI. Além disso, estou me aprofundando em Machine Learning (IA), com conhecimento adquirido em cursos e projetos práticos envolvendo Python, TensorFlow e Visão Computacional. Busco aliar minha visão mobile a soluções inteligentes e de alto impacto.', // Descrição ajustada para refletir o aprendizado e prática em ML
  specialText: 'Atualmente buscando novas oportunidades e desafios, com foco em aprimoramento em Machine Learning.', // Reflete o foco no aprimoramento
  cta: {
    title: 'ver meu currículo', // Texto do CTA atualizado para português
    url: `/${resumeFileName || '#'}`, // Garante que a URL não seja undefined, usando '#' como fallback
    hideInDesktop: true, // Mantido, se a funcionalidade for para ocultar o CTA em desktop
  },
};
