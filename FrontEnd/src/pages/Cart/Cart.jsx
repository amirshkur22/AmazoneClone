import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import SingleProducts from "../../Components/Products/SingleProducts";
import CurrencyFormat from "../../Components/currencyFormat/CurrencyFormat";
import CartStyle from './cart.module.css'

const Cart = () => {
  const [{ cart, user }, dispatch] = useContext(DataContext);
  const totalPrice = cart?.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);
  return (
    <section className={CartStyle.cartContainer}>
      <div className={CartStyle.leftSide}>
        <h2>Hello</h2>
        <h3>Your Shopping Cart</h3>
        <hr />
        {cart?.length == 0 ? (
          <h1>
            Opps!! Your Cart is Empty
          </h1>
        ) : (
          cart?.map((item) => (
            <SingleProducts
              key={item.id}
              {...item}
              flex={true}
              hasDescription={true}
              isAdded={false}
            />
          ))
        )}
      </div>
      {cart?.length != 0 && (
        <div className={CartStyle.rightSide}>
          <div>
            <p>Subtotal ({cart?.length} items)</p>

            <CurrencyFormat amount={totalPrice} />
          </div>
          <span>
            <input type="checkbox" />
            <small>Check this box to apply the coupon code</small>
          </span>
          <Link to="/payment">CheckOut</Link>
        </div>
      )}
    </section>
  );
};

export default Cart;
