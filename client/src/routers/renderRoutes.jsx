import { AuthData } from "../context/auth";
import { Route, Routes } from "react-router-dom";
import { routers } from "./router";

export const RenderRoutes = () => {
  const { user } = AuthData();

  return (
    <Routes>
      {routers.map((route, index) => {
        if (route.isPrivate && user.isAuth && user.role === route.role) {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        } else if (!route.isPrivate) {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        } else {
          return false;
        }
      })}
    </Routes>
  );
};
