import NavStyle from "./navbar.module.css";

function Navbar(props) {
  const { cartCount } = props;
  // console.log(cartCount);
  return (
    <div className={NavStyle.nav}>
      <div className={NavStyle.title}>MOVIE-APP</div>
      <div className={NavStyle.cartIconContainer}>
        <img
          className={NavStyle.cartImage}
          alt="cart-icon"
          src="https://cdn-icons-png.flaticon.com/128/5542/5542671.png"
        />
        <span className={NavStyle.cartCount}> {cartCount} </span>
      </div>
    </div>
  );
}
export default Navbar;