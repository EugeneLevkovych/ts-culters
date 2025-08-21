const Total = () => {
  return (
    <div className="p-4 rounded-[20px] bg-white">
      <div className="flex justify-between mb-14">
        <h4>Total Ravenue</h4>
        <svg className="size-6 stroke-grey7 fill-none">
          <use href="./sprite.svg#icon-arrow-up-right"></use>
        </svg>
      </div>
      <div className="flex">
        <p className="font-semibold text-3xl leading-[1.3] text-blue2">
          $81.000
        </p>
        <div>
          <svg className="size-6 stroke-grey7 fill-none">
            <use href="./sprite.svg#icon-akar-icons_statistic-down"></use>
          </svg>
          <p>from last week</p>
        </div>
      </div>
    </div>
  );
};
export default Total;
