import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
// import Latex from "components/Latex/Latex.js";
import "assets/scss/material-kit-react.scss";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import MathPage from "views/MathPage/MathPage.js";
import PhysicsPage from "views/PhysicsPage/PhysicsPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  // <Latex>
    <Router history={hist}>
      <Switch>
        {/* <Route path="/landing-page" component={LandingPage} /> */}
        <Route path="/" exact component={LandingPage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/math-page" component={MathPage} />
        <Route path="/physics-page" component={PhysicsPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/allcomponents" component={Components}/>
      </Switch>
    </Router>,
  // </Latex>,
  document.getElementById("root")
);
