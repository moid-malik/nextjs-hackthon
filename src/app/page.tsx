import { ProductCard } from '@/components/ui/ProductsCard';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { FeaturedPost } from '@/components/FeaturedPosts';
import { ProductShowcase } from '@/components/ProductsShowcase';
import AnotherProductShowCase from '@/components/AnotherProductShowCase';
import Footer from '@/components/Footer';
import SummerCollection from '@/components/HeroOne';

const products = [
  {
    image:"/featured/1.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["sky-500", "teal-700", "orange-400", "slate-800"],
  },
  {
    image:"/featured/2.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["sky-500", "teal-700", "orange-400", "slate-800"],
  },
  {
    image:"/featured/3.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["sky-500", "teal-700", "orange-400", "slate-800"],
  },
  {
    image:"/featured/4.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["sky-500", "teal-700", "orange-400", "slate-800"],
  },
  {
    image:"/featured/5.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["sky-500", "teal-700", "orange-400", "slate-800"],
  },
  {
    image:"/featured/6.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["sky-500", "teal-700", "orange-400", "slate-800"],
  },
  {
    image:"/featured/7.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["sky-500", "teal-700", "orange-400", "slate-800"],
  },
  {
    image:"/featured/8.png",
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["sky-500", "teal-700", "orange-400", "slate-800"],
  }
];

const categories = [
  { image: "menpng.png", category: "MEN" },
  { image: "womenpng.png", category: "WOMEN" },
  { image: "accessories.png", category: "ACCESSORIES" },
  { image: "kids.png", category: "KIDS" },
  
];

const featuredPosts = [
  {
    image: "/posts/1.png",
    date: "22 April 2021",
    comments: 10,
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away."
  },
  {
    image: "/posts/2.png",
    date: "22 April 2021",
    comments: 10,
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away."
  },
  {
    image: "/posts/3.png",
    date: "22 April 2021",
    comments: 10,
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away."
  }
];



export default function Home() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex overflow-hidden flex-col pb-28 w-full font-bold tracking-normal text-white bg-neutral-50 max-md:pb-24 max-md:max-w-full">
      <SummerCollection/>
      </div>

      <div className="flex overflow-hidden flex-col items-center px-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
        <div className='text-center'>
          <h1 className='font-bold text-3xl '>Editor's pick</h1>
          <p className='text-[#737373]'>Problems trying to resolve the conflict between </p>
        </div>
        <div className="flex overflow-hidden items-center py-20 max-md:flex-wrap gap-4 lg:flex-row md:flex-row sm:flex-col flex-col">
  <div className="flex flex-1 gap-4 lg:flex-row md:flex-row sm:flex-col flex-col">
    {categories.slice(0, 2).map((category, index) => (
      <CategoryCard  title={''} itemCount={0} key={index} {...category} />
    ))}
  </div>

  <div className="flex flex-col gap-4">
    {categories.slice(2).map((category, index) => (
      <CategoryCard title={''} itemCount={0} key={index} {...category} />
    ))}
  </div>
</div>
      </div>

      <div className="flex overflow-hidden justify-center items-end px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-8 justify-center">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
      <ProductShowcase/>
      <AnotherProductShowCase/>
      <div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full tracking-wide bg-white max-md:px-5 max-md:max-w-full">
        <div className='w-full text-center py-20 flex flex-col gap-5'>
          <p className='text-[#23A6F0] font-semibold'>Practice advice</p>
          <h1 className='text-5xl font-bold tracking-tighter'>Featured Products</h1>
          <p className='max-w-[28rem] mx-auto'>Problems trying to resolve the conflict between 
          the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {featuredPosts.map((post, index) => (
            <FeaturedPost key={index} {...post} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}