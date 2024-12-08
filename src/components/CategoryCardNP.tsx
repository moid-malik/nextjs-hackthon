"use client";

import { CategoryCardProps } from '@/types/types';

export const CategoryCardNP: React.FC<CategoryCardProps> = ({
  image,
  title,
  itemCount
}) => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex overflow-hidden relative flex-col items-center px-5 py-20 aspect-[0.919] w-[205px] max-md:px-5">
        <img
          loading="lazy"
          src={image}
          alt={`${title} category`}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative text-base font-bold tracking-normal text-center text-white">
          {title}
        </div>
        <div className="relative mt-2.5 text-sm tracking-wide leading-none text-white">
          {itemCount} Items
        </div>
      </div>
    </div>
  );
};