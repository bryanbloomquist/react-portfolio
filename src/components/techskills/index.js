import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TechSkillsJSON from "../../json/techskills.json";
import SkillCard from "./skillcard";

const TechSkills = ( props ) => {
  const [ skills ] = useState( TechSkillsJSON );
  return (
    <Container fluid = { true } className = { props.condition ? "mt-5 open" : "mt-5 closed" }>
      <Row className = "justify-content-center mx-1">
        <Col xs = { 12 } lg = { 8 } className = "header">
          <h2 className = "engraved pt-2 pl-3">Technical Skills</h2>
        </Col>
      </Row>
      <Row className = "justify-content-center mx-1 mb-5">
        <Col xs = { 12 } lg = { 8 } className = "techSkills">
          { skills.map(( skill ) => (
            <SkillCard
              key = { skill.id }
              name = { skill.name }
              image = { skill.image }
            />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default TechSkills;