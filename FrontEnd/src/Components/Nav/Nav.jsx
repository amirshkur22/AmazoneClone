import React from "react";
import amazonLogo from "../../assets/images/amazonLogo.png";
import usaFlag from "../../assets/images/usaFlag.png";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import styles from "./nav.module.css";
const Nav = () => {
  return (
    <header>
      <nav className={styles.navBarWrapper}>
        <div className={styles.LeftSide}>
          <a href="/">
            <img src={amazonLogo} alt="amazonLogo" width={100} />
          </a>
          <div className={styles.SlLocationPin}>
            <span>
              <SlLocationPin />
            </span>
            <div className={styles.delivery}>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        {/*  */}
        <div className={styles.middlePart}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <BsSearch className={styles.BsSearch} size={27} />
        </div>
        {/*  */}
        <div className={styles.rightSide}>
          <a className={styles.coutrySelection}>
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

          <div className={styles.lastFlex}>
            <a href="" className={styles.verticalFlex}>
              <span className={styles.cartCount}>0</span>
              <BiCart className={styles.BiCart} size={35} />
            </a>
            <p className={styles.cart}>Cart</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
