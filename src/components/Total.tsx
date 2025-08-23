const Total = () => {
  return (
    <div className="p-4 rounded-[20px] bg-white">
      <div className="flex justify-between mb-14">
        <h4 className="font-semibold leading-[1.3] text-grey7">
          Total Ravenue
        </h4>
        <svg className="size-6 stroke-gray7 fill-none">
          <use href="./sprite.svg#icon-arrow-up-right"></use>
        </svg>
      </div>
      <div className="flex gap-7.5">
        <p className="font-semibold text-3xl leading-[1.3] text-blue2">
          $81.000
        </p>
        <div>
          <div className="flex gap-[2px] justify-end">
            <svg className="size-5 stroke-green1 fill-none">
              <use href="./sprite.svg#icon-akar-icons_statistic-down"></use>
            </svg>
            <p className="font-bold text-xs text-green1">10.6%</p>
          </div>
          <p className="text-xs leading-[1.4] text-gray2">from last week</p>
        </div>
      </div>
    </div>
  );
};
export default Total;
