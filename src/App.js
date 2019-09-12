import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
// import Welcome from "./pages/welcome";
// import Portfolio from "./pages/portfolio";
// import TechSkills from "./pages/techskills";
// import AboutMe from "./pages/aboutme";
// import WebDevAll from "./pages/webdevall";
// import AllApps from "./pages/allapps";
import "./styles.scss";

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          {/* <Switch>
            <Route exact path = "/" component = { Welcome } />
            <Route exact path = "/portfolio" component = { Portfolio } /> 
            <Route exact path = "/techskills" component = { TechSkills } />
            <Route exact path = "/aboutme" component = { AboutMe } />
            <Route exact path = "/webdevall" component = { WebDevAll } />
            <Route exact path = "/allapps" component = { AllApps } />
          </Switch> */}
        </div>
      </Router>
    </div>
  );
}

export default App;