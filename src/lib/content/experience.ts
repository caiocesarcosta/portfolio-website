import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: 'Experiência Profissional',
  experiences: [
    {
      company: 'BRQ Digital Solutions (para Itaú)',
      companyUrl: 'https://www.brq.com/', // URL da BRQ
      role: 'Desenvolvedor Android Sênior', // Ajustei para Sênior conforme o About
      started: 'Agosto de 2020',
      upto: 'Abril de 2023',
      tasks: [
        'Atuação em diversos projetos de grande escala para o Itaú (SuperApp, módulos SuperApp, Cartão Branco/Itaú One), desenvolvendo funcionalidades como Cartões, Limites, Analytics (back-end), Produtos, Empréstimos e o programa de pontos Iupp.',
        'Participação ativa na Squad de Teste A/B, garantindo a qualidade e eficácia das novas funcionalidades através da implementação de testes.',
        'Implementação de testes unitários e de interface utilizando frameworks como JUnit, JUnit5, Mockito e Espresso, assegurando a robustez e confiabilidade do software.',
        'Liderança na refatoração de código Java para Kotlin, adotando as mais recentes tecnologias e frameworks Android (Jetpack, Compose, MotionLayout, Room, LiveData, ViewBinding, Koin) e padrões de arquitetura (MVVM, MVVMI, MVP), resultando em uma melhoria significativa na escalabilidade e desempenho dos aplicativos.',
        'Responsável pelo gerenciamento e atualização dos pacotes de dependência no Gradle e pela migração para o Android X em projetos legados, garantindo a modernização e compatibilidade das aplicações.',
        'Gerenciamento e acompanhamento do fluxo de Merge Requests no GitHub, assegurando a integração contínua e a qualidade do código.',
        'Utilização e gestão de ferramentas como GitHub (controle de versão), Jenkins (automação de build, testes, segurança e deploy) e Jira (gerenciamento de atividades), otimizando o fluxo de trabalho e a entrega de projetos.',
        'Colaboração próxima com a equipe de UX para garantir a aderência às diretrizes de design e usabilidade do Android.',
        'Mentoria e suporte técnico a outros desenvolvedores, promovendo a troca de conhecimento e o crescimento da equipe.',
        'Participação ativa em reuniões de análise técnica, contribuindo para a estimativa de prazos e a identificação de desafios.',
        'Engajamento nas cerimônias ágeis (Daily, Refinamento, Retro) e na análise técnica, utilizando metodologias como Scrum, Kanban e Lean para otimizar o processo de desenvolvimento.',
        'Atuação como membro da equipe, compreendendo o escopo de negócio de diferentes áreas para garantir a entrega de soluções alinhadas com as necessidades do cliente. Demonstração de rápida adaptação a novas tecnologias, linguagens e ambientes de desenvolvimento, mantendo-me atualizado com as últimas tendências do mercado.',
      ],
    },
    {
      company: 'FLEX Automation',
      companyUrl: 'https://www.flexautomation.com.br/', // URL da FLEX Automation se disponível
      role: 'Desenvolvedor Android',
      started: 'Janeiro de 2018',
      upto: 'Julho de 2020',
      tasks: [
        '**Desenvolvimento de Aplicativo Android para Automação Residencial (MVP):** Criação, desenvolvimento e atualização de um aplicativo Android utilizando a arquitetura MVP. Implementação de comunicação e configuração de uma smart válvula via sincronismo com Wi-Fi. Desenvolvimento de funcionalidades para sincronização, configuração inicial, notificações de status e controle remoto. Lógica para fechamento automático da válvula em caso de detecção de vazamento mecânico. Integração com MongoDB e Google Maps. Implementação de Crashlytics e Firebase. Versionamento com GitHub.',
        '**Desenvolvimento de Aplicativo Desktop para Gerenciamento Residencial (.NET, C#, MVVM):** Criação e desenvolvimento de um aplicativo desktop utilizando C# e MVVM. Utilização do Material Design para interface moderna. Implementação de funcionalidades para gerenciamento e configuração de diversos dispositivos automatizados (smart lâmpadas, painéis touch, sensores de porta e janela) com comunicação Bluetooth e Wi-Fi. Versionamento com GitHub e gerenciamento de atividades com Trello.',
      ],
    },
    {
      company: 'Audit Business',
      companyUrl: 'https://www.auditbusiness.com.br/', // URL da Audit Business se disponível
      role: 'Desenvolvedor Android',
      started: 'Fevereiro de 2015',
      upto: 'Fevereiro de 2016',
      tasks: [
        '**Criação e Desenvolvimento do Aplicativo Android ControlQuest:** Fui o criador e principal desenvolvedor do aplicativo Android ControlQuest, inicialmente utilizando a arquitetura MVC (Model-View-Controller) e evoluindo para MVVM. O aplicativo é voltado para a área comercial e tem como objetivo realizar auditorias qualitativas, sendo responsável pelo gerenciamento das informações coletadas em campo.',
        'Desenvolvimento de funcionalidades para a geração de relatórios detalhados sobre a qualidade do ambiente, atendimento e outros pontos operacionais. Criação da camada de persistência de dados utilizando o banco de dados SQLite. Utilização de Controle de Versão de Código Fonte (VCS) para gerenciar as alterações e o histórico do projeto.',
      ],
    },
    {
      company: 'Accenture do Brasil',
      companyUrl: 'https://www.accenture.com/br-pt', // URL da Accenture Brasil
      role: 'Desenvolvedor COBOL',
      started: 'Agosto de 2010',
      upto: 'Abril de 2013',
      tasks: [
        'Desenvolvimento em COBOL, utilização do banco de dados DB2.',
        'Conhecimento necessário em CICS para análise de código COBOL.',
        'Análise dos documentos da arquitetura de software para elaboração dos casos de teste online e batch na fase de Teste Funcional e Integrado.',
        'Testar os Planos de Casos de Teste Online e Batch.',
      ],
    },
  ],
};