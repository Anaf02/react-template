import React from "react";
import axios, { AxiosInstance } from "axios";

export interface AxiosContext {
  axiosApi: AxiosInstance;
}
const axiosContext = React.createContext({} as AxiosContext);

interface Props {
  children: JSX.Element;
}

export const AxiosProvider: React.FC<Props> = ({ children }) => {
  const axiosApi = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
  });

  return (
    <axiosContext.Provider value={{ axiosApi }}>
      {children}
    </axiosContext.Provider>
  );
};

export const useAxios = () => React.useContext(axiosContext);
