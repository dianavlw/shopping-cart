import { useSelector } from "react-redux";

import styles from "./Navbar.module.css";

function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className={styles.navbar}>
      <h2>Shopping Cart</h2>

      <h3>Cart: {totalQuantity}</h3>
    </nav>
  );
}

export default Navbar;
