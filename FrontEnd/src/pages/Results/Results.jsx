import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import SingleProducts from "../../Components/Products/SingleProducts";
import resultsStyles from "./results.module.css";

const Results = () => {
  const { categoryName } = useParams();
  const [category, setCatgory] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      try {
        const response = await Axios.get(
          `https://fakestoreapi.com/products/category/${categoryName}`
        );
        setCatgory(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h3 style={{ padding: "30px" }}>Category/{categoryName}</h3>
      <div className={resultsStyles.categoryContainer}>
        {category.map((singleCategory) => (
          <SingleProducts key={singleCategory.id} {...singleCategory} />
        ))}
      </div>
    </>
  );
};

export default Results;
