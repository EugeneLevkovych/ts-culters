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
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategorySelect && onCategorySelect(category)}
          className={`
            flex-1 px-3 py-2 rounded-lg font-bold text-sm leading-[1.5] transition-all duration-200 cursor-pointer
            ${
              category.active
                ? "bg-blue4 text-blue2"
                : "text-gray2 dark:text-gray15 hover:bg-blue4"
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
