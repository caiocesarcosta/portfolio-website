import { ProjectsSectionType } from '@/lib/types/sections';

export const projectsSection: ProjectsSectionType = {
  title: 'Meus Projetos',
  projects: [
    {
      id: 'brq-itau',
      name: 'Desenvolvedor Android Sênior - BRQ (Itaú)',
      url: 'https://www.brq.com/',
      repo: 'https://github.com/caiocesarcosta',
      img: '/images/projects/brq-project.jpg',
      tags: ['Android', 'Kotlin', 'Java', 'Jetpack', 'MVVM', 'CI/CD', 'Testes'],
      techStack: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'Hilt', 'Room', 'Retrofit', 'JUnit', 'Mockito', 'Espresso', 'Jenkins', 'Jira'],
      description: 'Atuação estratégica em diversos projetos...',
      year: 2023, // <--- ADICIONE O ANO AQUI (ano de término ou mais relevante)
    },
    {
      id: 'flex-automation-android',
      name: 'Desenvolvedor Android - FLEX Automation (Automação Residencial)',
      url: 'https://www.flexautomation.com.br/',
      repo: 'https://github.com/caiocesarcosta',
      img: '/images/projects/flex-android.jpg',
      tags: ['Android', 'MVP', 'Automação', 'MongoDB', 'Firebase'],
      techStack: ['Java', 'Android SDK', 'MVP', 'MongoDB', 'Google Maps', 'Crashlytics', 'Firebase', 'GitHub'],
      description: 'Criação, desenvolvimento e atualização de aplicativo Android...',
      year: 2020, // <--- ADICIONE O ANO AQUI
    },
    // ... (adicione 'year' a TODOS os outros projetos, incluindo os de ML) ...
    {
      id: 'yolo-face-detection',
      name: 'Dector Face YOLO Project 5',
      url: '',
      repo: 'https://github.com/caiocesarcosta/dector_face_yolo_project5',
      img: '/images/projects/yolo-face.jpg',
      tags: ['Machine Learning', 'Python', 'YOLO', 'Visão Computacional'],
      techStack: ['Python', 'TensorFlow', 'Keras', 'YOLO'],
      description: 'Implementação de detecção de faces utilizando o algoritmo YOLO...',
      year: 2023, // <--- ADICIONE O ANO AQUI (ano do curso ou conclusão do projeto)
    },
    // ... e assim por diante para todos os seus 9 projetos restantes ...
  ],
};