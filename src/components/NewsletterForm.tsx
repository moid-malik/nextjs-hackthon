"use client";

import * as React from 'react';
import { NewsletterFormProps } from '@/types/types';

export const NewsletterForm: React.FC<NewsletterFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-5 w-full tracking-wide leading-7 max-w-[321px]">
      <div className="flex overflow-hidden gap-5 justify-between pl-5 text-sm rounded-md border border-solid bg-stone-50 border-neutral-200">
        <label htmlFor="email" className="sr-only">Your Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="my-auto text-neutral-500 bg-transparent border-none outline-none"
          required
        />
        <button
          type="submit"
          className="overflow-hidden px-6 py-4 text-center text-white whitespace-nowrap bg-sky-500 rounded-none border border-solid border-neutral-200 max-md:px-5"
        >
          Subscribe
        </button>
      </div>
      <div className="self-start text-xs text-neutral-500">
        Lore imp sum dolor Amit
      </div>
    </form>
  );
};