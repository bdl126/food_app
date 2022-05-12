import React, {useContext} from 'react';
import Header from './components/Header/Header';
import MealsSummary from './components/Meal/MealsSummary';
import classes from "./Apps.module.css"
import AvailableMeals from './components/Meal/AvailableMeals';
import DUMMY_MEALS from './dummy-meals'
import CartContext from './CartContext';
import Cart from './components/Cart/Cart';

function App() {
  const ctx = useContext(CartContext)

  return (
    <div className={classes.App}>
      <Header />
      <MealsSummary/>
      <AvailableMeals meals={DUMMY_MEALS}/>
      {ctx.isCartShown && <Cart/>}
    </div>
  );
}

export default App;
