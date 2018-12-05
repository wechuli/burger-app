import React from "react";
import classes from "./BurgerIngredient.module.css";
const BurgerIngredient = props => {
  let ingredient = null;
  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom}>BT</div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}> m</div>
          <div className={classes.Seeds2}>M</div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={classes.Meat}>f</div>;
      break;
    case "cheese":
      ingredient = <div className={classes.Cheese}>f</div>;
      break;
    case "bacon":
      ingredient = <div className={classes.Bacon}>f</div>;
      break;
    case "salad":
      ingredient = <div className={classes.Salad}>f</div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

export default BurgerIngredient;
