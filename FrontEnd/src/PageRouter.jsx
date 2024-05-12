import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Authentication/SignUp";
import Payment from "./pages/Payment/Payment";
import Cart from "./pages/Cart/Cart";
// import Login from "./pages/Authentication/Login";
import Orders from "./pages/Orders/Orders";

import SharedComponents from "./Components/SharedComponents/SharedComponets";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Results from "./pages/Results/Results";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedComponents />}>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="category/:categoryName" element={<Results />} />
        <Route path="category/:categoryName/products/:productId" element={<ProductDetails />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default PageRouter;
