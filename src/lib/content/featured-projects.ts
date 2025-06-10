import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projetos em que trabalhei", // Título ajustado
  projects: [
    {
      id: getId(),
      name: 'SuperApp Itaú (BRQ Digital Solutions)',
      description: 'Atuação estratégica em diversos projetos de grande escala para o Itaú, desenvolvendo funcionalidades complexas e inovadoras no SuperApp e outros módulos bancários.',
      tasks:
        'Liderança na refatoração de código Java para Kotlin, adoção de Jetpack Compose, Room, LiveData, Koin e padrões de arquitetura (MVVM, MVVMI, MVP). Desenvolvimento de funcionalidades de Cartões, Limites, Produtos, Empréstimos e programa de pontos Iupp. Participação ativa em Squad de Teste A/B e implementação de testes unitários/interface (JUnit, Mockito, Espresso). Gerenciamento de pacotes Gradle e migração para Android X. Otimização de fluxo de trabalho com GitHub, Jenkins e Jira.',
      url: 'https://www.brq.com/', // Link para a empresa
      img: 'https://placehold.co/720x480/007bff/ffffff?text=SuperApp+Itau', // Placeholder, substituir por imagem real
      tags: ['Android', 'Kotlin', 'Java', 'Jetpack Compose', 'MVVM', 'Testes', 'CI/CD', 'Banking'],
      repo: '', // Provavelmente um projeto privado, deixar vazio ou usar GitHub geral se houver conteúdo público
    },
    {
      id: getId(),
      name: 'Automação Residencial (FLEX Automation)',
      description: 'Criação, desenvolvimento e atualização de aplicativo Android e Desktop para automação residencial, gerenciando smart devices e comunicação via Wi-Fi e Bluetooth.',
      tasks:
        'Desenvolvimento de aplicativo Android (MVP) com sincronismo e configuração de smart válvula via Wi-Fi, notificações de status e controle remoto. Lógica para fechamento automático de válvula em caso de vazamento. Integração com MongoDB e Google Maps. Implementação de Crashlytics e Firebase. Desenvolvimento de aplicativo desktop (.NET, C#, MVVM) para gerenciamento de smart lâmpadas, painéis touch e sensores com comunicação Bluetooth e Wi-Fi.',
      url: 'https://www.flexautomation.com.br/', // Link para a empresa
      img: 'https://placehold.co/720x480/28a745/ffffff?text=Flex+Automation', // Placeholder, substituir por imagem real
      tags: ['Android', 'MVP', 'C#', '.NET', 'Automação', 'IoT', 'MongoDB', 'Firebase'],
      repo: 'https://github.com/caiocesarcosta', // Link para seu GitHub geral ou repositório específico se existir
    },
    {
      id: getId(),
      name: 'ControlQuest (Audit Business)',
      description: 'Criação e desenvolvimento do aplicativo Android ControlQuest para auditorias qualitativas e gerenciamento de informações comerciais em campo.',
      tasks:
        'Concepção e desenvolvimento do aplicativo Android ControlQuest, evoluindo da arquitetura MVC para MVVM. Foco em auditorias qualitativas e gerenciamento de dados de campo. Implementação de funcionalidades para geração de relatórios detalhados. Criação da camada de persistência de dados com SQLite. Uso de Controle de Versão de Código Fonte (VCS) para gerenciamento do projeto.',
      url: 'https://www.auditbusiness.com.br/', // Link para a empresa
      img: 'https://placehold.co/720x480/ffc107/000000?text=Audit+Business', // Placeholder, substituir por imagem real
      tags: ['Android', 'MVC', 'MVVM', 'SQLite', 'Auditoria', 'Comercial'],
      repo: 'https://github.com/caiocesarcosta', // Link para seu GitHub geral ou repositório específico se existir
    },
    // Removi os projetos anteriores (GetLifeGuard, Valuemetrix, Velvi Matrimony, Drafton)
    // Se você ainda quiser incluí-los como 'Featured Projects', podemos ajustá-los.
  ],
};

export default featuredProjectsSection;
