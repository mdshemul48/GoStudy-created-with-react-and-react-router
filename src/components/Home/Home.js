import React from "react";
import HeroArea from "./HeroArea";

import Products from "../Product/Services";
import Partner from "./Partner";

import "./Home.css";
const Home = () => {
  // home page will be display here
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
