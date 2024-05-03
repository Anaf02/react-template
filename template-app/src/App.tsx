import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import { AxiosProvider } from "./components/Context/AuthContextWithoutToken/SimpleAxiosContextWithAuth";
import { AuthProvider } from "./components/Context/AuthContextWithoutToken/SimpleAuthProvider";


function App() {
  return (
    <AxiosProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthProvider>
    </AxiosProvider>
  );
}

export default App;
