import React, {useContext} from "react";
import ReactDOM from "react-dom";
import CartItem from "./CartItem";
import classes from "./Modal.module.css";
import cartClasses from "./Cart.module.css";
import Button from "../UI/Button";

import CartContext from "../../CartContext";

const Cart = (props) => {
  const ctx = useContext(CartContext)

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={classes.backdrop}>
          <div className={classes.modal}>
            <CartItem
              name="sushi"
              price={parseFloat("22.99")}
              amount="33"
              onRemove={() => {}}
              onAdd={() => {}}
            ></CartItem>
            <div className={cartClasses.total}>
              <p>Total Amount</p>
              <p>$$$</p>
            </div>
            <div className={cartClasses.actions}>
              <div>
                <button onClick={ctx.onCartHide}>Close</button>
                <button>Order</button>
              </div>
            </div>
          </div>
        </div>,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Cart;
