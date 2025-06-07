'use client';

import { removeKeys } from '@/lib/utils/helper';

import { motion, MotionProps } from 'framer-motion';
import Link from 'next/link'; // Import do Link do Next.js

interface DefaultProps {
  children: React.ReactNode | string;
  className?: string;
  size?: 'lg' | 'sm';
  center?: boolean;
}

interface LinkProps extends DefaultProps {
  href: string; // A tipagem diz que é string, mas o valor em runtime pode ser undefined.
  sameTab?: boolean;
}

interface ButtonProps extends DefaultProps {
  onClick?: (event: React.MouseEvent) => void;
}

type Props =
  | ({
      type?: 'button';
    } & ButtonProps)
  | ({
      type: 'link';
    } & LinkProps);

// Para separar as props de animação das props do botão
const buttonProps: Array<keyof Props | keyof LinkProps> = [
  'center',
  'children',
  'className',
  'size',
  'type',
  'href',
];

const Button = (props: Props & MotionProps) => {
  const {
    className,
    children,
    type = 'button',
    size = 'sm',
    center = false,
  } = props;

  // Define as classes CSS base do botão, com base no tamanho e centralização
  const classes = `${
    size === 'sm'
      ? 'p-2 px-4 text-sm border-[1.5px] '
      : 'text-sm p-4 px-6 border-2'
  } block ${
    center ? 'mx-auto' : ''
  } w-fit font-mono capitalize rounded border-accent text-accent hover:bg-accent-light focus:outline-none focus:bg-accent-light duration-150 cursor-pointer ${className}`;

  // Lógica para renderizar como um link (componente Link do Next.js)
  if (props.type === 'link') {
    const { sameTab, ...motionProps } = props;
    // Remove as props de botão para evitar que sejam passadas diretamente para a motion.span
    removeKeys<Props & LinkProps>(motionProps, buttonProps);

    // CORREÇÃO APLICADA AQUI: Garante que props.href seja uma string válida.
    // Se props.href for undefined, null ou uma string vazia, ele usará '#' como fallback.
    const finalHref = props.href && props.href.length > 0 ? props.href : '#';

    return (
      <motion.span {...motionProps}>
        <Link
          className={classes}
          href={finalHref} // Usa o href final garantido
          target={sameTab ? '_self' : '_blank'} // Define se abre na mesma aba ou nova
          rel="noopener noreferrer" // Para segurança em links externos
        >
          {children} {/* Conteúdo do botão/link */}
        </Link>
      </motion.span>
    );
  }

  // Lógica para renderizar como um botão nativo HTML
  if (type == 'button') {
    return (
      <button type={type} className={classes} onClick={props.onClick}>
        {children} {/* Conteúdo do botão */}
      </button>
    );
  }

  // Retorna um fragmento vazio se o tipo não for 'link' nem 'button'
  return <></>;
};

export default Button;
