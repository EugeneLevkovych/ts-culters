import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "dashboard", element: <DashboardPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
