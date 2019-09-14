import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutMe = ( ) => {
  return (
    <Container className = "mt-5">
      <Row className = "justify-content-center">
        <Col xs = { 12 } md = { 6 } className = "header">
          <h2 clasName = "engraved pt-2 text-center">About Me</h2>
        </Col>
      </Row>
      <Row className = "justify-content-center">
        <Col xs = { 12 } sm = { 8 } className = "aboutMeBody">
          <img class = "float-right bioPic p-3" src = "../images/biopic.png" alt = "bryan bloomquist" />
          <p>
            I enlisted in the Army Reserves after high school so I could go to college and get a higher education.  I changed my major three times because at 18 I had no idea what I wanted to do with my life, and before I could graduate my reserve unit was activated and I was sent to Iraq.  I spent almost all of 2003 driving a fuel truck through Iraq and Kuwait and also earned certification as a combat lifesaver. After I got home from the war I finished my bachelor’s degree while working full time as a letter carrier at the United States Postal Service.
          </p>
          <p>
            I had gone to college because I love to learn new things. As a mailman the only new things I learned came from the plethora of podcasts and audio books of which I listened to avoid boredom. When you aren’t running away from dogs (it really is a thing) most of being a mailman is boredom.
          </p>
          <p>
            In 2018 I found out about a coding boot camp at the University of Minnesota, I quit my job at the post office to become a full time dad and devote all my free time to learning full stack web development. I had learned some early coding when I was in college, even made a couple web sites that thankfully no longer exist (this was the era of hamster dance), but I never thought to make a career out of it. In boot camp I have learned so many skills for both front and back-end development, and there is always something new to learn.
          </p>
        </Col>
      </Row>
      <Row className = "justify-content-center">
        <Col lg = { 6 } className = "contactInfo engraved p-3">
          <h5>Phone: <a href = "tel:1-612-226-8339">612-226-8339</a></h5>
        </Col>
        <Col lg = { 6 } className = "contactInfo engraved p-3">
          <h5>email: <a href = "mailto:bmbloomquist@gmail.com" title = "Email" target = "_top">bmbloomquist@gmail.com</a></h5>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutMe;