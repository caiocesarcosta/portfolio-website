import { AboutSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const aboutSection: AboutSectionType = {
  title: 'Sobre Mim',
  img: {
    src: '/profile.jpg', // Certifique-se de ter uma imagem sua em public/profile.jpg
    alt: 'Caio César da Costa',
  },
  list: [
    {
      id: getId(),
      title: 'Introdução',
      content:
        'Desenvolvedor Android Sênior com mais de 10 anos de experiência em todo o ciclo de vida do desenvolvimento de software, especializado na concepção, criação e evolução de aplicativos inovadores para a plataforma Android. Possuo um domínio sólido em Kotlin e Java, aplicando as mais recentes tecnologias Jetpack (Compose, Coroutines, Flow) e arquiteturas robustas como MVVM, MVP e MVI. Sou um forte defensor da qualidade de código, com vasta experiência em testes unitários e de interface (Mockito, JUnit), e na implementação de Design Patterns e princípios SOLID.',
    },
    {
      id: getId(),
      title: 'Experiência e Versatilidade',
      content:
        'Minha trajetória inclui a liderança técnica e estratégica em projetos de grande escala para o setor financeiro (notadamente no Itaú via BRQ), onde atuei na refatoração de bases de código legadas, otimização de performance e garantia de escalabilidade. Também possuo experiência em desenvolvimento de ecossistemas de automação (Android e .NET/C#) e na criação de soluções comerciais completas, demonstrando minha versatilidade e capacidade de adaptação a diferentes contextos de negócio.',
    },
    {
      id: getId(),
      title: 'Aperfeiçoamento em Machine Learning (IA)',
      content:
        'Além da minha expertise em mobile, tenho me aprofundado em Machine Learning (IA), com sólido conhecimento em Python, TensorFlow, Keras, desenvolvimento de algoritmos de classificação e visualização de dados, com foco em Processamento de Imagens e Visão Computacional. Essa experiência adicional reforça minha capacidade analítica e meu compromisso com o aprendizado contínuo e a inovação, buscando unir minha expertise mobile com as capacidades de inteligência artificial para criar soluções de ponta.',
    },
    {
      id: getId(),
      title: 'Metodologias e Liderança',
      content:
        'Sou um profissional proativo, com experiência em mentoria, gestão de projetos com metodologias ágeis (Scrum, Kanban), e focado em entregar soluções de alto impacto que combinem excelência técnica com valor de negócio. Busco oportunidades desafiadoras para aplicar minha experiência consolidada e minha visão abrangente de tecnologia em mobile e IA.',
    },
  ],
};