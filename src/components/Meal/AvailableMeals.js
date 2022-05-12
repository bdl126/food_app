import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";
import Card from "./../UI/Card";

const AvailableMeals = (props) => {
  return (
    <Card className={classes.meals}>
      <ul>
          {props.meals.map(meal => {
              return (
                <MealItem
                key={meal.id}
                name={meal.name}
                price={meal.price}
                description={meal.description}
                />
              )
          })}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
