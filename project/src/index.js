import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-dom";
import { createStore } from "redux";
import "./index.css";
import App from "./App";
import { reducer } from "./state/reducers";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
