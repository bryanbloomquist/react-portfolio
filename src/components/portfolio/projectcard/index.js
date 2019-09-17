import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ( props ) => {
  return (
  <Col xs = { 12 } md = { 6 } xl = { 4 } className = "p-2 float-left">
    <div className = "hovereffect m-1">
      <img
        src = { props.image }
        alt = { props.title }
        className = "imgResponsive imgPortfolio"
      />
      <div className = "overlay">
        <h2>{ props.title }</h2>
        <p>{ props.skills.map(( skills ) => <span> { skills } |</span>)}</p>
        <a 
          className = "info btn" 
          href = { props.website } 
          target = "_blank" 
          rel = "noopener noreferrer"
        >
          View Project
        </a>
        <a
          className = "btn ghub"
          href = { props.github }
          target = "_blank"
          rel = "noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  </Col>
  )
}

export default ProjectCard;