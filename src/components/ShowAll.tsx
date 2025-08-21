const ShowAll = () => {
  return (
    <div className="flex items-center">
      <p className="font-semibold text-xs leading-[1.4] text-grey11">
        Show All
      </p>
      <svg className="size-6 stroke-grey7 fill-none">
        <use href="./sprite.svg#icon-arrow-up-right"></use>
      </svg>
    </div>
  );
};
export default ShowAll;
