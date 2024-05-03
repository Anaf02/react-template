import { createContext } from "react";
import { UserContextModel } from "./UserModel";
import { LoginModel } from "./LoginModel";

export interface AuthContext {
  userData: UserContextModel | null;
  login: (formData: LoginModel) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const authContext = createContext<AuthContext>({} as AuthContext);
