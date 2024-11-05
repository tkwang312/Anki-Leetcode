import Login from "../components/Login";
import Register from "../components/Signup";
import Header from "../components/Header";
import Home from "../components/Home";

import { AuthProvider } from "../context/AuthContext";
import { useRoutes } from "react-router-dom";
import Grind75Card from "./Grind75Card";
import Neetcode150Card from "./Neetcode150Card";

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
    {
      path: "/grind75",
      element: <Grind75Card />,
    },
    {
      path: "/neetcode150",
      element: <Neetcode150Card />,
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
