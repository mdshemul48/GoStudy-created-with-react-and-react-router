import axios from "axios";
import { useState, useEffect } from "react";

const useProducts = () => {
  // this hook will fetch data from backend(fakeData)
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

export default useProducts;
