import Footer from "@/components/Footer";
import Link from "next/link";
import * as React from "react";

interface PricingTierProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

interface CompanyLogoProps {
  src: string;
  alt: string;
  width: string;
  aspectRatio: string;
}

interface FAQItemProps {
  question: string;
  answer: string;
}

const PricingTier: React.FC<PricingTierProps> = ({ title, description, price, features, isPopular }) => {
  const bgColor = isPopular ? "bg-slate-800" : "bg-white";
  const textColor = isPopular ? "text-white" : "text-slate-800";
  const buttonBg = isPopular ? "bg-sky-500" : "bg-slate-800";

  return (
    <div className="flex overflow-hidden flex-col items-center min-w-[240px] w-[329px]">
      <div className={`flex flex-col items-center px-10 py-12 ${bgColor} lg:rounded-xl md:rounded-xl sm:rounded-none rounded-none border border-sky-500 border-solid max-md:px-5 ${isPopular ? 'py-16' : ''}`}>
        <div className={`text-2xl tracking-normal leading-none ${textColor}`}>
          {title}
        </div>
        <div className={`mt-9 text-base tracking-normal leading-6 text-center ${isPopular ? 'text-white' : 'text-neutral-500'}`}>
          {description}
        </div>
        <div className="flex overflow-hidden gap-2.5 items-center mt-9">
          <div className="self-stretch my-auto text-4xl tracking-wide leading-none text-sky-500">
            {price}
          </div>
          <div className="flex flex-col self-stretch my-auto">
            <div className="text-2xl tracking-normal leading-none text-sky-500">
              $
            </div>
            <div className="text-sm tracking-wide leading-6 text-blue-300">
              Per Month
            </div>
          </div>
        </div>
        <div className={`flex overflow-hidden flex-col mt-9 text-sm tracking-wide leading-6 ${textColor}`}>
          {features.map((feature, index) => (
            <div key={index} className="flex overflow-hidden gap-2.5 items-center mt-4 first:mt-0">
                
              {index > 2 ? (<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="32" height="32" rx="16" fill="#BDBDBD"    />
<g clip-path="url(#clip0_232_1656)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_232_1656">
<rect width="16" height="11" fill="white" transform="translate(8.5 10)"/>
</clipPath>
</defs>
                </svg>) : <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="32" height="32" rx="16" fill="#2DC071"    />
<g clip-path="url(#clip0_232_1656)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_232_1656">
<rect width="16" height="11" fill="white" transform="translate(8.5 10)"/>
</clipPath>
</defs>
                </svg> } 

              <div className="self-stretch my-auto w-[205px]">
                {feature}
              </div>
            </div>
          ))}
        </div>
        <button 
          className={`overflow-hidden px-10 py-4 mt-9 max-w-full text-sm tracking-wide leading-loose text-center text-white ${buttonBg} rounded-md w-[246px] max-md:px-5`}
          aria-label={`Try ${title} plan for free`}
        >
          Try for free
        </button>
      </div>
    </div>
  );
};

