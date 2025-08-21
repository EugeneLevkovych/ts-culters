import chartImg from "../assets/chart.png";

const YourSales = () => {
  return (
    <div className="p-4 bg-white rounded-3xl">
      <div className="flex justify-between">
        <h5>Your Sales this year</h5>
        <div className="flex">
          <p>Show All</p>
          <svg className="size-6 stroke-grey7 fill-none">
            <use href="./sprite.svg#icon-arrow-up-right"></use>
          </svg>
        </div>
      </div>
      <img src={chartImg} alt="" />
    </div>
  );
};
export default YourSales;
