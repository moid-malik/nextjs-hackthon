import { FeaturedPostProps } from '@/types/types';

export const FeaturedPost: React.FC<FeaturedPostProps> = ({ image, date, comments, title, description }) => {
  return (
    <div className="flex flex-col items-center min-w-[240px] w-[328px]">
      <div className="flex overflow-hidden flex-col max-w-full bg-white shadow-sm w-[348px]">
        <div className="flex overflow-hidden flex-col w-full text-sm font-bold leading-6 text-center text-white whitespace-nowrap">
          <div className="flex overflow-hidden relative flex-col items-start px-5 pt-5 pb-64 w-full aspect-[1.16] max-md:pb-24">
            <img
              loading="lazy"
              src={image}
              className="object-cover absolute inset-0 size-full"
              alt={title}
            />
            <div className="max-w-12 py-3 tex-xs flex items-center justify-center overflow-hidden relative self-stretch px-2.5 mb-0 bg-red-500 rounded shadow-sm max-md:mb-2.5">
              NEW
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col px-6 pt-6 pb-9 w-full text-xs text-neutral-500 max-md:px-5">
          <div className="flex overflow-hidden gap-4 items-center self-start leading-none whitespace-nowrap">
            <div className="self-stretch my-auto text-blue-300">Google</div>
            <div className="self-stretch my-auto">Trending</div>
            <div className="self-stretch my-auto">New</div>
          </div>
          <div className="mt-2.5 text-xl leading-8 text-slate-800">{title}</div>
          <div className="mt-2.5 text-sm leading-5">{description}</div>
          <div className="flex overflow-hidden gap-10 justify-between items-center py-4 mt-2.5 w-full leading-none">
            <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
              <img
                loading="lazy"
                src="/icons/clock.svg"
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                alt="Calendar icon"
              />
              <div className="self-stretch my-auto">{date}</div>
            </div>
            <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
              <img
                loading="lazy"
                src="/icons/graphicon.svg"
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[1.14]"
                alt="Comments icon"
              />
              <div className="self-stretch my-auto">{comments} comments</div>
            </div>
          </div>
          <button className="flex overflow-hidden gap-2.5 items-center self-start mt-2.5 text-sm font-bold leading-6">
            <span className="self-stretch my-auto">Learn More</span>
            <img
              loading="lazy"
              src="icons/leftarrow.svg"
              className="object-contain shrink-0 self-stretch my-auto aspect-[0.56] w-[9px]"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};