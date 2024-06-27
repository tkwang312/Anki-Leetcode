import Login from "../components/Login";
import Register from "../components/Signup";

import Header from "../components/Header";
import Home from "../components/Home";
import Sidebar from "./Sidebar";

import { AuthProvider } from "../context/AuthContext";
import { useRoutes } from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col my-20">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
