import ArrowsUpDown from "./ArrowsUpDown";

const ProductSortBar2 = () => {
  return (
    <div className="bg-gray13 border-b border-gray12 text-gray9">
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-[auto_1fr_120px_120px_100px_150px_130px_130px_auto] gap-0 items-center">
        <div className="p-3.5">
          <input className="accent-blue2 cursor-pointer" type="checkbox" />
        </div>

        <div className="p-3.5 flex items-center justify-between">
          <h6>Product</h6>
          <ArrowsUpDown />
        </div>

        <div className="p-3.5 flex items-center justify-between">
          <h6>Price</h6>
          <ArrowsUpDown />
        </div>

        <div className="p-3.5 flex items-center justify-between">
          <h6>Size</h6>
          <ArrowsUpDown />
        </div>

        <div className="p-3.5 flex items-center justify-between">
          <h6>QTY</h6>
          <ArrowsUpDown />
        </div>

        <div className="p-3 flex items-center justify-between">
          <h6>Date</h6>
          <ArrowsUpDown />
        </div>

        <div className="p-3 flex items-center justify-between">
          <h6>Status</h6>
          <ArrowsUpDown />
        </div>

        <div className="p-3 flex items-center justify-between">
          <h6>Action</h6>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex lg:hidden">
        <div className="p-3">
          <input className="accent-blue2 cursor-pointer" type="checkbox" />
        </div>
        <div className="flex-1 flex p-3 items-center justify-between min-w-0">
          <h6>Product</h6>
          <ArrowsUpDown />
        </div>
      </div>
    </div>
  );
};

export default ProductSortBar2;
