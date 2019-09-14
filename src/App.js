import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Welcome from "./components/welcome";
import Portfolio from "./components/portfolio";
import TechSkills from "./components/techskills";
import AboutMe from "./components/aboutme";
import WebDevAll from "./components/webdevall";
import AllApps from "./components/allapps";
import "./styles.scss";

class App extends Component {
  constructor( props ) {
    super( props );
    this.navControl.bind( this );
  }
  state = { condition: true }
  navControl = () => this.setState({ condition: !this.state.condition })
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar condition = { this.state.condition } navControl = { this.navControl }/>
            <Switch>
              <Route exact path = "/" component = {() => ( <Welcome condition = { this.state.condition } /> )} />
              <Route exact path = "/portfolio" component = {() => ( <Portfolio condition = { this.state.condition } /> )} /> 
              <Route exact path = "/techskills" component = {() => ( <TechSkills condition = { this.state.condition } /> )} />
              <Route exact path = "/aboutme" component = {() => ( <AboutMe condition = { this.state.condition } /> )} />
              <Route exact path = "/webdevall" component = {() => ( <WebDevAll condition = { this.state.condition } /> )} />
              <Route exact path = "/allapps" component = {() => ( <AllApps condition = { this.state.condition } /> )} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  };
}

export default App;