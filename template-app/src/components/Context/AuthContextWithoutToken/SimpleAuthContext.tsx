import { createContext } from "react";
import { SimpleUserModel } from "./SimpleUserModel";
import { SimpleLoginModel } from "./SimpleLoginModel";

export interface SimpleAuthContext {
  userData: SimpleUserModel | null;
  login: (formData: SimpleLoginModel) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const simpleAuthContext = createContext<SimpleAuthContext>({} as SimpleAuthContext);
