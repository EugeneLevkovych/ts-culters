import { useNavigate } from "react-router";
import Header from "../components/Header";

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
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-3xl font-bold text-grey1">Dashboard</h1>

          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-blue2 text-white rounded-xl font-semibold hover:bg-blue1 transition-colors"
          >
            Exit
          </button>
        </div>
        <p className="mb-5.5">dashboard</p>
        <div className="bg-white rounded-3xl p-5">
          <h3 className="mb-4">Sales Target</h3>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
