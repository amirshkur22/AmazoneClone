import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SingleProducts from "../../Components/Products/SingleProducts";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    let fetchData = async () => {
      try {
        const response = await Axios.get(`https://fakestoreapi.com/products/${productId}`);
        console.log(response.data);
        setProduct(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
    // console.log(product?.rating?.rate)
  return <SingleProducts  {...product} />;
};

export default ProductDetails;
