import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/HomePage/index";
import ToolPage from "./pages/ToolPage/index";

const routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/tools" component={ToolPage} />
    </div>
  </Router>
);
export default routes;
