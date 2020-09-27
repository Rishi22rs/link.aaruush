import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../App.js";
import Details from "./Details.js";

const Routes = () => (
  <Router>
    <Route path="/" exact component={App} />
    <Route path="/Details/:uid" exact component={Details} />
  </Router>
);

export default Routes;
