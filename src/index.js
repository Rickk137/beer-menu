import React from "react";
import ReactDOM from "react-dom";
import "assets/styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { CartProvider } from "context/cartContext";
import { CssBaseline } from "@material-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <CssBaseline />
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
