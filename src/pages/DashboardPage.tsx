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
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-grey1">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-blue2 text-white rounded-xl font-semibold hover:bg-blue1 transition-colors"
            >
              Exit
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Product</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
