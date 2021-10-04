import React from "react";
import { Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";

import ContactImage from "../../assets/contact-us.svg";

import "./ContactUs.css";
const ContactUs = () => {
  return (
    <section className='mx-5 contact-us-page w-75 mx-auto'>
      <Row className='d-flex align-items-center pb-5 px-5 g-5'>
        <Col md={5}>
          <img src={ContactImage} className='img-fluid' alt='' />
        </Col>
        <Col md={7}>
          <h1>Contact With Us</h1>
          <Form>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formGridEmail'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' placeholder='Enter Your First Name' />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridPassword'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' placeholder='Enter Your Last name' />
              </Form.Group>
            </Row>

            <Form.Group className='mb-3' controlId='formGridAddress1'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='someone@mail.com' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formGridAddress2'>
              <Form.Label>Your Massage</Form.Label>
              <FloatingLabel controlId='floatingTextarea2' label='Your Massage'>
                <Form.Control
                  as='textarea'
                  placeholder='Leave a message here'
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Form.Group>

            <Button variant='primary' type='submit'>
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default ContactUs;
