import React, { useContext } from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../currencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import ProductStyle from "./products.module.css";
import { DataContext } from "../../App";
import { Type } from "../../Utility/Action.type";

const SingleProducts = ({
  id,
  title,
  price,
  description,
  image,
  rating,
  category,
  flex,
  hasDescription,
  isAdded
}) => {
 
  const [state, dispatch] = useContext(DataContext)
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_CART,
      item: {
        id,
        title,
        price,
        description,
        image,
        rating,
        category,
      }
      
    })
  }
  return (
    <div
      className={`${ProductStyle.productContainer} ${
        flex ? ProductStyle.flexedProductContainer : ""
      }`}
    >
      <Link to={`products/${id}`} className={ProductStyle.imageContainer}>
        <img src={image} alt="" />
      </Link>
      <div className={`${flex ? ProductStyle.contentContainer : ""}`}>
        <h4>{title}</h4>
        {hasDescription && <h5>{description}</h5>}
        <div className={ProductStyle.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <div className={ProductStyle.priceAndButton}>
          <CurrencyFormat amount={price} />
          {isAdded && <button className={ProductStyle.button} onClick={addToCart}>
            Add to Cart
          </button>}
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
