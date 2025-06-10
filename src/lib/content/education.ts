import { EducationSectionType } from '@/lib/types/sections';

export const educationSection: EducationSectionType = {
  title: 'Formação Acadêmica', // Título da seção
  education: [
    {
      institution: 'FEI - Fundação Educacional Inaciana "Pe. Sabóia de Medeiros”', // Nome da instituição
      degree: 'Bacharel em Ciência da Computação', // Grau/Curso
      started: '2007', // Ano de início
      upto: '2010', // Ano de conclusão
      description: [
        'Foco em algoritmos, estruturas de dados, e sistemas de informação.',
        'Desenvolvimento de projetos acadêmicos em diversas linguagens e tecnologias.',
      ],
      url: 'https://portal.fei.edu.br/', // URL da instituição (opcional)
    },
    // Você pode adicionar mais entradas para outras formações, cursos, pós-graduações, etc.
    /*
    {
      institution: 'DIO - Digital Innovation One',
      degree: 'Bootcamp em Machine Learning e Inteligência Artificial',
      started: '2023',
      upto: 'Presente',
      description: [
        'Aprofundamento em conceitos de Machine Learning, TensorFlow e Python.',
        'Desenvolvimento de projetos práticos em Visão Computacional e análise de dados.',
      ],
      url: 'https://www.dio.me/',
    },
    */
  ],
};
