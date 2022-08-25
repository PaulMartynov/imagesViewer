import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./app/app";
import { store } from "./app/redux/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
