import { socialData } from '@/components/SocialData';
import { SocialIconProps } from '@/types/types';

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
  />
);

const BrandLogo: React.FC = () => (
  <div className="flex gl:px-0 md:px-0 sm:px-4 px-4 overflow-hidden flex-col items-start self-stretch my-auto text-2xl font-bold tracking-normal leading-none whitespace-nowrap text-slate-800 ">
    <div className="overflow-hidden py-3.5 max-w-full w-[187px] max-md:pr-5">
      Bandage
    </div>
  </div>
);

const SocialLinks: React.FC = () => (
  <div className="flex overflow-hidden lg:px-0 md:px-0 sm:px-4 px-4 flex-col items-center self-stretch my-auto ">
    <div className="flex overflow-hidden gap-5 justify-center items-center">
      {socialData.icons.map((icon, index) => (
        <SocialIcon key={index} {...icon} />
      ))}
    </div>
  </div>
);

export const Prefooter: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-8 bg-neutral-50 max-md:px-5">
      <div className="flex overflow-hidden flex-col justify-center py-10 w-full max-w-[1050px] max-md:max-w-full">
        <div className="flex justify-between overflow-hidden flex-wrap gap-10 items-center max-md:max-w-full">
          <BrandLogo />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};