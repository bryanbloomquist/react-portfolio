import React from "react";
import { Col } from "react-bootstrap";

const SkillCard = ( props ) => {
  return (
  <Col xs = { 12 } md = { 6 } className = "float-left">
    <div className = "header skillsList m-3 p-3">
      <h4 className = "engraved">{ props.category }</h4>
      { props.skills.map(( skills ) => <h5>{ skills }</h5> )}
    </div>
  </Col>
  )
}

export default SkillCard;