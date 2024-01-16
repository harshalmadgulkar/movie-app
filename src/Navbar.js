import React from "react";
import NavStyle from "./navbar.module.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className={NavStyle.nav}>
        <div className={NavStyle.title}>MOVIE-APP</div>
        <div className={NavStyle.cartIconContainer}>
          <img className={NavStyle.cartImage}
            alt="cart-icon"
            src="https://cdn-icons-png.flaticon.com/128/5542/5542671.png"
          />
          <span className={NavStyle.cartCount}>4</span>
        </div>
      </div>
    );
  }
}

export default Navbar;
