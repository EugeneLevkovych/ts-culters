import type { Category } from "../types/categoryType";

interface CategoryTabsProps {
  categories: Category[];
  onCategorySelect?: (category: Category) => void;
  className?: string;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories = [],
  onCategorySelect,
  className = "",
}) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      {categories.map((category, index) => (
        <button
          key={category.id || category.name || index}
          onClick={() => onCategorySelect && onCategorySelect(category)}
          className={`
            px-3 py-2 rounded-lg font-bold text-sm transition-all duration-200
            ${
              category.active
                ? "bg-blue4 text-blue2"
                : "text-gray2 hover:bg-gray-100"
            }
          `}
        >
          {category.name} ({category.count})
        </button>
      ))}
    </div>
  );
};
export default CategoryTabs;
