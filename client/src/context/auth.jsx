import { createContext, useContext, useState } from "react";
import { loginUser, registerUser } from "../services/apiClient";
import { RenderRoutes } from "../routers/renderRoutes";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState({ isAuth: false });

  const login = async (credentials) => {
    loginUser(credentials)
      .then(({ data }) => {
        setUserData(data);
      })
      .catch((error) => {
        logout();
        console.log(error);
      });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser({ isAuth: false });
  };

  const register = (credentials) => {
    registerUser(credentials)
      .then(({ data }) => {
        setUserData(data);
      })
      .catch((error) => {
        logout();
        console.log(error);
      });
  };

  const setUserData = (data) => {
    const { role } = data.user;
    const { firstName, lastName } = data.user.profile;

    localStorage.setItem("token", data.token);
    setUser({ role, firstName, lastName, isAuth: true });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      <>
        <RenderRoutes />
      </>
    </AuthContext.Provider>
  );
};
