import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Authentication/SignUp";
import Payment from "./pages/Payment/Payment";
import Cart from "./pages/Cart/Cart";
// import Login from "./pages/Authentication/Login";
import Orders from "./pages/Orders/Orders";
import SharedComponents from "./Components/SharedComponents/SharedComponets";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedComponents />}>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default PageRouter;
