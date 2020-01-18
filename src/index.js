import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App/App";
import ErrorPage from "./ErrorPage/ErrorPage";

require("dotenv").config();

ReactDOM.render(
  <ErrorPage>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorPage>,
  document.getElementById("root")
);
