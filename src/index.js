import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

//redux
import { Provider } from "react-redux";
import reduxStore from "./redux/reduxStore";

//routes
import { BrowserRouter as Router } from "react-router-dom";
import Paths from "./routes/Paths";

//styles
import "./index.module.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={reduxStore}>
    <Router>
      <Paths />
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
