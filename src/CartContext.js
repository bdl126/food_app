import React, {useState, useEffect} from "react"

const CartContext = React.createContext({
    itemInCart: [],
    isCartShown:false,
    onCartShow: ()=>{},
    onCartHide: ()=>{}
});

export const CartContextProvider = props =>{
    const [isCartShown, SetIsCartShown] = useState(false)
    const cartItems = []

    const onCartShowHandler = () => {
        console.log(isCartShown)
        SetIsCartShown(true)
    }
    const onCartHideHandler = () => { SetIsCartShown(false)}

    useEffect(()=> {

    },[isCartShown])

    return (
        <CartContext.Provider
        value={{
            itemInCart: cartItems,
            isCartShown: isCartShown,
            onCartShow : onCartShowHandler,
            onCartHide : onCartHideHandler

        }}
        >
            {props.children}
        </CartContext.Provider>
    )
}


export default CartContext
