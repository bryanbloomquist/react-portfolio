import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WebDevJSON from "../../json/webdev.json";
import MemberCard from "./membercard";

const WebDevAll = () => {
  const [ members ] = useState( WebDevJSON );
  const [ condition ] = useState();
  console.log( condition );
  return (
    <Container className = { condition ? "content" : "contentactive" }>
    {/* <Container className = "content" > */}
      <Row className = "justify-content-center">
        <Col xs = { 12 } sm = { 6 } className = "webdevall">
          <h2 className = "engraved pt-2 pl-3 text-center">Web Dev Alliance</h2>
        </Col>
      </Row>
      <Row className = "justify-content-center">
        <Col xs = { 12 } sm = { 6 }>
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