import React from "react";
import { simpleAuthContext } from "./SimpleAuthContext";


export const useSimpleAuth = () => {
  const context = React.useContext(simpleAuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
