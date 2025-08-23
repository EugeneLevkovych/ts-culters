const SortButton = ({ title }) => {
  return (
    <div className="flex p-3 items-center justify-between w-full">
      <h6 className="text-grey9">{title}</h6>
      <div className="flex flex-col">
        <svg className="size-[11px] -mb-1 fill-grey15">
          <use href="./sprite.svg#icon-sorter-up" />
        </svg>
        <svg className="size-[11px] fill-grey15">
          <use href="./sprite.svg#icon-sorter-down" />
        </svg>
      </div>
    </div>
  );
};
export default SortButton;
