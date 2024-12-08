import React from "react";
import { CategoryCardProps } from "@/types/types";

export const CategoryCard: React.FC<CategoryCardProps> = ({ image, category }) => {
  return (
    <div className="relative overflow-hidden">
      <img
        loading="lazy"
        src={image}
        alt={`${category} category`}
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold uppercase">
        {category}
      </div>
    </div>
  );
};
