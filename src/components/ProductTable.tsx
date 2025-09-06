import { products } from "../data/productData";

import Input from "./Input";
import CategoryTabs from "./CategoryTabs";
import { categories } from "../data/categoryData";
import { useState } from "react";
import type { Category } from "../types/categoryType";
import FilterBtn from "./FilterBtn";
import ExportBtn from "./ExportBtn";
import ButtonAdd from "./ButtonAdd";
import ProductItem from "./ProductItem";
import ProductSortBar from "./ProductSortBar";
import PagesCountBar from "./PagesCountBar";

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
    <div className="border-2 rounded-3xl border-gray12 p-6 bg-white dark:bg-black2">
      <div className="flex flex-col-reverse md:flex-col">
        <div className="flex justify-between mb-6">
          <Input placeholder="Search for id, name Customer" width="400px" />
          <div className="flex gap-3 md:ml-3">
            <FilterBtn />
            <ExportBtn />
            <ButtonAdd text="Add Customer" />
          </div>
        </div>
        <CategoryTabs
          categories={categoriesWithActive}
          onCategorySelect={handleCategorySelect}
          className="mb-8"
        />
      </div>

      <div className="border rounded-2xl border-gray12 overflow-hidden mb-6">
        <ProductSortBar />
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <PagesCountBar />
    </div>
  );
};

export default ProductTable;
