import React, { useEffect, useState } from "react";
import Axios from "axios";
import SingleProducts from "./SingleProducts";
import productsStyle from "./products.module.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      try {
        const response = await Axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={productsStyle.allProdutsContainer}>
      {products?.map((singleproduct, index) => (
        <SingleProducts key={index} {...singleproduct} />
      ))}
    </div>
  );
};

export default Products;
