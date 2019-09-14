import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TechSkillsJSON from "../../json/techskills.json";
import SkillCard from "./skillcard";

const TechSkills = ( ) => {
  const [ skills ] = useState( TechSkillsJSON );
  return (
    <Container className = "mt-5">
      <Row className = "justify-content-center">
        <Col xs = { 12 } sm = { 9 } className = "header">
          <h2 className = "engraved pt-2 pl-3 text-center">Technical Skills</h2>
        </Col>
      </Row>
      <Row className = "justify-content-center">
        <Col xs = { 12 } sm = { 9 } className = "techSkillsBody">
          { skills.map(( skill ) => (
            <SkillCard
              key = { skill.id }
              category = { skill.category }
              skills = { skill.skills }
            />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default TechSkills;