import React from "react";
import { Row, Col } from "react-bootstrap";
import AboutUsPicture from "../../assets/Code_thinking.svg";

import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <Row className='w-75 mx-auto'>
        <Col className='m-3'>
          <img src={AboutUsPicture} className='img-fluid' alt='about us' />
        </Col>
        <Col>
          <div>
            <h1>About Us</h1>
            <hr />
            <p>
              We help organizations of all types and sizes prepare for the path
              ahead — wherever it leads. Our curated collection of business and
              technical courses help companies, governments, and nonprofits go
              further by placing learning at the center of their strategies.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
