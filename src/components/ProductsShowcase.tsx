import { ProductDetails } from "./Asection";

export const ProductShowcase = () => {
  const productData = {
    collection: "SUMMER 2020",
    title: "Vita Classic Product",
    description: "We know how large objects will act, We know how are objects will act, We know",
    price: 16.48
  };

  return (
    <div className="flex lg:-mb-[2.65rem] overflow-hidden flex-col items-center px-20 w-full bg-teal-700 max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col pt-28 w-full max-w-[1036px] min-h-[711px] max-md:pt-24 max-md:max-w-full">
        <div className="mr-px">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-wrap gap-8 items-start h-[599px] max-md:max-w-full">
                <ProductDetails {...productData} />
                <div className="flex overflow-hidden flex-col items-center min-w-[240px] w-[510px] max-md:max-w-full" />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="/whiteShirtBoy.png"
                alt="Vita Classic Product showcase"
                className="object-contain max-w-full aspect-[0.74] w-[449px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};