import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import SingleProducts from "../../Components/Products/SingleProducts";
import resultsStyles from "./results.module.css";
import Loader from "../../Components/Loader/Loader";

const Results = () => {
  const { categoryName } = useParams();
  const [category, setCatgory] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    let fetchData = async () => {
      try {
        const response = await Axios.get(
          `https://fakestoreapi.com/products/category/${categoryName}`
        );
        setCatgory(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h3 style={{ padding: "30px" }}>Category/{categoryName}</h3>
      <hr />

      {isLoading ? (
        <Loader />
      ) : (
        <div className={resultsStyles.categoryContainer}>
          {category?.map((singleCategory) => (
            <SingleProducts key={singleCategory.id} {...singleCategory} />
          ))}
        </div>
      )}
    </>
  );
};

export default Results;
