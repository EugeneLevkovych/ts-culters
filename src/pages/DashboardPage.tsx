import { useNavigate } from "react-router";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-grey1">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors"
          >
            Exit
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Вітаємо в Dashboard!</h2>
          <p className="text-grey2">
            Ви успішно увійшли в систему. Тут буде контент вашого додатку.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
