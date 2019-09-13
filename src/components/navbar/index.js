import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor( props ) {
    super( props );
    this.navControl = this.navControl.bind( this );
  }

  state = { condition: true }

  navControl = (  ) => this.setState({ condition: !this.state.condition })

  render() {
    return (
      <div>
        <div className = { this.state.condition ? "navbar active" : "navbar" }>
          <Link to = "/" className = "animeTrigger engraved"><h3>Bryan Bloomquist</h3></Link>
          <Link to = "/portfolio" className = "animeTrigger btn pageLink">Portfolio</Link><br />
          <Link to = "/techskills" className = "animeTrigger btn pageLink">Technical Skills</Link><br />
          <Link to = "/aboutme" className = "animeTrigger btn pageLink">About Me</Link><br />
          <a className = "btn pageLink p-1" href = "https://github.com/bryanbloomquist" title = "GitHub" target = "_blank" rel = "noopener noreferrer">
            <i className = "fab fa-github fa-2x" />
          </a><br />
          <a className = "btn pageLink p-1" href = "https://linkedin.com/in/bryan-bloomquist-b1374416b" title = "LinkedIn" target = "_blank" rel = "noopener noreferrer">
            <i className = "fab fa-linkedin fa-2x" />
          </a><br />
          <a className = "btn pageLink p-1" href = "mailto:bmbloomquist@gmail.com?Subject=I%20Want%20To%20Hire%20You" title = "Email" target = "_top">
            <i className = "fas fa-envelope-square fa-2x" />
          </a><br />
          <a className = "btn pageLink p-1" href = "./assets/Resume.pdf" title = "Resume" target = "_blank" rel = "noopener noreferrer">
            <i className = "far fa-file fa-2x" />
          </a><br />
          <Link to = "/webdevall" className = "animeTrigger btn pageLink">Web Dev Alliance</Link>
          <div className = "footer mt-5">Copyright &copy; 2019</div>
        </div>
        <div className = { this.state.condition ? "navbarButton" : "navbarButton active" }>
          <button type = "button" id = "navButton" className = "btn btn-dark" onClick = { this.navControl }>
            <i className = { this.state.condition ? "fas fa-angle-double-left" : "fas fa-angle-double-right" }/>
          </button>
        </div>
      </div>
    )
  };
}

export default NavBar;