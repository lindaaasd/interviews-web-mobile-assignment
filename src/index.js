import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore();

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
