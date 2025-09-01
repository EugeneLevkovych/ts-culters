import { products } from "../data/productData";
import ProductItem from "./ProductItem";
import Input from "./Input";
import CategoryTabs from "./CategoryTabs";
import { categories } from "../data/categoryData";
import { useState } from "react";
import type { Category } from "../types/categoryType";
import ProductSortBar from "./ProductSortBar";
import ArrowsLeftRight from "./ArrowsLeftRight";

const ProductTable = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Sneakers");

  const handleCategorySelect = (category: Category) => {
    setActiveCategory(category.name);
    console.log("Selected category:", category.name);
  };

  const categoriesWithActive = categories.map((category) => ({
    ...category,
    active: activeCategory === category.name,
  }));

  return (
    <div className="border-2 rounded-3xl border-gray12 p-6 bg-white">
      <div className="flex mb-6">
        <Input />
      </div>
      <CategoryTabs
        categories={categoriesWithActive}
        onCategorySelect={handleCategorySelect}
        className="mb-8"
      />
      <div className="border rounded-2xl border-gray12 overflow-hidden mb-6">
        <ProductSortBar />
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-between">
        <p>1-10 of 13 Pages</p>
        <div className="flex">
          <p>The page on</p>
          <ArrowsLeftRight />
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
