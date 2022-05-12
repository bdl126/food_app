import React, { useContext } from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import CartContext from "../../CartContext";

const Header = () => {
  const ctx = useContext(CartContext);
  return (
    <div>
      <div className={classes.header}>
        <h2> ReactMeals</h2>
        <HeaderCartButton
          itemCount={ctx.itemInCart.length}
          onCartShow={ctx.onCartShow}
        ></HeaderCartButton>
      </div>
      <div className={classes["main-image"]}>
        <img src="./meals.jpg" alt="fuck"></img>
      </div>
    </div>
  );
};

export default Header;
