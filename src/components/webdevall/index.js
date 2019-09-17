import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WebDevJSON from "../../json/webdev.json";
import MemberCard from "./membercard";

const WebDevAll = ( props ) => {
  const [ members ] = useState( WebDevJSON );
  return (
    <Container className = { props.condition ? "mt-5 open" : "mt-5 closed" }>
      <Row className = "justify-content-center mx-1">
        <Col xs = { 12 } md = { 6 } className = "header">
          <h2 className = "engraved pt-2 pl-3 text-center">Web Dev Alliance</h2>
        </Col>
      </Row>
      <Row className = "justify-content-center mx-1 mb-5">
        <Col xs = { 12 } md = { 6 } className = "header webDevBody">
          { members.map(( developer ) => (
            <MemberCard
              key = { developer.id }
              website = { developer.website }
              name = { developer.name }
            />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default WebDevAll;