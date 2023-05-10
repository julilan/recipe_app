import React, { useState } from "react";
import axios from "axios";
import CountryList from "./CountryList";
import Ingredient from "./Ingredient";
import classes from "./Form.module.css";

const Form = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    author: "",
    origin: "",
    description: "",
    image: "",
    ingredients: [{ quantity: "", ingredient: "" }],
    instructions: "",
  });

  const changeHandler = (e) => {
    e.preventDefault();
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleQuantityChange = (e, index) => {
    const newIngredients = [...recipe.ingredients];
    newIngredients[index] = {
      ...newIngredients[index],
      quantity: e.target.value,
    };
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const handleIngredientChange = (e, index) => {
    const newIngredients = [...recipe.ingredients];
    newIngredients[index] = {
      ...newIngredients[index],
      ingredient: e.target.value,
    };
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/recipes", recipe)
      .then((res) => {
        console.log("data posted: ", res.data);
        setRecipe({
          name: "",
          author: "",
          origin: "",
          description: "",
          image: "",
          ingredients: [{ quantity: "", ingredient: "" }],
          instructions: "",
        });
      })
      .catch((err) => console.log("error: ", err));
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h2>Add new recipe</h2>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" onChange={changeHandler} />
      <label htmlFor="author">Author</label>
      <input type="text" id="author" name="author" onChange={changeHandler} />
      <label htmlFor="origin">Recipe is from:</label>
      <CountryList change={changeHandler} />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="5"
        onChange={changeHandler}
      ></textarea>
      <label htmlFor="image">Image</label>
      <input type="text" id="image" name="image" onChange={changeHandler} />
      <label htmlFor="ingredients">Ingredients</label>
      <Ingredient
        index={0}
        quantityChange={handleQuantityChange}
        ingredientChange={handleIngredientChange}
      />
      <button>Add more</button>
      <label htmlFor="instructions">Instructions</label>
      <textarea
        name="instructions"
        id="instructions"
        cols="30"
        rows="5"
        onChange={changeHandler}
      ></textarea>
      <button type="submit">Post recipe</button>
    </form>
  );
};

export default Form;
