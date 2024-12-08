import Link from "next/link";

export const ShopHeader: React.FC = () => {
  return (
    <div className="flex overflow-hidden  justify-between  items-center py-6 px-20   w-full font-bold text-center whitespace-nowrap bg-neutral-50">
      <div className="flex overflow-hidden flex-wrap gap-8 items-center">
        <div className="  overflow-hidden self-stretch my-auto text-2xl tracking-normal leading-none text-slate-800">
          Shop
        </div>  
      </div>
      <nav className="flex  overflow-hidden items-end self-stretch my-auto text-sm tracking-wide leading-6" aria-label="Breadcrumb">
          <div className="flex overflow-hidden gap-4 items-center py-2.5">
            <Link href="/" className="self-stretch my-auto text-slate-800">Home</Link>
            <img loading="lazy" src="icons/grayarrow.svg" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[0.56] w-[9px]" />
            <span className="self-stretch my-auto text-stone-300">Shop</span>
          </div>
        </nav>
    </div>
  );
};