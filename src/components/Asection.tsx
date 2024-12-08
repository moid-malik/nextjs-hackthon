import { ProductDetailsProps } from "@/types/types";

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  collection,
  title,
  description,
  price
}) => {
  return (
    <div className="flex overflow-hidden flex-col pt-16 text-white min-w-[240px] w-[509px] max-md:max-w-full">
      <div className="text-xl tracking-wide">{collection}</div>
      <div className="mt-8 text-6xl font-bold tracking-wide leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
        {title}
      </div>
      <div className="mt-8 text-sm tracking-wide leading-5">
        {description}
      </div>
      <div className="flex gap-9 items-center self-start mt-8 font-bold text-center">
        <div className="self-stretch my-auto text-2xl tracking-normal leading-none">
          ${price.toFixed(2)}
        </div>
        <button 
          className="overflow-hidden self-stretch px-10 py-4 my-auto text-sm tracking-wide leading-loose bg-green-500 rounded-md max-md:px-5"
          aria-label="Add product to cart"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};