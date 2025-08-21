import { useNavigate } from "react-router";
import Header from "../components/Header";
import Total from "../components/Total";

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

        <div className="bg-white rounded-3xl p-5">
          <label
            className="font-semibold leading-[1.3] text-grey7 mb-4"
            htmlFor="sales-target"
          >
            Sales Target
          </label>
          <div className="flex justify-between">
            <div>
              <p className="par-1">In Progress</p>
              <p className="par-2">$231.132.444</p>
            </div>
            <div>
              <p className="par-1">Sales Target</p>
              <p className="par-2">$500.000.00</p>
            </div>
          </div>
          <input className="w-full" type="range" id="sales-target" />
        </div>

        <div className="flex flex-wrap">
          <Total />
          <Total />
          <Total />
          <Total />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
