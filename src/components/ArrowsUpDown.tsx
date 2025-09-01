const ArrowsUpDown = () => {
  return (
    <div className="flex flex-col">
      <svg className="size-[11px] -mb-1 fill-gray15">
        <use href="./sprite.svg#icon-sorter-up" />
      </svg>
      <svg className="size-[11px] fill-gray15">
        <use href="./sprite.svg#icon-sorter-down" />
      </svg>
    </div>
  );
};
export default ArrowsUpDown;
