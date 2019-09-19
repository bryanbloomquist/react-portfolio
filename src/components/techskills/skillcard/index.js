import React from "react";
import { Col } from "react-bootstrap";

const SkillCard = ( props ) => {
  return (
  <Col xs = {6} md = { 4 } xl = { 3 } className = "float-left p-1">
    <div className = "header my-1 p-3">
      <h4 className = "engraved">{ props.name }</h4>
      <img
        src = { window.location.origin + props.image }
        alt = { props.name } 
        className = "skillImage"
      />
    </div>
  </Col>
  )
}

export default SkillCard;