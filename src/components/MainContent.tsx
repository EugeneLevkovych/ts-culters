import ProductTable from "./ProductTable";

interface MainContentProps {
  handleLogout: () => void;
}

const MainContent = ({ handleLogout }: MainContentProps) => {
  return (
    <div className="p-8 bg-gray8">
      <div className="flex justify-between items-center mb-5.5">
        <div>
          <h2 className="text-3xl font-semibold leading-[1.3] text-gray9">
            Product
          </h2>
          <div className="flex items-center text-sm leading-[1.5]">
            <p className="text-gray10">Dashboard</p>
            <svg className="size-4">
              <use href="./sprite.svg#icon-arrow-solid-right"></use>
            </svg>
            <p className="text-gray10">Product</p>
            <svg className="size-4">
              <use href="./sprite.svg#icon-arrow-solid-right"></use>
            </svg>
            <p className="text-gray10">Sneakers</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="px-6 py-3 bg-blue2 text-white rounded-xl font-semibold hover:bg-blue1 transition-colors cursor-pointer"
        >
          Exit
        </button>
      </div>
      <ProductTable />
    </div>
  );
};
export default MainContent;
