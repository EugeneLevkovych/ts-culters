const Header = () => {
  return (
    <div className="flex px-8 py-[1.6rem]">
      <div className="relative">
        <input
          type="text"
          placeholder="Search product"
          className="w-75 border border-grey5 rounded-xl my-placeholder placeholder:text-grey6 px-4 py-[9.5px]"
        />
        <svg className="absolute top-2.5 right-2.5 size-6 fill-transparent stroke-grey7">
          <use href="./sprite.svg#icon-search"></use>
        </svg>
      </div>
    </div>
  );
};
export default Header;
