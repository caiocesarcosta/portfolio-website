'use client';

import { socialSection } from '@/lib/content/social';

import { SocialIcon } from '@/components';

const SocialLinks = ({ className = '' }: { className?: string }) => {
  const { socialLinks } = socialSection;
  return (
    <ul className={className}>
      {socialLinks
        .filter((link) => link.url && link.url.length > 0) // <--- ADICIONADO: Filtra links com URL undefined ou vazia
        .map(({ icon, url }) => (
          <SocialIcon key={url} icon={icon} url={url} />
        ))}
    </ul>
  );
};

export default SocialLinks;