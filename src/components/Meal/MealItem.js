import classes from "./MealItem.module.css";
import Input from "../UI/Input";
import formClasses from "./MealItemForm.module.css"

const MealItem = (props) => {
  return (
    <div className={classes.meal}>
      <div className={classes.mealDescription}>
        <h3> {props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <form className={formClasses.form}>
        <Input></Input>
        <button>+ Add</button>
      </form>
    </div>
  );
};

export default MealItem;
