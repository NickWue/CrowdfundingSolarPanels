import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import Landowner from "./Components/Landowner/Landowner"
import Investor from "./Components/Investor/Investor"
import AppliedRoute from './AppliedRoute'
export default ({loginProps}) =>
  <Switch>
    <AppliedRoute path="/investor" exact component={Investor} props={loginProps}/>
    <AppliedRoute path="/landowner" exact component={Landowner} props={loginProps}/>
    <AppliedRoute path="/" exact component={Home} props={loginProps}/>
    <Route component={null} />
  </Switch>;