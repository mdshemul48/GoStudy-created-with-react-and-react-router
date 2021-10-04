import React from "react";

import { BsFillPersonFill } from "react-icons/bs";
import { FiBook } from "react-icons/fi";
import { Card, Col } from "react-bootstrap";

const Product = () => {
  return (
    <Col>
      <Card className='p-0'>
        <Card.Img
          variant='top'
          src='https://raistheme.com/wp/gostudy/learnpress/wp-content/uploads/sites/2/2021/09/BL8312-500x300.jpg'
        />
        <Card.Body>
          {/* product detail area */}
          <div className='d-flex align-items-center'>
            <img
              src='https://raistheme.com/wp/gostudy/wp-content/uploads/2021/03/profile-21-32x32.jpg'
              width='32'
              height='32'
              className='rounded-circle'
              alt=''
            />
            <p className='mt-3 ms-2'>Kevin Perry</p>
          </div>

          <Card.Title>
            {" "}
            <h5>Basics of Cooking for Busy People</h5>
          </Card.Title>

          <hr className='w-80 mx-auto' />

          {/* icons area */}
          <div className='w-80 mx-auto d-flex justify-content-between'>
            <div className='d-flex'>
              <div className='d-flex align-items-center'>
                <BsFillPersonFill className='text-danger' />
                <span className='ms-1'>1</span>
              </div>
              <div className='d-flex align-items-center ms-2'>
                <FiBook className='text-danger' />
                <span className='ms-1'>10</span>
              </div>
            </div>

            <div className='d-flex align-items-center'>
              <span className='ms-1 fw-bolder'>$20</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
