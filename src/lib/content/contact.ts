import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'Entre em Contato',
  subtitle: 'Vamos conectar!',
  contactDetails: {
    email: 'caiocesarcosta@hotmail.com',
    phone: '(11) 98792-6713',
    address: 'Rua Ajuana, 31 • Bairro: Ermelino Matarazzo, SP',
  },
  links: [
    {
      type: 'LinkedIn',
      url: 'https://www.linkedin.com/in/caiocesarcosta/',
      icon: 'mdi:linkedin',
    },
    {
      type: 'GitHub',
      url: 'https://github.com/caiocesarcosta',
      icon: 'mdi:github',
    },
    {
      type: 'Portfólio',
      url: 'https://caiocesarcosta.vercel.app',
      icon: 'mdi:web',
    },
  ],
  paragraphs: [ // <--- ADICIONADO: Array de parágrafos. Preencha ou deixe vazio.
    // 'Sinta-se à vontade para entrar em contato comigo para discutir oportunidades, colaborações ou apenas para dizer um "olá!".',
    // 'Estou sempre aberto a novas conexões e desafios!',
  ],
};