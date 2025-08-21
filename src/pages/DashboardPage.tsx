import { useNavigate } from "react-router";
import Header from "../components/Header";
import Total from "../components/Total";
import SalesTarget from "../components/SalesTarget";
import YourSales from "../components/YourSales";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="p-8 bg-grey8">
        <div className="flex justify-between items-center mb-5.5">
          <div>
            <h2 className="text-3xl font-semibold leading-[1.3] text-grey9">
              Dashboard
            </h2>
            <p className="text-sm leading-[1.5] text-grey10">dashboard</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-blue2 text-white rounded-xl font-semibold hover:bg-blue1 transition-colors"
          >
            Exit
          </button>
        </div>
        <div className="flex gap-5.5">
          <div className="flex flex-col gap-5.5">
            <SalesTarget />
            <YourSales />
          </div>

          <div className="flex flex-wrap gap-4">
            <Total />
            <Total />
            <Total />
            <Total />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
