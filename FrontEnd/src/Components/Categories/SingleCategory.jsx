import React from "react";
import singleCategoryStyles from "./category.module.css";
const SingleCategory = ({ title, name, image }) => {
  return (
    <div className={singleCategoryStyles.singleCategoryContainer}>
      <a href="/">
        <span>
          <h2>{title}</h2>
        </span>
        <img src={image} alt=""  />
      </a>
      <p>Shop now</p>
    </div>
  );
};

export default SingleCategory;
