import React from "react";
import { Container, Row } from "react-bootstrap";
import useProduct from "../../Hooks/useProducts";

import Product from "./Product";

const Products = (props) => {
  const { limit } = props;

  const [products] = useProduct();

  return (
    <Container className='mt-5'>
      <Row xs={2} md={4} lg={4} className='g-2'>
        {products.slice(0, limit || products.length).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
