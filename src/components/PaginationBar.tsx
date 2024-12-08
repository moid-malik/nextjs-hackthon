import * as React from "react";

interface PaginationItemProps {
  children: React.ReactNode;
  isActive?: boolean;
  isDisabled?: boolean;
}

const PaginationItem: React.FC<PaginationItemProps> = ({ children, isActive, isDisabled }) => {
  const baseStyles = "overflow-hidden self-stretch px-3 py-3 border border-solid";
  const activeStyles = isActive ? "text-white bg-sky-500" : "bg-white";
  const disabledStyles = isDisabled ? "bg-zinc-100 text-stone-300" : "";
  const borderStyles = isDisabled ? "border-stone-300" : "border-gray-200";

  return (
    <div className={`${baseStyles} ${activeStyles} ${disabledStyles} ${borderStyles}`}>
      {children}
    </div>
  );
};

const PaginationBar: React.FC = () => {
  const pages = [
    { content: "First", isDisabled: true },
    { content: "1", isActive: false },
    { content: "2", isActive: true },
    { content: "3", isActive: false },
    { content: "Next", isActive: false }
  ];

  return (
    <div className="flex overflow-hidden my-4 flex-col justify-center text-sm font-bold tracking-wide leading-6 text-center text-sky-500 whitespace-nowrap bg-white rounded-md border-solid shadow-sm border-[1.346px] border-stone-300">
      <div className="flex items-start">
        {pages.map((page, index) => (
          <PaginationItem 
            key={index}
            isActive={page.isActive}
            isDisabled={page.isDisabled}
          >
            {page.content}
          </PaginationItem>
        ))}
      </div>
    </div>
  );
};

export default PaginationBar;