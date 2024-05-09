import React from "react";
import amazonLogo from "../../assets/images/amazonLogo.png";
import usaFlag from "../../assets/images/usaFlag.png";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import navStyles from "./nav.module.css";
import LowerNav from "./LowerNav";
const Nav = () => {
  return (
    <>
    
    <header>
      <nav className={navStyles.navBarWrapper}>
        <div className={navStyles.LeftSide}>
          <a href="/">
            <img src={amazonLogo} alt="amazonLogo" width={100} />
          </a>
          <div className={navStyles.SlLocationPin}>
            <span>
              <SlLocationPin />
            </span>
            <div className={navStyles.delivery}>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        {/*  */}
        <div className={navStyles.middlePart}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <BsSearch className={navStyles.BsSearch} size={27} />
        </div>
        {/*  */}
        <div className={navStyles.rightSide}>
          <a className={navStyles.coutrySelection}>
            <img src={usaFlag} alt="" width={20} />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>
          {/*  */}

          <a href="">
            <p>Hello, sign in</p>
            <span>Account & Lists</span>
          </a>

          <a href="">
            <p>Returns</p>
            <span>& Orders</span>
          </a>

          <div className={navStyles.lastFlex}>
            <a href="" className={navStyles.verticalFlex}>
              <span className={navStyles.cartCount}>0</span>
              <BiCart className={navStyles.BiCart} size={35} />
            </a>
            <p className={navStyles.cart}>Cart</p>
          </div>
        </div>
      </nav>
      </header>
      <LowerNav/>
    </>
  );
};

export default Nav;
