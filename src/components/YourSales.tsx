import chartImg from "../assets/chart.png";

const YourSales = () => {
  return (
    <div className="p-4 bg-white rounded-3xl">
      <div className="flex justify-between mb-3">
        <h5>Your Sales this year</h5>
        <div className="flex">
          <p>Show All</p>
          <svg className="size-6 stroke-grey7 fill-none">
            <use href="./sprite.svg#icon-arrow-up-right"></use>
          </svg>
        </div>
      </div>
      <div className="flex gap-4 text-xs leading-[1.4] text-grey2 mb-6">
        <div className="flex items-center gap-1">
          <div className="size-3.5 bg-lime-green"></div>
          <p>Average Sale Value</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="size-3.5 bg-blue2"></div>
          <p>Average Item Per Sale</p>
        </div>
      </div>
      <img className="mb-6" src={chartImg} alt="chart" />
      <ul className="flex justify-around text-sm leading-[1.5] text-grey2">
        <li>jan</li>
        <li>feb</li>
        <li>mar</li>
        <li>apr</li>
        <li>may</li>
        <li>jun</li>
        <li>jul</li>
        <li>aug</li>
        <li>sep</li>
        <li>okt</li>
        <li>nov</li>
      </ul>
    </div>
  );
};
export default YourSales;
