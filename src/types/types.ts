export interface ProductCardProps {
  image:string;
    title: string;
    department: string;
    price: {
      original: string;
      discounted: string;
    };
    colors: string[];
  }
    export interface CategoryCardProps {
    image: string;
    category: string;
    title: string;
    itemCount: number;
   
  }
  export interface FeaturedPostProps {
    image: string;
    date: string;
    comments: number;
    title: string;
    description: string;
  }
  export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }

  export interface SocialLinksProps {
    links: {
      icon: string;
      url: string;
      alt: string;
    }[];
  }
  
  
  
export interface NewsletterFormProps {
  onSubmit: (email: string) => void;
}
  
  export interface FooterLinkGroupProps {
    title: string;
    links: string[];
  }
  export interface ProductDetailsProps {
    collection: string;
    title: string;
    description: string;
    price: number;
  }
  export interface ButtonProps {
    variant: 'primary' | 'secondary';
    children: React.ReactNode;
    onClick?: () => void;
  }
  
  export interface ProductHeaderProps {
    date: string;
    title: string;
    description: string;
  }
  export interface SocialIconProps {
    src: string;
    alt: string;
  }
  
  export interface SocialLinksData {
    icons: SocialIconProps[];
  }
  