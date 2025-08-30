const Input = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search product"
        className="w-75 border border-gray5 rounded-xl my-placeholder placeholder:text-gray6 px-4 py-[9.5px]"
      />
      <svg className="absolute top-2.5 right-2.5 size-6 fill-transparent stroke-gray7">
        <use href="./sprite.svg#icon-search"></use>
      </svg>
    </div>
  );
};
export default Input;
