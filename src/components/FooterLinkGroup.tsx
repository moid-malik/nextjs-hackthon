"use client";

import * as React from 'react';
import { FooterLinkGroupProps } from '@/types/types';

export const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({
  title,
  links
}) => {
  return (
    <div className="flex overflow-hidden flex-col font-bold w-[148px]">
      <div className="text-base tracking-normal text-slate-800">{title}</div>
      <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className={index > 0 ? 'mt-2.5' : ''}
            tabIndex={0}
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};