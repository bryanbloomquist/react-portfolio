import React from "react";
import { Link } from "react-router-dom";

const NavBar = (  ) => {
  return (
    <div>
      <div id = "navbar">
        <Link to = "/" className = "animeTrigger engraved"><h3>Bryan Bloomquist</h3></Link>
        <Link to = "/portfolio" className = "animeTrigger btn pageLink">Portfolio</Link><br />
        <Link to = "/techskills" className = "animeTrigger btn pageLink">Technical Skills</Link><br />
        <Link to = "/aboutme" className = "animeTrigger btn pageLink">About Me</Link><br />
        <a className = "btn pageLink" href = "https://github.com/bryanbloomquist" title = "GitHub" target = "_blank" rel = "noopener noreferrer">
          <i class = "fab fa-github fa-2x"></i>
        </a><br />
        <a className = "btn pageLink" href = "https://linkedin.com/in/bryan-bloomquist-b1374416b" title = "LinkedIn" target = "_blank" rel = "noopener noreferrer">
          <i class = "fab fa-linkedin fa-2x"></i>
        </a><br />
        <a className = "btn pageLink" href = "mailto:bmbloomquist@gmail.com?Subject=I%20Want%20To%20Hire%20You" title = "Email" target = "_top">
          <i class = "fas fa-envelope-square fa-2x"></i>
        </a><br />
        <a className = "btn pageLink" href = "./assets/Resume.pdf" title = "Resume" target = "_blank" rel = "noopener noreferrer">
          <i class = "far fa-file fa-2x"></i>
        </a><br />
        <Link to = "/webdevall" className = "animeTrigger btn pageLink">Web Dev Alliance</Link>
        <div className = "footer mt-5">Copyright &copy; 2019</div>
      </div>
      <div id = "navbarButton">
        <button type = "button" class = "btn btn-dark">
          <i class = "fas fa-bars" />
        </button>
      </div>
    </div>
  )
}

export default NavBar;