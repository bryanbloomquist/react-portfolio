import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutMe = ( props ) => {
  console.log( props.condition );
  return (
    <Container fluid = { true } className = { props.condition ? "mt-5 open" : "mt-5 closed" }>
      <Row className = "justify-content-center mx-1">
        <Col xs = { 12 } lg = { 8 } className = "header">
          <h2 className = "engraved pt-2">About Me</h2>
        </Col>
      </Row>
      <Row className = "justify-content-center mx-1">
        <Col xs = { 12 } lg = { 8 } className = "header aboutMe p-3">
          <img className = "float-right bioPic p-3 img-fluid" src = "images/biopic.png" alt = "bryan bloomquist" />
          <p>
            I enlisted in the Army Reserves after high school so I could go to college because that is what you were supposed to do.  I changed majors three times because at 18 I had no idea what I wanted to do with my life, and before I could graduate I was activated and sent to Iraq.  I spent most of 2003 driving a fuel truck through Iraq and Kuwait.
          </p>
          <p>
            After the war I got a job as a letter carrier at the USPS.  I had gone to college because I love to learn new things. As a mailman the only new things I learned came from the plethora of podcasts and audio books of which I listened in order to avoid boredom. When you aren’t running away from dogs (it really is a thing) most of being a mailman is boredom.
          </p>
          <p>
            In 2018 I quit my job at the post office to become a full time dad and devote all my free time to learning web development, plus I completed a 24 week full stack web development boot camp at the University of Minnesota. I had learned some early coding when I was in college, even made a couple web sites that thankfully no longer exist (this was the era of hamster dance), but I never thought to make a career out of it.  Now, I'm ready to make it a career.
          </p>
        </Col>
      </Row>
      <Row className = "justify-content-center mx-1 mb-5">
        <Col xs = { 12 } sm = { 5 } lg = { 3 }  className = "header contactInfo engraved p-3">
          <h6>Phone: <a href = "tel:1-612-226-8339">612-226-8339</a></h6>
        </Col>
        <Col xs = { 12 } sm = { 7 } lg = { 5 }  className = "header contactInfo engraved p-3">
          <h6>email: <a href = "mailto:bmbloomquist@gmail.com" title = "Email" target = "_top">bmbloomquist@gmail.com</a></h6>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutMe;