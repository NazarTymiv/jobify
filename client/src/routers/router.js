import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const routers = [
  { path: "/", name: "Home", element: <Home />, isMenu: true, isPrivate: true },
  {
    path: "/login",
    name: "Login",
    element: <Login />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/register",
    name: "Register",
    element: <Register />,
    isMenu: false,
    isPrivate: false,
  },
];
