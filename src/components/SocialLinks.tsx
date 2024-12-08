"use client";
import { SocialLinksProps } from '@/types/types';
import Link from 'next/link';

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex overflow-hidden gap-5 justify-center items-center">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className="flex items-center justify-center"
          tabIndex={0}
        >
          <img
            loading="lazy"
            src={link.icon}
            alt={link.alt}
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </Link>
      ))}
    </div>
  );
};