const SearchAndMenu = () => {
  return (
    <div className="flex md:hidden gap-4">
      <svg className="size-7 stroke-gray7 fill-transparent">
        <use href="./sprite.svg#icon-search"></use>
      </svg>
      <svg className="size-7 stroke-gray7 fill-transparent">
        <use href="./sprite.svg#icon-menu"></use>
      </svg>
    </div>
  );
};
export default SearchAndMenu;
