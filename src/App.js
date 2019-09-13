import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Welcome from "./components/welcome";
import Portfolio from "./components/portfolio";
import TechSkills from "./components/techskills";
import AboutMe from "./components/aboutme";
import WebDevAll from "./components/webdevall";
import AllApps from "./components/allapps";
import "./styles.scss";

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path = "/" component = { Welcome } />
            <Route exact path = "/portfolio" component = { Portfolio } /> 
            <Route exact path = "/techskills" component = { TechSkills } />
            <Route exact path = "/aboutme" component = { AboutMe } />
            <Route exact path = "/webdevall" component = { WebDevAll } />
            <Route exact path = "/allapps" component = { AllApps } />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;