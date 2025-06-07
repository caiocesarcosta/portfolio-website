import { SkillsSectionType } from '@/lib/types/sections';
// A linha 'import { ... } from "../icons";' foi removida.
// Os nomes dos ícones como 'logos:kotlin' são strings e serão interpretados por um componente de ícones que o template já deve ter.

export const skillsSection: SkillsSectionType = {
  title: 'Habilidades Técnicas',
  skills: [
    {
      id: 'mobile-development',
      title: 'Desenvolvimento Mobile (Android)',
      lottie: {
        light: '/lotties/mobile-dev.json', // Ajuste para um lottie relevante ou remova
        dark: '/lotties/mobile-dev-dark.json', // Ajuste para um lottie relevante ou remova
      },
      points: [
        'Mais de 10 anos de experiência em desenvolvimento Android com Java e Kotlin.',
        'Sólida expertise em Jetpack (Compose, MotionLayout, Room, LiveData, ViewBinding, Coroutines, Flow).',
        'Proficiência em arquiteturas como MVVM, MVP, MVVMI e MVC.',
        'Experiência em testes unitários e de interface (JUnit, Mockito, Espresso, Robolectric).',
        'Conhecimento em Design Patterns (SOLID, Observer, Repository, Injeção de Dependência, Builder, Singleton, Factory, Delegate).',
      ],
      softwareSkills: [
        { name: 'Kotlin', icon: 'logos:kotlin' },
        { name: 'Java', icon: 'logos:java' },
        { name: 'Android SDK', icon: 'logos:android' },
        { name: 'Jetpack Compose', icon: 'logos:jetpack-compose' },
        { name: 'Gradle', icon: 'logos:gradle' },
        { name: 'Hilt', icon: 'logos:hilt' },
        { name: 'Room', icon: 'logos:room' },
        { name: 'Retrofit', icon: 'logos:retrofit' },
      ],
    },
    {
      id: 'backend-databases',
      title: 'Backend e Bancos de Dados',
      lottie: {
        light: '/lotties/backend.json',
        dark: '/lotties/backend-dark.json',
      },
      points: [
        'Experiência com MySQL, DB2, SQLite, Room e MongoDB.',
        'Desenvolvimento em COBOL com DB2 e CICS.',
        'Análise de APIs com Postman e Insomnia.',
      ],
      softwareSkills: [
        { name: 'MySQL', icon: 'logos:mysql' },
        { name: 'DB2', icon: 'logos:ibm-db2' },
        { name: 'SQLite', icon: 'logos:sqlite' },
        { name: 'MongoDB', icon: 'logos:mongodb' },
        { name: 'COBOL', icon: 'logos:cobol' },
        { name: 'Postman', icon: 'logos:postman' },
      ],
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning (IA)',
      lottie: {
        light: '/lotties/ml.json',
        dark: '/lotties/ml-dark.json',
      },
      points: [
        'Conhecimento em Python, TensorFlow, Keras para desenvolvimento de algoritmos de classificação.',
        'Experiência em Processamento de Imagens e Visão Computacional com ML.',
        'Projetos práticos: Detecção de Faces (YOLO), Transfer Learning, Matrizes de Confusão, Transformação de Imagens.',
        'Uso de Matplotlib, NumPy, Pandas, Google Colab.',
      ],
      softwareSkills: [
        { name: 'Python', icon: 'logos:python' },
        { name: 'TensorFlow', icon: 'logos:tensorflow' },
        { name: 'Keras', icon: 'logos:keras' },
        { name: 'NumPy', icon: 'logos:numpy' },
        { name: 'Pandas', icon: 'logos:pandas' },
        { name: 'Matplotlib', icon: 'logos:matplotlib' },
      ],
    },
    {
      id: 'other-skills',
      title: 'Outras Habilidades e Ferramentas',
      lottie: {
        light: '/lotties/tools.json',
        dark: '/lotties/tools-dark.json',
      },
      points: [
        'C# e .NET (para desenvolvimento Desktop).',
        'Controle de Versão: Git (GitHub).',
        'Gerenciamento de Projetos: Jira, Trello.',
        'Metodologias Ágeis: Scrum, Kanban, Lean.',
        'Modelagem UML (Diagrama de Requisitos, Classe e Estado), Modelagem de Banco de Dados.',
        'Conhecimento em Usabilidade e Acessibilidade. Ferramentas de Layout: Figma.',
      ],
      softwareSkills: [
        { name: 'Git', icon: 'logos:git' },
        { name: 'GitHub', icon: 'logos:github' },
        { name: 'Jira', icon: 'logos:jira' },
        { name: 'Figma', icon: 'logos:figma' },
        { name: 'C#', icon: 'logos:c-sharp' },
        { name: '.NET', icon: 'logos:dotnet' },
        { name: 'VS Code', icon: 'logos:visual-studio-code' },
        { name: 'Ubuntu', icon: 'logos:ubuntu' },
        { name: 'MacOS', icon: 'logos:apple' },
        { name: 'Windows', icon: 'logos:microsoft-windows' },
      ],
    },
  ],
};