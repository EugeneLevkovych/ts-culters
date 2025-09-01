import { products } from "../data/productData";
import ProductItem from "./ProductItem";
import Input from "./Input";
import CategoryTabs from "./CategoryTabs";
import { categories } from "../data/categoryData";
import { useState } from "react";
import type { Category } from "../types/categoryType";
import ProductSortBar from "./ProductSortBar";

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
    <div className="border-2 rounded-3xl border-gray12 p-6 bg-white">
      <div className="flex mb-6">
        <Input />
      </div>
      <CategoryTabs
        categories={categoriesWithActive} // використовуємо оновлений масив
        onCategorySelect={handleCategorySelect}
        className="mb-8"
      />
      <div className="border rounded-2xl border-gray12 overflow-hidden">
        <ProductSortBar />
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
