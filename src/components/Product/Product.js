import React from "react";

import { BsFillPersonFill } from "react-icons/bs";
import { FiBook } from "react-icons/fi";
import { Card, Col } from "react-bootstrap";

const Product = (props) => {
  const {
    authorName,
    courseName,
    totalModule,
    totalEnrolled,
    price,
    poster,
    authorPicture,
  } = props.product;

  return (
    <Col>
      <Card className='p-0'>
        <Card.Img variant='top' src={poster} />
        <Card.Body>
          {/* product detail area */}
          <div className='d-flex align-items-center'>
            <img
              src={authorPicture}
              width='32'
              height='32'
              className='rounded-circle'
              alt=''
            />
            <p className='mt-3 ms-2'>{authorName}</p>
          </div>

          <Card.Title>
            {" "}
            <h5>{courseName}</h5>
          </Card.Title>

          <hr className='w-80 mx-auto' />

          {/* icons area */}
          <div className='w-80 mx-auto d-flex justify-content-between'>
            <div className='d-flex'>
              <div className='d-flex align-items-center'>
                <BsFillPersonFill className='text-danger' />
                <span className='ms-1'>{totalEnrolled}</span>
              </div>
              <div className='d-flex align-items-center ms-2'>
                <FiBook className='text-danger' />
                <span className='ms-1'>{totalModule}</span>
              </div>
            </div>

            <div className='d-flex align-items-center'>
              <span className='ms-1 fw-bolder'>${price}</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
