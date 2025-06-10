'use client'; // Marcar como Client Component se usar hooks ou interatividade

import { educationSection } from '@/lib/content/education'; // Importa os dados da formação acadêmica
import { getId } from '@/lib/utils/helper'; // Importa a função para gerar IDs únicos

import { Link, ListItem, Wrapper } from '@/components'; // Presumindo que você tem Wrapper e Link (do Next.js) e ListItem

import { getSectionAnimation } from '@/styles/animations'; // Presumindo que você tem animações

// Componente React para a seção de Formação Acadêmica
const Education = () => {
  const { title, education } = educationSection; // Desestrutura o título e os dados da formação

  return (
    <Wrapper id="education" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2> {/* Título da seção */}

      {/* Verifica se existem dados de formação para renderizar */}
      {education && education.length > 0 && (
        <div className="space-y-8 md:space-y-12 mt-8 md:mt-12">
          {education.map((item) => (
            <div key={getId()} className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-shrink-0 font-mono text-sm text-accent md:w-40">
                {item.started} - {item.upto} {/* Período da formação */}
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-medium text-dark-2 dark:text-slate-200">
                  {item.degree} {/* Grau/Curso */}
                  {item.url ? ( // Renderiza o link da instituição se a URL existir
                    <Link
                      href={item.url}
                      target="_blank"
                      className="text-accent hover:underline ml-2"
                      rel="noopener noreferrer"
                    >
                      @{item.institution} {/* Nome da instituição como link */}
                    </Link>
                  ) : (
                    <span className="ml-2">@{item.institution}</span> // Apenas o nome da instituição se não tiver URL
                  )}
                </h3>
                {item.description && item.description.length > 0 && ( // Renderiza a descrição se existir
                  <ul className="list-disc list-inside text-sm text-dark-1 dark:text-slate-400 mt-2 space-y-1">
                    {item.description.map((desc, i) => (
                      <ListItem key={i}>{desc}</ListItem> // Cada ponto da descrição
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default Education;
