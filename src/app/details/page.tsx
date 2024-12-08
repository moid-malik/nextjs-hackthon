import Footer from "@/components/Footer";
import * as React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  department: string;
  oldPrice: string;
  newPrice: string;
}

interface BulletPointProps {
  icon: string;
  text: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, department, oldPrice, newPrice }) => {
  return (
    <div className="flex flex-col w-full sm:w-[238px]">
      <div className="flex overflow-hidden flex-col max-w-full bg-white w-full">
        <div className="flex overflow-hidden flex-col w-full">
          <img loading="lazy" src={image} alt={title} className="object-contain w-full aspect-[0.85]" />
        </div>
        <div className="flex overflow-hidden flex-col px-6 pt-6 pb-9 w-full text-base font-bold tracking-normal max-md:px-5">
          <div className="text-slate-800">{title}</div>
          <div className="mt-2.5 text-sm tracking-wide leading-6 text-neutral-500">{department}</div>
          <div className="flex gap-1.5 items-start self-start px-1 py-1.5 mt-2.5 text-center whitespace-nowrap">
            <div className="text-stone-300 w-[52px]">{oldPrice}</div>
            <div className="text-teal-700 w-[45px]">{newPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BulletPoint: React.FC<BulletPointProps> = ({ icon, text }) => {
  return (
    <div className="flex overflow-hidden gap-5 items-start">
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 aspect-[0.56] w-[9px]" />
      <div>{text}</div>
    </div>
  );
};

const bestsellerProducts = [
  {
    image: "/dummyproduct.png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48"
  },
];

const bulletPoints = [
  { icon: "/icons/rightarrow.svg", text: "the quick fox jumps over the lazy dog" },
  { icon: "/icons/rightarrow.svg", text: "the quick fox jumps over the lazy dog" },
  { icon: "/icons/rightarrow.svg", text: "the quick fox jumps over the lazy dog" },
  { icon: "/icons/rightarrow.svg", text: "the quick fox jumps over the lazy dog" }
];

function ProductDetails() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex overflow-hidden flex-col items-center px-20  w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col pb-12 max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap gap-8 items-start max-md:max-w-full">
            <div className="flex overflow-hidden flex-col justify-center py-0.5 min-w-[240px] w-[510px] max-md:max-w-full">
              <img
                loading="lazy"
                src="/dummyproduct.png"
                alt="Floating Phone Product"
                className="object-contain w-full rounded-md aspect-[0.93] max-md:max-w-full"
              />
            </div>
            <div className="flex overflow-hidden flex-col items-start px-6 pt-3 pb-6 min-w-[240px] w-[510px] max-md:px-5 max-md:max-w-full">
              <div className="text-xl tracking-wide text-slate-800">Floating Phone</div>
              <div className="flex gap-2.5 items-start mt-3">
                <div className="flex overflow-hidden gap-1.5 items-start">
                  {[2, 3, 4, 5, 6].map((num) => (
                    <img
                      key={num}
                      loading="lazy"
                      src={`/icons/starpng.png`}
                      alt=""
                      className="object-contain shrink-0 aspect-square w-[22px]"
                    />
                  ))}
                </div>
                <div className="text-sm font-bold tracking-wide leading-6 text-neutral-500">10 Reviews</div>
              </div>
              <div className="mt-5 text-2xl font-bold tracking-normal leading-none text-center text-slate-800">$1,139.33</div>
              <div className="flex gap-1.5 items-center mt-1.5 text-sm font-bold tracking-wide leading-6">
                <div className="self-stretch my-auto text-neutral-500">Availability :</div>
                <div className="self-stretch my-auto text-sky-500">In Stock</div>
              </div>
              <div className="self-stretch mt-8 text-sm tracking-wide leading-5 text-zinc-500 max-md:max-w-full">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </div>
              <div className="shrink-0 mt-7 max-w-full h-px border border-solid bg-stone-300 border-stone-300 w-[445px]" />
              <div className="flex gap-2.5 items-center mt-7">
                {['sky', 'green', 'orange', 'slate'].map((color, index) => (
                  <div
                    key={index}
                    className={`flex shrink-0 self-stretch my-auto bg-${color}-${color === 'slate' ? '800' : color === 'orange' ? '400' : '500'} rounded-full fill-${color}-${color === 'slate' ? '800' : color === 'orange' ? '400' : '500'} h-[30px] w-[30px]`}
                  />
                ))}
              </div>
              <div className="flex overflow-hidden gap-2.5 items-start mt-16 text-sm font-bold tracking-wide leading-6 text-center text-white max-md:mt-10">
                <button className="overflow-hidden px-5 py-2.5 bg-sky-500 rounded-md">Select Options</button>
                <div className="flex gap-2">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="white"/>
<rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#E8E8E8"/>
<path d="M20.0009 15.9532L18.6365 14.5566L18.6359 14.556C18.288 14.2018 17.873 13.9204 17.4152 13.7283C16.9573 13.5362 16.4658 13.4372 15.9692 13.4372C15.4727 13.4372 14.9811 13.5362 14.5233 13.7283C14.0654 13.9203 13.6505 14.2017 13.3026 14.5559C12.5886 15.2809 12.1885 16.2575 12.1885 17.275C12.1885 18.2926 12.5887 19.2693 13.3028 19.9943L13.3031 19.9946L19.7781 26.5508L20.0005 26.776L20.2228 26.5508L26.6978 19.9946L26.6981 19.9943C27.4122 19.2693 27.8125 18.2926 27.8125 17.275C27.8125 16.2575 27.4123 15.2809 26.6983 14.5559C26.3506 14.2015 25.9357 13.92 25.4778 13.7279C25.02 13.5359 24.5286 13.4372 24.0322 13.4375C24.0319 13.4375 24.0317 13.4375 24.0315 13.4375L24.0317 13.75M20.0009 15.9532L21.3578 14.5695L21.3586 14.5687L21.5817 14.7875M20.0009 15.9532L21.357 14.5704M20.0009 15.9532L21.357 14.5704M24.0317 13.75C23.5746 13.7493 23.122 13.8409 22.701 14.0192C22.2801 14.1974 21.8994 14.4587 21.5817 14.7875M24.0317 13.75C24.4868 13.7496 24.9373 13.8401 25.3569 14.0161C25.7766 14.1921 26.1569 14.4501 26.4755 14.775L24.0317 13.75ZM21.5817 14.7875L21.357 14.5704M21.5817 14.7875L21.357 14.5704M24.0316 12.8125L24.0315 12.8125C23.4516 12.812 22.8774 12.9273 22.3427 13.1516C21.8079 13.3759 21.3233 13.7047 20.9173 14.1188L20.9162 14.12L20.2224 14.82L20.0005 15.0439L19.7785 14.82L19.0848 14.12L19.0839 14.1191C18.6773 13.7058 18.1926 13.3774 17.6578 13.1533C17.123 12.9292 16.549 12.8138 15.9692 12.8138C15.3894 12.8138 14.8154 12.9292 14.2806 13.1533C13.7459 13.3774 13.2611 13.7057 12.8545 14.1191L24.0316 12.8125ZM24.0316 12.8125C24.6115 12.8127 25.1856 12.9283 25.7204 13.1526C26.2551 13.3769 26.7399 13.7054 27.1463 14.119C27.9752 14.9629 28.4397 16.0984 28.4397 17.2813C28.4397 18.4639 27.9754 19.5993 27.1467 20.4431C27.1466 20.4432 27.1464 20.4434 27.1463 20.4435L20.0005 27.6802M24.0316 12.8125L20.0005 27.6802M20.0005 27.6802L12.8547 20.4435C12.8545 20.4434 12.8544 20.4433 12.8543 20.4432C12.0256 19.5994 11.5613 18.464 11.5613 17.2813C11.5613 16.0985 12.0257 14.9629 12.8545 14.1191L20.0005 27.6802Z" fill="#BDBDBD" stroke="#252B42" strokeWidth="0.625"/>
</svg>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="white"/>
<rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#E8E8E8"/>
<path d="M20.0009 15.9532L18.6365 14.5566L18.6359 14.556C18.288 14.2018 17.873 13.9204 17.4152 13.7283C16.9573 13.5362 16.4658 13.4372 15.9692 13.4372C15.4727 13.4372 14.9811 13.5362 14.5233 13.7283C14.0654 13.9203 13.6505 14.2017 13.3026 14.5559C12.5886 15.2809 12.1885 16.2575 12.1885 17.275C12.1885 18.2926 12.5887 19.2693 13.3028 19.9943L13.3031 19.9946L19.7781 26.5508L20.0005 26.776L20.2228 26.5508L26.6978 19.9946L26.6981 19.9943C27.4122 19.2693 27.8125 18.2926 27.8125 17.275C27.8125 16.2575 27.4123 15.2809 26.6983 14.5559C26.3506 14.2015 25.9357 13.92 25.4778 13.7279C25.02 13.5359 24.5286 13.4372 24.0322 13.4375C24.0319 13.4375 24.0317 13.4375 24.0315 13.4375L24.0317 13.75M20.0009 15.9532L21.3578 14.5695L21.3586 14.5687L21.5817 14.7875M20.0009 15.9532L21.357 14.5704M20.0009 15.9532L21.357 14.5704M24.0317 13.75C23.5746 13.7493 23.122 13.8409 22.701 14.0192C22.2801 14.1974 21.8994 14.4587 21.5817 14.7875M24.0317 13.75C24.4868 13.7496 24.9373 13.8401 25.3569 14.0161C25.7766 14.1921 26.1569 14.4501 26.4755 14.775L24.0317 13.75ZM21.5817 14.7875L21.357 14.5704M21.5817 14.7875L21.357 14.5704M24.0316 12.8125L24.0315 12.8125C23.4516 12.812 22.8774 12.9273 22.3427 13.1516C21.8079 13.3759 21.3233 13.7047 20.9173 14.1188L20.9162 14.12L20.2224 14.82L20.0005 15.0439L19.7785 14.82L19.0848 14.12L19.0839 14.1191C18.6773 13.7058 18.1926 13.3774 17.6578 13.1533C17.123 12.9292 16.549 12.8138 15.9692 12.8138C15.3894 12.8138 14.8154 12.9292 14.2806 13.1533C13.7459 13.3774 13.2611 13.7057 12.8545 14.1191L24.0316 12.8125ZM24.0316 12.8125C24.6115 12.8127 25.1856 12.9283 25.7204 13.1526C26.2551 13.3769 26.7399 13.7054 27.1463 14.119C27.9752 14.9629 28.4397 16.0984 28.4397 17.2813C28.4397 18.4639 27.9754 19.5993 27.1467 20.4431C27.1466 20.4432 27.1464 20.4434 27.1463 20.4435L20.0005 27.6802M24.0316 12.8125L20.0005 27.6802M20.0005 27.6802L12.8547 20.4435C12.8545 20.4434 12.8544 20.4433 12.8543 20.4432C12.0256 19.5994 11.5613 18.464 11.5613 17.2813C11.5613 16.0985 12.0257 14.9629 12.8545 14.1191L20.0005 27.6802Z" fill="#BDBDBD" stroke="#252B42" strokeWidth="0.625"/>
</svg>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="white"/>
<rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#E8E8E8"/>
<path d="M22.5 20C22.5 20.663 22.2366 21.2989 21.7678 21.7678C21.2989 22.2366 20.663 22.5 20 22.5C19.337 22.5 18.7011 22.2366 18.2322 21.7678C17.7634 21.2989 17.5 20.663 17.5 20C17.5 19.337 17.7634 18.7011 18.2322 18.2322C18.7011 17.7634 19.337 17.5 20 17.5C20.663 17.5 21.2989 17.7634 21.7678 18.2322C22.2366 18.7011 22.5 19.337 22.5 20Z" fill="black"/>
<path d="M12 20C12 20 15 14.5 20 14.5C25 14.5 28 20 28 20C28 20 25 25.5 20 25.5C15 25.5 12 20 12 20ZM20 23.5C20.9283 23.5 21.8185 23.1313 22.4749 22.4749C23.1313 21.8185 23.5 20.9283 23.5 20C23.5 19.0717 23.1313 18.1815 22.4749 17.5251C21.8185 16.8687 20.9283 16.5 20 16.5C19.0717 16.5 18.1815 16.8687 17.5251 17.5251C16.8687 18.1815 16.5 19.0717 16.5 20C16.5 20.9283 16.8687 21.8185 17.5251 22.4749C18.1815 23.1313 19.0717 23.5 20 23.5Z" fill="black"/>
</svg>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div className="flex mx-auto pl-8 overflow-hidden flex-col justify-end w-full bg-white max-md:max-w-full">
        <div className="w-full flex justify-between px-[28.8rem] text-[#737373] text-sm font-semibold">
                <p>Description</p>
                <p>Additional information</p>
                <p>Reviews <span className="text-[#23856D]">{`(0)`}</span></p>
        </div>
        <div className="flex flex-col items-center mt-4 w-full max-md:max-w-full">
          <div className="flex flex-col items-center pt-6 pb-12 max-w-full w-[1056px]">
            <div className="flex flex-wrap gap-8 items-start w-full">
              <div className="flex overflow-hidden flex-col grow shrink min-h-[392px] min-w-[240px] w-[266px]">
                <img
                  loading="lazy"
                  src="/anotherdummyproduct.png "
                  alt="Product Details"
                  className="object-contain max-w-full rounded-lg aspect-[0.86] w-[337px]"
                />
              </div>
              <div className="flex overflow-hidden flex-col grow shrink min-w-[240px] w-[266px]">
                <div className="flex overflow-hidden flex-col pb-6 max-w-full rounded-lg w-[332px]">
                  <div className="text-2xl font-bold tracking-normal leading-none text-slate-800">
                    the quick fox jumps over
                  </div>
                  <div className="mt-8 text-sm tracking-wide leading-5 text-neutral-500">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </div>
                </div>
              </div>
              <div className="flex overflow-hidden flex-col grow shrink font-bold min-w-[240px] w-[266px]">
                <div className="flex overflow-hidden flex-col max-w-full rounded-lg w-[332px]">
                  <div className="text-2xl tracking-normal leading-none text-slate-800">
                    the quick fox jumps over
                  </div>
                  <div className="flex flex-col self-start mt-8 text-sm tracking-wide leading-6 text-neutral-500">
                    {bulletPoints.map((point, index) => (
                      <BulletPoint key={index} {...point} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-end items-end px-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-center py-12 w-full max-w-[1124px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-col items-start max-w-full text-2xl font-bold tracking-normal leading-none text-center text-slate-800 w-[1040px]">
            <div className="overflow-hidden max-w-full w-[691px]">BESTSELLER PRODUCTS</div>
          </div>
          <div className="flex mt-6 max-w-full bg-gray-200 min-h-[2px] w-[1042px]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 w-full">
            {bestsellerProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <div className='w-full flex lg:flex-row md:flex-row sm:flex-col flex-col lg:justify-between justify-center lg:py-12 lg:px-20 p-32 lg:items-center gap-12 bg-[#FAFAFA]'>
            <img className='object-fit' src='/icons/hoolipng.png'/>
            <img className='object-fit' src='/icons/lyft.png'/>
            <img className='object-fit' src='/icons/leaf.png'/>
            <img className='object-fit' src='/icons/stripe.png'/>
            <img className='object-fit' src='/icons/aws.png'/>
      </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ProductDetails;