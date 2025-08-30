import { products } from "../data/productData";
import SortButton from "./SortButton";
import FilterButton from "./FilterButton";
import ProductItem from "./ProductItem";
import Input from "./Input";
import CategoryTabs from "./CategoryTabs";
import { categories } from "../data/categoryData";
import { useState } from "react";
import type { Category } from "../types/categoryType";

const ProductTable = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Sneakers");

  const handleCategorySelect = (category: Category) => {
    setActiveCategory(category.name);
    console.log("Selected category:", category.name);
  };

  // Додаємо active статус динамічно
  const categoriesWithActive = categories.map((category) => ({
    ...category,
    active: activeCategory === category.name,
  }));

  return (
    <div className="border-2 rounded-3xl p-6 bg-white">
      <div className="flex mb-6">
        <Input />
      </div>
      <div className="flex gap-2 font-bold text-sm leading-[1.5] text-gray2 px-3 py-2 mb-6">
        <CategoryTabs
          categories={categoriesWithActive} // використовуємо оновлений масив
          onCategorySelect={handleCategorySelect}
          className="mb-8"
        />
      </div>
      <div className="border border-gray12 rounded-2xl">
        <div className="flex bg-gray13 border-b border-gray12">
          <SortButton title="Product" />
          <SortButton title="Price" />
          <FilterButton title="Sales" />
          <FilterButton title="Status" />
        </div>
      </div>

      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductTable;
