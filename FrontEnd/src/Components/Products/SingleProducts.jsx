import React from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../currencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import ProductStyle from "./products.module.css";

const SingleProducts = ({
  id,
  title,
  price,
  description,
  image,
  rating,
  category,
}) => {
  return (
    <div className={ProductStyle.productContainer}>
      <Link to={`products/${id}`} className={ProductStyle.imageContainer}>
        {/* <h2>{category}</h2> */}
        <img src={image} alt="" />
      </Link>
      <div>
        <h4>{title}</h4>
        <div className={ProductStyle.rating}>
          {rating && <Rating value={rating.rate} precision={0.1} />}
          <small>{rating && rating.count}</small>
        </div>
        <div className={ProductStyle.priceAndButton}>
          <CurrencyFormat amount={price} />
          <button className={ProductStyle.button}>add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
