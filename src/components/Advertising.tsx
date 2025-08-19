import DashboardImg from "../assets/dashboard-img.jpg";

const Advertising = () => {
  return (
    <div className="w-1/2  bg-blue1 py-50 px-14">
      <img
        className="w-full h-108 rounded-3xl mb-7"
        src={DashboardImg}
        alt="dashboard"
      />

      <h3 className="font-semibold text-4xl leading-[1.3] -tracking-[.01em] text-white text-center mb-4">
        Easy-to-Use Dashboard for Managing Your Business.
      </h3>
      <p className="text-sm leading-[1.5] text-white1 text-center">
        Streamline Your Business Management with Our User-Friendly Dashboard.
        Simplify complex tasks, track key metrics, and make informed decisions
        effortlessly
      </p>
    </div>
  );
};
export default Advertising;
