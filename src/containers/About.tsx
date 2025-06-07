'use client';

import { aboutSection } from '@/lib/content/about';

import { AuthorImage, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection; // 'list' é um ARRAY de objetos {id, title, content}
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          {/*
            Conteúdo estático original. Considerar mover para about.ts se for dinâmico
            ou remover se não for relevante para Caio César.
            Por enquanto, mantive como está para não introduzir mais variáveis.
            IDEALMENTE, ESTES PARÁGRAFOS TAMBÉM VIRIAM DE aboutSection.list
          */}
          <p>
            Olá, meu nome é Caio César. Sou um desenvolvedor web Full-Stack
            apaixonado e estou sempre buscando explorar novas tecnologias.
          </p>
          <p>
            Atualmente, meu foco principal é o desenvolvimento mobile e a busca
            por uma oportunidade desafiadora na área.
          </p>
          <p>
            (Este é um placeholder. Você pode preencher com sua biografia completa ou remover.)
          </p>

          {/* CORREÇÃO APLICADA AQUI: Itera sobre o ARRAY 'list' */}
          {list && list.length > 0 && ( // Verifica se 'list' existe e não está vazio
            <div className="space-y-4"> {/* Adicionado um div para agrupar os itens da lista */}
              {list.map((item) => ( // Itera sobre cada 'item' no array 'list'
                <div key={item.id} className="space-y-1"> {/* Cada item da lista pode ter um título e conteúdo */}
                  <h3 className="font-semibold text-lg text-dark-2 dark:text-light-2 capitalize">{item.title}</h3>
                  <p className="text-sm md:text-base">{item.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <AuthorImage src={img.src} alt={img.alt} /> {/* Corrigi para img.src e img.alt */}
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
