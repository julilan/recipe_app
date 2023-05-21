import React from "react";
import classes from "./Form.module.css";

const Ingredient = ({ quantityChange, ingredientChange, index }) => {
  return (
    <div className={classes.ingredients}>
      <div>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          onChange={(e) => quantityChange(e, index)}
          required
        />
      </div>
      <div>
        <label htmlFor="ingredient">Ingredient</label>
        <input
          type="text"
          id="ingredient"
          name="ingredient"
          onChange={(e) => ingredientChange(e, index)}
          required
        />
      </div>
    </div>
  );
};

export default Ingredient;
