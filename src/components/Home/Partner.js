import React from "react";
import { Row, Col } from "react-bootstrap";

import Logo1 from "../../assets/Partner/logo-1.png";
import Logo2 from "../../assets/Partner/logo-2.png";
import Logo3 from "../../assets/Partner/logo-3.png";
import Logo4 from "../../assets/Partner/logo-4.png";

const Partner = () => {
  return (
    <section className='bg-light my-5 py-5  mx-auto text-center partner-area'>
      <h4 className='text-center mb-5'>
        Partnering with world's leading{" "}
        <span className='text-danger '>universities and companies</span>{" "}
      </h4>
      <Row lg={4} className='w-75 mx-auto'>
        <Col>
          <img src={Logo1} alt='company 1' width='100px' height='100px' />
        </Col>
        <Col>
          <img src={Logo2} alt='company 2' width='100px' height='100px' />
        </Col>
        <Col>
          <img src={Logo3} alt='company 3' width='100px' height='100px' />
        </Col>
        <Col>
          <img src={Logo4} alt='company 4' width='100px' height='100px' />
        </Col>
      </Row>
    </section>
  );
};

export default Partner;
