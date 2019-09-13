import React from "react";
import { Col } from "react-bootstrap";

const SkillCard = ( props ) => {

  return (

  <Col 
    xs = { 12 } md = { 5 }  lg = { 3 } 
    className = "skillsList float-left m-2 p-3"
  >
    <h4 className = "engraved">
      { props.category }
    </h4>
    { props.skills.map(( skills ) => (
      <h5>{ skills }</h5>
    ))}
  </Col>

  )

}

export default SkillCard;