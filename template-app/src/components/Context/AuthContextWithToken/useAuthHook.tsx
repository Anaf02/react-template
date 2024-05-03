import React from "react";
import { authContext } from "./AuthContext";


export const useAuth = () => {
  const context = React.useContext(authContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
