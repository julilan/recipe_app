import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../UI/Loader";
import classes from "./RecipeSingle.module.css";

const RecipeSingle = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:4001/recipes?name=${params.recipesingle}`)
      .then((res) => {
        setData(res.data[0]);
        setIsLoading(false);
      });
  }, []);

  if (isLoading || data === null) {
    return <Loader />;
  }

  return (
    <div className={classes.info}>
      <h2>{data.name}</h2>
      <img src={data.image} alt={data.name} />
      <p>{data.description}</p>
      <p>{data.author}</p>
      <div>
        <h3>Ingredients</h3>
        {data.ingredients &&
          data.ingredients.map((ingredient) => (
            <p key={ingredient.ingredient}>
              {ingredient.quantity} - {ingredient.ingredient}
            </p>
          ))}
      </div>
      <div>
        <h3>Preparation</h3>
        <p>{data.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeSingle;
