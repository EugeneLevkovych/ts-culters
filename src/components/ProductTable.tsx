import { products } from "../data/productData";
import SortButton from "./SortButton";
import FilterButton from "./FilterButton";

import Product from "./Product";

const ProductTable = () => {
  return (
    <div className="border border-gray12 rounded-2xl overflow-hidden">
      <div className="flex bg-grey13 border-b border-grey12">
        <SortButton title="Product" />
        <SortButton title="Price" />
        <FilterButton title="Sales" />
        <FilterButton title="Status" />
      </div>

      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductTable;
