'use client';

import { contactSection } from '@/lib/content/contact';

import { Button, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

const Contact = () => {
  // Desestruturando as propriedades.
  // 'paragraphs' pode ser undefined, então precisamos verificar antes de usar .map()
  // 'link' também pode ser undefined, então precisamos fornecer um fallback para o href
  const { subtitle, title, paragraphs, links, contactDetails } = contactSection;

  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center !py-16 md:!py-24 mb-20 md:mb-32"
      {...getSectionAnimation}
    >
      <p className="mb-3 font-mono text-sm capitalize text-accent">
        {subtitle}
      </p>
      <h2 className="heading-secondary !mb-5">{title}</h2>

      {/* CORREÇÃO PARA 'paragraphs': Verifica se 'paragraphs' existe e não está vazio antes de mapear */}
      {paragraphs && paragraphs.length > 0 && (
        <>
          {paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </>
      )}

      {/* CORREÇÃO PARA 'link': Usamos o 'links' (o array) ou 'contactDetails.email' para o href */}
      {/*
        O componente original usava 'link' diretamente, mas nossa ContactSectionType
        tem 'links' (um array) e 'contactDetails'.
        Vamos assumir que você quer um botão para "dizer olá" que abre o e-mail,
        ou direciona para uma URL específica se ela for definida em 'links'.

        Opção 1 (Email):
        Se 'contactDetails.email' existir, usamos um mailto link.

        Opção 2 (Primeiro Link no array 'links'):
        Se houver links definidos e o primeiro tiver uma url, usamos essa.
        Precisa verificar se 'links' existe e se 'links[0].url' existe.
      */}
      <Button
        type="link"
        size="lg"
        // Lógica para definir o href:
        // 1. Tenta usar o email dos contactDetails (mailto:)
        // 2. Se não tiver email, tenta usar a URL do primeiro link do array 'links'
        // 3. Se nenhuma das opções acima existir, usa '#' como fallback.
        href={
          (contactDetails?.email ? `mailto:${contactDetails.email}` : undefined) ||
          (links && links.length > 0 && links[0]?.url ? links[0].url : undefined) ||
          '#'
        }
        center
        className="mt-12"
      >
        Diga Olá {/* Texto do botão em português */}
      </Button>
    </Wrapper>
  );
};

export default Contact;
