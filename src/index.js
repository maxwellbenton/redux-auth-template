import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";

const Root = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
