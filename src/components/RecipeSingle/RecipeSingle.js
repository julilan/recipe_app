import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { findFlagUrlByCountryName } from "country-flags-svg";
import Loader from "../UI/Loader/Loader";
import "./RecipeSingle.css";

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
  }, [params.recipesingle]);

  if (isLoading || data === null) {
    return <Loader />;
  }

  return (
    <div className="recipe">
      <div className="recipe_group">
        <img src={data.image} alt={data.name} />
        <figure>
          <img src={findFlagUrlByCountryName(data.origin)} alt={data.origin} />
        </figure>
      </div>
      <div className="recipe_group">
        <h2>{data.name}</h2>
        <p>{data.author}</p>
        <p>{data.description}</p>
      </div>
      <div className="recipe_group">
        <h3>Ingredients</h3>
        <ul>
          {data.ingredients &&
            data.ingredients.map((ingredient) => (
              <li key={ingredient.ingredient}>
                {ingredient.quantity} - {ingredient.ingredient}
              </li>
            ))}
        </ul>
      </div>
      <div className="recipe_group">
        <h3>Preparation</h3>
        <p>{data.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeSingle;
