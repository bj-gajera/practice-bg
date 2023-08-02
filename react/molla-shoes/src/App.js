import React from "react";
import Component from "./Component/Component";
import Router from "./Component/Router/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <div>
        <Component />
        <Router />
        <ToastContainer position="bottom-right" autoClose={1000} />
      </div>
    </>
  );
};

export default App;
