import { useNavigate } from "react-router";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import MainContent from "../components/MainContent";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex">
      <SideBar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <MainContent handleLogout={handleLogout} />
      </div>
    </div>
  );
};

export default DashboardPage;
