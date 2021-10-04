import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import personImage from "../../assets/hero-area-image.png";

import "./HeroArea.css";
const HeroArea = () => {
  // this is home page main area for showing hero details
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <h1 className='hero-area-title'>
            Build Skills with <br />
            Online Courses from <br />
            expert instructor
          </h1>
          <p className='hero-area-text'>
            Start streaming on-demand video lectures today from top level <br />
            instructors Attention heatmaps.
          </p>
        </Col>
        <Col lg={6}>
          <img
            className='hero-area-person-image'
            src={personImage}
            width='90%'
            alt='hero area person'
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroArea;
