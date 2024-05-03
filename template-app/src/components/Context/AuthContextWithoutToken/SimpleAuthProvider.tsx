import React from "react";
import axios from "axios";

import useLocalStorage from "../localStorageHook";
import { SimpleLoginModel } from "./SimpleLoginModel";
import { simpleAuthContext } from "./SimpleAuthContext";
import { SimpleUserModel } from "./SimpleUserModel";

interface Props {
  children: JSX.Element
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [userData, setUserData] = useLocalStorage(
    "userData",
    {} as SimpleUserModel
  );
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage(
    "isAuthenticated",
    false
  );

  const login = React.useCallback(async (formData: SimpleLoginModel) => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/user/${formData.userId}`).then((res) => {
      setUserData(res.data)
      setIsAuthenticated(true)
    })
  }, [setIsAuthenticated, setUserData])

  const logout = React.useCallback(async () => {
    setUserData({} as SimpleUserModel);
    setIsAuthenticated(false);
  }, [setIsAuthenticated, setUserData]);

  return (
    <simpleAuthContext.Provider
      value={{
        userData,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </simpleAuthContext.Provider>
  );
};