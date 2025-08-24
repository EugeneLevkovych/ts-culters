import { products } from "../data/productData";
import SortButton from "./SortButton";
import FilterButton from "./FilterButton";
import ProductItem from "./ProductItem";

const ProductTable = () => {
  return (
    <div className="border border-gray12 rounded-2xl">
      <div className="flex bg-gray13 border-b border-gray12">
        <SortButton title="Product" />
        <SortButton title="Price" />
        <FilterButton title="Sales" />
        <FilterButton title="Status" />
      </div>

      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductTable;
