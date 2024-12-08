"use client";

import * as React from 'react';
import { PaginationProps } from '@/types/types';

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  return (
    <div className="flex overflow-hidden flex-col justify-center mt-12 max-w-full text-sm font-bold tracking-wide leading-6 text-center text-sky-500 whitespace-nowrap bg-white rounded-md border-solid shadow-sm border-[1.346px] border-stone-300 w-[313px] max-md:mt-10">
      <div className="flex items-start">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="overflow-hidden self-stretch p-6 border border-solid bg-zinc-100 border-stone-300 text-stone-300 max-md:px-5"
        >
          First
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`overflow-hidden self-stretch px-5 py-6 ${
              currentPage === page
                ? 'text-white bg-sky-500'
                : 'bg-white text-sky-500'
            } border border-gray-200 border-solid`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="overflow-hidden self-stretch p-6 bg-white border border-gray-200 border-solid max-md:px-5"
        >
          Next
        </button>
      </div>
    </div>
  );
};