const CompanyLogo: React.FC<CompanyLogoProps> = ({ src, alt, width, aspectRatio }) => (
  <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-full sm:w-[153px]">
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-contain max-w-full w-[${width}] aspect-[${aspectRatio}]`}
    />
  </div>
);

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
  <div className="flex overflow-hidden flex-col grow shrink self-stretch my-auto min-w-[240px] w-[393px] max-md:max-w-full">
    <div className="flex overflow-hidden flex-col justify-center p-6 w-full rounded-lg max-w-[491px] max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden gap-5 items-start max-md:max-w-full">
        <img
          loading="lazy"
          src="/icons/leftarrow.svg"
          alt=""
          className="object-contain shrink-0 aspect-[0.56] w-[9px]"
        />
        <div className="flex flex-col min-w-[240px]">
          <div className="text-base font-bold tracking-normal text-slate-800">
            {question}
          </div>
          <div className="mt-1.5 text-sm tracking-wide leading-5 text-neutral-500">
            {answer}
          </div>
        </div>
      </div>
    </div>
  </div>
);

function PricingPage() {
  const pricingTiers = [
    {
      title: "FREE",
      description: "Organize across all\napps by hand",
      price: "0",
      features: [
        "Unlimited product updates",
        "Unlimited product updates",
        "Unlimited product updates",
        "1GB Cloud storage",
        "Email and community support"
      ]
    },
    {
      title: "STANDARD",
      description: "Organize across all\napps by hand",
      price: "9.99",
      features: [
        "Unlimited product updates",
        "Unlimited product updates",
        "Unlimited product updates",
        "1GB Cloud storage",
        "Email and community support"
      ],
      isPopular: true
    },
    {
      title: "PREMIUM",
      description: "Organize across all\napps by hand",
      price: "19.99",
      features: [
        "Unlimited product updates",
        "Unlimited product updates",
        "Unlimited product updates",
        "1GB Cloud storage",
        "Email and community support"
      ]
    }
  ];

  const companyLogos = [
    { src: "/icons/hoolipng.png", alt: "Company Logo 1", width: "103px", aspectRatio: "3.03" },
    { src: "/icons/lyft.png", alt: "Company Logo 2", width: "83px", aspectRatio: "1.41" },
    { src: "/icons/stripe.png", alt: "Company Logo 3", width: "102px", aspectRatio: "1.36" },
    { src: "/icons/aws.png", alt: "Company Logo 4", width: "103px", aspectRatio: "2.45" },
  ];

  const faqItems = [
    {
      question: "the quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
      question: "the quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
        question: "the quick fox jumps over the lazy dog",
        answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
      },
      {
        question: "the quick fox jumps over the lazy dog",
        answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
      }
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      {/* Header Section */}
      <div className="flex overflow-hidden flex-col pb-8 w-full font-bold tracking-wide text-center bg-white max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-center px-20 pt-28 w-full bg-white bg-opacity-50 max-md:px-5 max-md:pt-24 max-md:max-w-full">
          <div className="flex overflow-hidden z-10 flex-col justify-center items-center py-12 -mb-8 max-w-full w-[870px] max-md:mb-2.5">
            <div className="flex overflow-hidden items-center max-md:max-w-full">
              <div className="flex overflow-hidden flex-col items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
                <div className="text-base tracking-normal text-neutral-500">
                  PRICING
                </div>
                <h1 className="mt-4 text-6xl leading-none text-slate-800 max-md:max-w-full max-md:text-4xl">
                  Simple Pricing
                </h1>
                <nav aria-label="Breadcrumb" className="flex overflow-hidden gap-4 items-center py-2.5 mt-4 text-sm leading-6 whitespace-nowrap">
                  <Link href="/" className="self-stretch my-auto text-slate-800">
                    Home
                  </Link>
                  <img
                    loading="lazy"
                    src="/icons/grayarrow.svg"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto aspect-[0.56] w-[9px]"
                  />
                  <span className="self-stretch my-auto text-neutral-500">
                    Pricing
                  </span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-center py-28 w-full max-w-[1050px] max-md:py-24 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col items-center max-w-full tracking-wide w-[633px]">
            <div className="flex overflow-hidden flex-col items-center w-full">
              <h2 className="text-4xl font-bold leading-none text-slate-800">
                Pricing
              </h2>
              <p className="mt-2.5 text-sm leading-5 text-center text-neutral-500 max-md:max-w-full">
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center mt-12 max-md:mt-10">
            <div className="flex gap-2.5 self-stretch py-px my-auto w-[186px]">
              <div className="grow text-base font-bold tracking-normal text-slate-800">
                Monthly
              </div>
              <button 
                className="flex flex-col justify-center items-start self-start px-1 py-1 border border-sky-500 border-solid fill-white stroke-[1px] stroke-sky-500"
                aria-label="Toggle pricing period"
              >
                <div className="flex shrink-0 bg-gray-200 rounded-full border border-solid border-stone-300 h-[19px] w-[19px]" />
              </button>
              <div className="text-base font-bold tracking-normal text-slate-800">
                Yearly
              </div>
            </div>
            <div className="overflow-hidden self-stretch px-5 py-2.5 my-auto text-sm font-bold tracking-wide leading-6 text-center text-sky-500 bg-sky-200 rounded-[37px]">
              Save 25%
            </div>
          </div>

          <div className="flex flex-wrap items-end mt-12 font-bold max-md:mt-10 max-md:max-w-full">
            {pricingTiers.map((tier, index) => (
              <PricingTier key={index} {...tier} />
            ))}
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-center py-20 w-full max-md:max-w-full">
          <h2 className="text-xl tracking-wide text-center text-slate-800">
            Trusted By Over 4000 Big Companies
          </h2>
          <div className="flex overflow-hidden flex-wrap gap-8 justify-center items-center py-12 max-md:max-w-full">
            {companyLogos.map((logo, index) => (
              <CompanyLogo key={index} {...logo} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center py-20 w-full max-w-[1056px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center items-center py-11 w-full tracking-wide">
            <div className="flex overflow-hidden flex-col items-center max-w-full w-[651px]">
              <div className="flex overflow-hidden flex-col items-center max-w-full w-[607px]">
                <h2 className="text-4xl font-bold leading-none text-slate-800">
                  Pricing FAQs
                </h2>
                <p className="mt-2.5 text-xl leading-8 text-center text-neutral-500 max-md:max-w-full">
                  Problems trying to resolve the conflict between <br />
                  the two major realms of Classical physics
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-8 items-center w-full">
              {faqItems.map((item, index) => (
                <FAQItem key={index} {...item} />
              ))}
            </div>
          </div>
          <p className="mt-12 text-xl tracking-wide text-center text-neutral-500 max-md:mt-10 max-md:max-w-full">
            Haven{"'"}t got your answer? Contact our support
          </p>
        </div>
      </div>

      <div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col justify-center items-center py-40 w-full max-w-[1050px] max-md:py-24 max-md:max-w-full">
          <div className="flex flex-col items-center max-w-full w-[607px]">
            <div className="flex overflow-hidden flex-col items-center max-md:max-w-full">
              <h2 className="text-4xl font-bold tracking-wide leading-none text-center text-slate-800 max-md:max-w-full">
                Start your 14 days free trial
              </h2>
              <p className="mt-8 text-sm tracking-wide leading-5 text-center text-neutral-500">
                Met minim Mollie non desert Alamo est sit cliquey dolor <br />
                do met sent. RELIT official consequent.
              </p>
              <div className="flex gap-2.5 items-start mt-8 text-sm font-bold tracking-wide leading-loose text-center text-white">
                <button 
                  className="overflow-hidden px-10 py-4 bg-sky-500 rounded-md min-h-[52px] max-md:px-5"
                  aria-label="Start free trial"
                >
                  Try it free now
                </button>
              </div>
              <div className="flex items-center overflow-hidden gap-9 items-start p-2.5 mt-8">
                <img
                  loading="lazy"
                  src="/icons/facebook.png"
                  alt="Social media icon"
                  className="object-contain shrink-0 aspect-[1.25] w-[30px]"
                />
                <img
                  loading="lazy"
                  src="/icons/instagram.png"
                  alt="Social media icon"
                  className="object-contain shrink-0 aspect-square w-[30px]"
                />
                <img
                  loading="lazy"
                  src="/icons/twitter.png"
                  alt="Social media icon"
                  className="object-contain shrink-0 aspect-square w-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default PricingPage;