import axios from "axios";
import React, { useState, useEffect } from "react";

const useProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const { data } = await axios.get("./FakeData.json");
        setProduct(data);
      } catch (error) {
        alert(error.message);
      }
    };
    FetchData();
  }, []);

  return [product];
};

export default useProduct;
