import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home.js";
import Landowner from "./Components/Landowner/Landowner"
import Investor from "./Components/Investor/Investor"

export default () =>
  <Switch>
    <Route path="/investor" exact component={Investor} />
    <Route path="/landowner" exact component={Landowner} />
    <Route path="/" exact component={Home} />
  </Switch>;