import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../../Pages/Home";
import Support from "../../Pages/Support";
import Service from "../../Pages/Service";
import ContactUs from "../../Pages/ContactUs";
import LearnGermany from "../../Pages/LearnGermany";
import Living from "../../Pages/Living";
import Education from "../../Pages/Education";
import GermanyLaw from "../../Pages/GermanyLaw";
import Landing from "../layout/Landing";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Dashboard from "../dashboard/Dashboard";
import PrivateRoute from "../private-route/PrivateRoute";

const Main = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />;
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/learngermany" component={LearnGermany} />
        <Route exact path="/living" component={Living} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/germanlaw" component={GermanyLaw} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
        <Redirect to="/" />
      </Switch>
    </Fragment>
  );
};

export default Main;
