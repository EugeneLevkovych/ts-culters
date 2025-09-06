import ArrowsUpDown from "./ArrowsUpDown";

const ProductSortBar2 = () => {
  return (
    <div className="bg-gray13 dark:bg-black1 border-b border-gray12 text-gray9">
      {/* Desktop */}
      <div className="hidden xl:grid xl:grid-cols-[auto_1fr_100px_100px_80px_130px_130px_110px_auto] 2xl:grid-cols-[auto_1fr_120px_120px_100px_150px_130px_130px_auto] gap-0 items-center">
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

      {/* Mobile */}
      <div className="flex xl:hidden">
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
