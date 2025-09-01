import ArrowsUpDown from "./ArrowsUpDown";

const ProductSortBar = () => {
  return (
    <div className="flex bg-gray13 border-b border-gray12 text-gray9">
      <div className="p-3">
        <input className="accent-blue2 cursor-pointer" type="checkbox" />
      </div>
      <div className="flex-2 flex p-3 items-center justify-between min-w-0">
        <h6>Product</h6>
        <ArrowsUpDown />
      </div>
      <div className="w-30 flex-shrink-0 flex p-3 items-center justify-between">
        <h6>Price</h6>
        <ArrowsUpDown />
      </div>
      <div className="w-30 flex-shrink-0 flex p-3 items-center justify-between">
        <h6>Size</h6>
        <ArrowsUpDown />
      </div>
      <div className="w-25 flex-shrink-0 flex p-3 items-center justify-between">
        <h6>QTY</h6>
        <ArrowsUpDown />
      </div>
      <div className="w-37.5 flex-shrink-0 flex p-3 items-center justify-between">
        <h6>Date</h6>
        <ArrowsUpDown />
      </div>
      <div className="w-32.5 flex-shrink-0 flex p-3 items-center justify-between">
        <h6>Status</h6>
        <ArrowsUpDown />
      </div>
      <div className="w-32.5 flex-shrink-0 flex p-3 items-center justify-between">
        <h6>Action</h6>
      </div>
    </div>
  );
};
export default ProductSortBar;
