const FilterButton = ({ title }) => {
  return (
    <div className="flex p-3 items-center justify-between w-full">
      <h6 className="text-grey9">{title}</h6>
      <svg className="w-5 h-5.5 fill-grey15">
        <use href="./sprite.svg#icon-filter" />
      </svg>
    </div>
  );
};
export default FilterButton;
