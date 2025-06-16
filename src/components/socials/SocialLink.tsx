'use client'; // Mantenha se necessário, ou remova se for um componente puramente de servidor

import Link from 'next/link'; // Import do Link do Next.js

interface Props {
  href?: string; // <--- CORREÇÃO AQUI: Torna 'href' opcional
  children: React.ReactNode;
  className?: string;
}

const SocialLink = ({ href, children, className }: Props) => {
  // CORREÇÃO APLICADA AQUI: Garante que href seja uma string válida, mesmo se vier undefined ou vazio.
  // Usamos '#' como fallback para que o Link sempre tenha uma URL válida.
  const finalHref = href && href.length > 0 ? href : '#';

  return (
    <Link href={finalHref} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </Link>
  );
};

export default SocialLink;
