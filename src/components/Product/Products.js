import React from "react";
import { Container, Row } from "react-bootstrap";
import useProduct from "../../Hooks/useProducts";

import Product from "./Product";

const Products = () => {
  const [products] = useProduct();
  console.log(products);
  return (
    <Container className='mt-5'>
      <Row xs={2} md={4} lg={4} className='g-2'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
