import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import Categories from "../../Components/Categories/Categories";
import Products from "../../Components/Products/Products";
import LayOut from "../../Components/SharedComponents/SharedComponets";
const Home = () => {
  return (
    <>
      <Carousel />
      <Categories />
      <Products />
    </>
  );
};

export default Home;
