import { ProjectsSectionType } from '@/lib/types/sections';

export const projectsSection: ProjectsSectionType = {
  title: 'Meus Projetos',
  projects: [
    {
      id: 'transfer-learning-project1',
      name: 'Classificação de Imagens (Gatos/Cachorros) com Transfer Learning',
      url: '', // Não há URL de demo, deixar vazio
      repo: 'https://github.com/caiocesarcosta/transfer_learning_projeto1',
      img: 'https://placehold.co/720x480/4CAF50/ffffff?text=ML+Project+1', // Substitua pela imagem real do projeto
      tags: ['Machine Learning', 'Deep Learning', 'Visão Computacional', 'Python', 'TensorFlow', 'Keras'],
      techStack: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'scikit-learn', 'Seaborn', 'Matplotlib'],
      description: 'Implementação de um modelo de classificação de imagens para gatos e cachorros utilizando Transfer Learning com TensorFlow e Keras, com foco em programação orientada a objetos e análise de desempenho.',
      year: 2024, // Ano estimado de conclusão/desenvolvimento
    },
    {
      id: 'transform-image-project2',
      name: 'Processamento de Imagem: Escala de Cinza e Binária',
      url: '',
      repo: 'https://github.com/caiocesarcosta/transform-image-gray-binary-project2',
      img: 'https://placehold.co/720x480/FFC107/000000?text=Image+Processing', // Substitua pela imagem real do projeto
      tags: ['Processamento de Imagem', 'Python', 'Orientação a Objetos', 'Visão Computacional'],
      techStack: ['Python', 'Matplotlib', 'PIL (Pillow)', 'NumPy'],
      description: 'Projeto que demonstra conceitos de processamento de imagem em Python, convertendo imagens coloridas para escala de cinza e binário, com foco em implementação sem bibliotecas externas para manipulação direta de pixels.',
      year: 2024, // Ano estimado
    },
    {
      id: 'matrix-confusion-project3',
      name: 'Classificador CNN com Análise de Matriz de Confusão',
      url: '',
      repo: 'https://github.com/caiocesarcosta/matrix_confusion_project3',
      img: 'https://placehold.co/720x480/03A9F4/ffffff?text=Confusion+Matrix', // Substitua pela imagem real do projeto
      tags: ['Machine Learning', 'CNN', 'Classificação', 'Python', 'TensorFlow', 'Keras', 'Métricas'],
      techStack: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'scikit-learn', 'Seaborn', 'Matplotlib'],
      description: 'Classificador de imagens de gatos e cachorros utilizando CNN, com ênfase na análise detalhada do desempenho do modelo através de matriz de confusão e métricas de classificação avançadas.',
      year: 2024, // Ano estimado
    },
    {
      id: 'yolov5-detection-project4',
      name: 'Detecção de Objetos (YOLOv5) com Dataset COCO',
      url: '',
      repo: 'https://github.com/caiocesarcosta/detection_transfer_learning_yolo_porject4',
      img: 'https://placehold.co/720x480/9C27B0/ffffff?text=YOLOv5+Detection', // Substitua pela imagem real do projeto
      tags: ['Machine Learning', 'Detecção de Objetos', 'YOLOv5', 'Visão Computacional', 'Python'],
      techStack: ['Python', 'TensorFlow', 'Keras', 'YOLOv5', 'COCO Dataset', 'NumPy', 'requests', 'PIL (Pillow)', 'PyYAML'],
      description: 'Aplicação do framework YOLOv5 para detecção de objetos em imagens, utilizando o dataset COCO, com processos automatizados de download, conversão, treinamento e detecção.',
      year: 2024, // Ano estimado
    },
  ],
};

export default projectsSection;
