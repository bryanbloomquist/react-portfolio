import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WebDevJSON from "../../json/webdev.json";
import MemberCard from "./membercard";

const WebDevAll = () => {
  const [ members ] = useState( WebDevJSON );
  return (
    <Container className = "mt-5">
      <Row className = "justify-content-center">
        <Col xs = { 12 } md = { 6 } className = "webDev">
          <h2 className = "engraved pt-2 pl-3 text-center">Web Dev Alliance</h2>
        </Col>
      </Row>
      <Row className = "justify-content-center">
        <Col xs = { 12 } md = { 6 } className = "webDev webDevBody">
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