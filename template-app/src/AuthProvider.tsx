import React from "react";
import axios from "axios";
import { UserContextModel } from "./components/Context/UserModel";
import { LoginModel } from "./components/Context/LoginModel";
import { authContext } from "./components/Context/AuthContext";
import useLocalStorage from "./components/Context/localStorageHook";

export const AuthProvider = (children: JSX.Element) => {
  const [userData, setUserData] = useLocalStorage(
    "userData",
    {} as UserContextModel
  );
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage(
    "isAuthenticated",
    false
  );

  const { mutate: login, isLoading } = useMutation(
    (formData: LoginModel) =>
      axios.post(`${process.env.REACT_APP_BASE_URL}/Account/Login`, formData),
    {
      onSuccess: (result: any) => {
        setUserData(result.data as UserContextModel);
        setIsAuthenticated(true);
      },
      onError: () => {
        console.log("error");
      },
    }
  );

  const logout = React.useCallback(async () => {
    setUserData({} as UserContextModel);
    setIsAuthenticated(false);
  }, [setIsAuthenticated, setUserData]);

  return (
    <authContext.Provider
      value={{
        userData,
        login,
        logout,
        isAuthenticated,
        isLoading,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
function useMutation(
  arg0: (
    formData: LoginModel
  ) => Promise<import("axios").AxiosResponse<any, any>>,
  arg1: { onSuccess: (result: any) => void; onError: () => void }
): { mutate: any; isLoading: any } {
  throw new Error("Function not implemented.");
}
