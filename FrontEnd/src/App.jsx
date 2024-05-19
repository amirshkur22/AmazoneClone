import "./App.css";
import { Route, Routes } from "react-router-dom";
import { createContext, useReducer } from "react";
import { initialState, reducerMethod } from "./Utility/ReducerMethod";
import SharedComponents from "./Components/SharedComponents/SharedComponets";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Authentication/SignUp";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import CategoriesDetails from "./pages/CategoriesDetails/CategoriesDetails";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
export const DataContext = createContext();
function App() {
  return (
    <DataContext.Provider value={useReducer(reducerMethod, initialState)}>
      <Routes>
        <Route path="/" element={<SharedComponents />}>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<SignUp />} />
          <Route path="/pay" element={<Payment />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="category/:categoryName"
            element={<CategoriesDetails />}
          />
          <Route
            path="category/:categoryName/products/:productId"
            element={<ProductDetails />}
          />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </DataContext.Provider>
  );
}

export default App;
