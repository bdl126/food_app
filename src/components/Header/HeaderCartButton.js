import React from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <div>
      <button className={classes.button} onClick={props.onCartShow}>
        <CartIcon className={classes.icon} />
        <div>Your cart</div>

        <div className={classes.badge}> {props.itemCount}</div>
      </button>
    </div>
  );
};

export default HeaderCartButton;
