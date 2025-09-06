const ArrowsUpDown = () => {
  return (
    <div className="flex flex-col">
      <svg className="size-[11px] -mb-1 fill-gray14">
        <use href="./sprite.svg#icon-sorter-up" />
      </svg>
      <svg className="size-[11px] fill-gray14">
        <use href="./sprite.svg#icon-sorter-down" />
      </svg>
    </div>
  );
};
export default ArrowsUpDown;
