import ProductTable from "./ProductTable";
import ShowAll from "./ShowAll";

const ProductPopular = () => {
  return (
    <div className="w-176.5 p-5 bg-white rounded-3xl">
      <div className="flex justify-between mb-6">
        <h5 className="heading">Product Popular</h5>
        <ShowAll />
      </div>
      <ProductTable />
    </div>
  );
};
export default ProductPopular;
