import { useNavigate } from "react-router";
import Header from "../components/Header";
import Total from "../components/Total";
import SalesTarget from "../components/SalesTarget";
import YourSales from "../components/YourSales";
import IncreaseYourSales from "../components/IncreaseYourSales";
import Map from "../components/Map";
import ProductPopular from "../components/ProductPopular";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="p-8 bg-gray8">
        <div className="flex justify-between items-center mb-5.5">
          <div>
            <h2 className="text-3xl font-semibold leading-[1.3] text-gray9">
              Dashboard
            </h2>
            <p className="text-sm leading-[1.5] text-gray10">dashboard</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-blue2 text-white rounded-xl font-semibold hover:bg-blue1 transition-colors"
          >
            Exit
          </button>
        </div>
        <div className="flex gap-5.5 mb-5.5">
          <div className="flex flex-col gap-5.5">
            <SalesTarget />
            <YourSales />
          </div>
          <div>
            <div className="flex flex-wrap gap-4 mb-5">
              <Total />
              <Total />
              <Total />
              <Total />
            </div>
            <IncreaseYourSales />
          </div>
        </div>
        <div className="flex gap-5.5">
          <Map />
          <ProductPopular />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
