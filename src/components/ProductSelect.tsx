import { useState } from "react";
import { productCategories } from "../data/productData";

const ProductSelect = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Sneakers");

  const totalProducts = productCategories.reduce(
    (sum, cat) => sum + cat.count,
    0
  );

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className="w-62 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-2 hover:bg-blue4 transition-colors duration-200 cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <svg className="size-6 stroke-gray7 fill-transparent">
            <use href="./sprite.svg#icon-store"></use>
          </svg>
          <h5 className="font-bold text-sm leading-[1.5] text-gray7">
            Product ({totalProducts})
          </h5>
        </div>
        {isOpen ? (
          <svg className="size-6 stroke-gray7 fill-transparent">
            <use href="./sprite.svg#icon-arrow-up-simple"></use>
          </svg>
        ) : (
          <svg className="size-6 stroke-gray7 fill-transparent">
            <use href="./sprite.svg#icon-arrow-down-simple"></use>
          </svg>
        )}
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="relative">
          {productCategories.map((category, index) => (
            <div key={category.name} className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gray4"></div>

              <div className="absolute left-6 top-1/2 w-4 h-px bg-gray4"></div>

              <button
                onClick={() => handleCategoryClick(category.name)}
                className={`w-full text-left px-4 py-3 pl-12 hover:bg-blue4 transition-colors duration-150 cursor-pointer ${
                  selectedCategory === category.name
                    ? "text-blue1 font-medium"
                    : "category-text"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{category.name}</span>
                  <span className="text-sm text-gray-500">
                    ({category.count})
                  </span>
                </div>
              </button>

              {index === productCategories.length - 1 && (
                <div className="absolute left-6 top-1/2 bottom-0 w-px bg-white"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductSelect;
