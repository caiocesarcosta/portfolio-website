'use client'; // Necessário para usar hooks como useState e useWindowWidth

import useWindowWidth from '@/lib/hooks/use-window-width';
import { ExperienceType } from '@/lib/types'; // Importa o tipo ExperienceType
import { getBreakpointsWidth, getId } from '@/lib/utils/helper'; // Funções utilitárias

import { Link, ListItem } from '@/components'; // Importa o componente Link (do Next.js) e ListItem

import { useState } from 'react'; // Hook para gerenciar estado

// Define as propriedades que o componente TabList irá receber
type Props = {
  experiences: ExperienceType[]; // Array de objetos do tipo ExperienceType
};

const TabList = ({ experiences }: Props) => {
  // Estado para controlar qual experiência está ativa/selecionada
  const [activeExperience, setActiveExperience] = useState(0);
  // Hook customizado para obter a largura da janela, útil para responsividade
  const windowWidth = useWindowWidth();

  // Garante que experiences[activeExperience] não seja undefined antes de desestruturar.
  // Se for undefined (por exemplo, se o array estiver vazio ou o índice for inválido),
  // 'currentExperience' será um objeto vazio, e as propriedades desestruturadas serão undefined.
  const currentExperience = experiences[activeExperience] || {};
  const { role, company, companyUrl, started, upto, tasks } = currentExperience as ExperienceType;

  // Obtém a largura do breakpoint 'sm' (small) para lógica de responsividade
  const sm = getBreakpointsWidth('sm');

  // Define o estilo do "slider" (um indicador visual da tab ativa) baseado na largura da tela.
  // Para telas pequenas (mobile), o slider se move horizontalmente.
  // Para telas maiores, o slider se move verticalmente.
  const sliderStyle =
    windowWidth <= sm
      ? {
          left: `calc(${activeExperience}*120px)`, // Move o slider horizontalmente (120px por tab)
        }
      : {
          top: `calc(${activeExperience}*2.5rem)`, // Move o slider verticalmente (2.5rem por tab)
        };

  return (
    // Contêiner principal do componente, com layout flexível para responsividade
    <div className="flex flex-col sm:flex-row text-sm md:text-base gap-6 md:gap-10 min-h-[250px]">
      {/* Sidebar de seleção de empresas/experiências */}
      <div className="font-mono text-xs sm:text-sm relative flex justify-start sm:flex-col overflow-scroll sm:overflow-auto sm:min-w-[180px]">
        {experiences.map(({ company }, i) => (
          // Botão para cada empresa, que quando clicado, define a experiência ativa
          <button
            key={getId()} // Usa uma função getId() para gerar uma key única para cada botão
            className={`h-10 min-w-[120px] sm:w-auto sm:px-5 sm:!text-left capitalize hover:bg-accent-light hover:text-accent focus:outline-none focus:bg-accent-light focus:text-accent ${
              i === activeExperience ? 'text-accent' : '' // Aplica estilo de destaque à tab ativa
            }`}
            onClick={() => setActiveExperience(i)} // Ao clicar, atualiza o estado para a experiência correspondente
          >
            {company} {/* Exibe o nome da empresa no botão */}
          </button>
        ))}
        {/* Elemento de fundo do slider (barra estática) */}
        <div className="absolute h-0.5 w-full sm:w-0.5 sm:h-full rounded-full bottom-0 sm:inset-0 left-0 bg-dark-3"></div>
        {/* Slider real que se move para indicar a tab ativa */}
        <div
          style={sliderStyle} // Aplica o estilo de posicionamento calculado (horizontal ou vertical)
          className="absolute h-0.5 w-[120px] sm:w-0.5 sm:h-10 rounded-full bg-accent bottom-0 left-0 sm:inset-0 transition-all duration-250 delay-100 in-scroll"
        ></div>
      </div>

      {/* Detalhes da experiência ativa (lado direito) */}
      <div key={getId()} className="p-1 space-y-5">
        <div className="space-y-1">
          <h3 className="text-lg font-medium capitalize text-dark-2">
            {role}{' '} {/* Exibe o cargo da experiência ativa */}
            {/* CORREÇÃO APLICADA AQUI: Renderiza o <Link> CONDICIONALMENTE */}
            {/* O link só será renderizado se 'companyUrl' for uma string válida e não vazia.
                Caso contrário, renderiza apenas um <span> para o nome da empresa. */}
            {companyUrl && typeof companyUrl === 'string' && companyUrl.length > 0 ? (
              <Link href={companyUrl} target="_blank" className="text-accent">
                @{company} {/* Exibe o nome da empresa como um link */}
              </Link>
            ) : (
              // Se companyUrl for inválida/vazia, exibe o nome da empresa como texto simples
              <span>@{company}</span>
            )}
          </h3>
          <p className="font-mono text-xs capitalize">
            <>
              {started} - {upto} {/* Exibe o período da experiência */}
            </>
          </p>
        </div>

        <ul className="space-y-2">
          {tasks.map((task) => (
            <ListItem key={getId()}>{task}</ListItem> // Lista de tarefas/responsabilidades da experiência
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabList;
