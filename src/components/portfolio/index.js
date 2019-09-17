import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioJSON from "../../json/portfolio.json";
import ProjectCard from "./projectcard";

const Portfolio = ( props ) => {
  const [ projects ] = useState( PortfolioJSON )
  return (
    <Container fluid = { true } className = { props.condition ? "mt-5 open" : "mt-5 closed" }>
      <Row className = "justify-content-center mx-1">
        <Col xs = { 12 } lg = { 10 } className = "header">
          <h2 className = "engraved pt-2 pl-3 text-center">Portfolio</h2>
        </Col>
      </Row>
      <Row className = "justify-content-center mx-1 mb-5">
        <Col xs = { 12 } lg = { 10 } className = "portfolio">
          { projects.map(( project ) => (
            <ProjectCard
              key = { project.id }
              title = { project.title }
              image = { project.image }
              website = { project.website }
              github = { project.github }
              skills = { project.skills }
            />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default Portfolio;