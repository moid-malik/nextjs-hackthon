import Image from "next/image";
import * as React from "react";

interface BackgroundImageProps {
  src: string;
  alt: string;
}

interface CTAButtonProps {
  text: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="lg:block md:block sm:hidden hidden object-cover absolute inset-0 size-full"
  />
);

const CTAButton: React.FC<CTAButtonProps> = ({ text, }) => (
  <button
    className="overflow-hidden px-10 py-4 bg-green-500 rounded-md max-md:px-5 focus:outline-none focus:ring-2 focus:ring-green-600 hover:bg-green-600 transition-colors"
    aria-label={text}
  >
    {text}
  </button>
);

const SummerCollection: React.FC = () => {
  const handleShopNow = () => {

  };

  return (
    <div className="relative flex bg-[#01B5DA] overflow-hidden flex-col font-bold tracking-normal text-white">
      <div className="flex overflow-hidden relative flex-col items-center px-20 pt-12 pb-4 w-full max-md:px-5 max-md:max-w-full">
        <BackgroundImage
          src="/hero-1.jpg"
          alt="Summer collection background"
        />
        <Image className="absolute lg:hidden md:hidden sm:block block bottom-0" src={'/image.png'} width={1000} height={1000} alt=""/>
        <div className="flex overflow-hidden relative flex-col justify-center items-center py-28 max-md:py-24 max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap gap-8 items-center py-12 max-md:flex-col max-md:items-center max-md:text-center max-md:max-w-full">
            <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[599px] max-md:max-w-full">
              <div className="text-base">SUMMER 2020</div>
              <h1 className="mt-9 text-6xl tracking-tight leading-none max-md:max-w-full max-md:text-4xl">
                NEW COLLECTION
              </h1>
              <p className="mt-9 text-xl tracking-wide font-thin text-neutral-50">
                We know how large objects will act, <br />
                but things on a small scale.
              </p>
              <div className="flex gap-2.5 items-start self-start mt-9 text-2xl leading-none text-center max-md:self-center">
                <CTAButton text="SHOP NOW" />
              </div>
            </div>
            <div className="flex shrink-0 self-stretch my-auto h-[280px] min-w-[240px] w-[415px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerCollection;