import Logo from "./Logo";

const SideBar = () => {
  return (
    <div className="px-4 py-8">
      <div className="flex justify-between items-center w-full">
        <Logo size="small" />
        <svg className="size-6">
          <use href="./sprite.svg#icon-panel-close"></use>
        </svg>
      </div>
    </div>
  );
};
export default SideBar;
