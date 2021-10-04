import React from "react";
import HeroArea from "./HeroArea";

import Products from "../Product/Products";
import Partner from "./Partner";

import "./Home.css";
const Home = () => {
  return (
    <>
      <header className='hero-area'>
        <HeroArea />
      </header>

      <main>
        <h1 className='text-center mt-5'>Choose From Our Top Courses</h1>
        <Products limit={4} />
        <Partner />
      </main>
    </>
  );
};

export default Home;
