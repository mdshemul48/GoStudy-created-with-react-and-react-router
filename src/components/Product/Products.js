import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Product from "./Product";

const Products = () => {
  return (
    <Container className='mt-5'>
      <Row xs={2} md={4} lg={4} className='g-2'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Row>
    </Container>
  );
};

export default Products;
