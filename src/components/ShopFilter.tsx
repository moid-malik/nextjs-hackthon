export const ShopFilters: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col justify-center items-center py-6 w-full max-w-[1050px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center w-full max-w-[1049px] max-md:max-w-full">
          <div className="gap-4 self-stretch px-px my-auto text-sm font-bold tracking-wide leading-6 text-neutral-500">
            Showing all 12 results
          </div>
          <div className="flex gap-4 items-center self-stretch px-px my-auto">
            <div className="self-stretch my-auto text-sm font-bold tracking-wide leading-6 text-neutral-500">
              Views:
            </div>
            <div className="flex gap-4 items-center self-stretch my-auto">
              <button className="flex overflow-hidden items-center self-stretch p-4 my-auto rounded-md border border-gray-200 border-solid h-[46px] w-[46px]" aria-label="Grid view">
                <img loading="lazy" src="/icons/apps.svg" alt="" className="object-contain self-stretch my-auto w-4 aspect-square" />
              </button>
              <button className="flex overflow-hidden items-center self-stretch p-4 my-auto rounded-md border border-gray-200 border-solid h-[46px] w-[46px]" aria-label="List view">
                <img loading="lazy" src="/icons/listicon.svg" alt="" className="object-contain self-stretch my-auto w-4 aspect-square" />
              </button>
            </div>
          </div>
          <div className="flex gap-4 self-stretch px-px my-auto text-sm tracking-wide whitespace-nowrap min-w-[240px]">
            <div className="flex overflow-hidden flex-col my-auto leading-7 text-neutral-500 w-[141px]">
              <select className="flex overflow-hidden gap-1.5 px-3.5 py-3 rounded-md border border-solid bg-stone-50 border-zinc-300 max-md:pr-5">
                <option>Popularity</option>
              </select>
            </div>
            <button className="overflow-hidden px-5 py-2.5 font-bold leading-6 text-center text-white bg-sky-500 rounded-md w-[94px]">
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};