import { ShopHeader } from '@/components/ShopHeader';
import { ShopFilters } from '@/components/ShopFilter';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { ProductCard } from '@/components/ui/ProductsCard';
import { CategoryCardProps, ProductCardProps } from '@/types/types';
import Footer from '@/components/Footer';
import PaginationBar from '@/components/PaginationBar';

const categories: CategoryCardProps[] = [
  { image: "/icons/blackoutfitwoman.png", category: "clothes", title: "CLOTHS", itemCount: 5 },
  { image: "/icons/womanwithbag.png", category: "clothes", title: "CLOTHS", itemCount: 5 },
  { image: "/icons/sampleimage.png", category: "clothes", title: "CLOTHS", itemCount: 5 },
  { image: "/icons/laughing.png", category: "clothes", title: "CLOTHS", itemCount: 5 },
  { image: "/icons/anothersample.png", category: "clothes", title: "CLOTHS", itemCount: 5 }
];

const products: ProductCardProps[] = [
  {
    image: "/products/1.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]
  },
  {
    image: "/products/2.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]
  },
  {
    image: "/products/3.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]
  },
  {
    image: "/products/4.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]
  },
  {
    image: "/products/5.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]
  },
  {
    image: "/products/6.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]
  },
  {
    image: "/products/6.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]
  },
  {
    image: "/products/7.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]
  },
  {
    image: "/products/8.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]
  },
  {
    image: "/products/9.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]
  },
  {
    image: "/products/10.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]
  },
  {
    image: "/products/11.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]
  },
  {
    image: "/products/12.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]
  },
];

const Shop = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <ShopHeader />
      <div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full text-white bg-neutral-50 max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-center pb-12 max-md:max-w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-start max-md:max-w-full">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </div>
      <ShopFilters />
      <div className='w-full flex lg:flex-row md:flex-row sm:flex-col flex-col lg:justify-between justify-center lg:py-12 lg:px-20 p-32 lg:items-center gap-12 bg-[#FAFAFA]'>
            <img className='object-fit' src='/icons/hoolipng.png'/>
            <img className='object-fit' src='/icons/lyft.png'/>
            <img className='object-fit' src='/icons/leaf.png'/>
            <img className='object-fit' src='/icons/stripe.png'/>
            <img className='object-fit' src='/icons/aws.png'/>
      </div>
      <Footer/>
      <div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-center py-12 w-full max-w-[1124px] max-md:max-w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start max-md:max-w-full">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
        <PaginationBar/>
      </div>
    </div>
  );
};
export default Shop;