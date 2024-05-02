import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import { AxiosProvider } from "./components/Context/AxiosContext";

function App() {
  return (
    <AxiosProvider>
      <BrowserRouter>
        <Layout>
          <AppRouter />
        </Layout>
      </BrowserRouter>
    </AxiosProvider>
  );
}

export default App;
