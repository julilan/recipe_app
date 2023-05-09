import React from "react";
import { Link } from "react-router-dom";
import classes from "./Card.module.css";
import { findFlagUrlByCountryName } from "country-flags-svg";

const Card = ({ name, image, origin }) => {
  return (
    <div className={classes.card}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <Link to={name}>See more</Link>
      <figure>
        <img src={findFlagUrlByCountryName(origin)} alt={origin} />
      </figure>
    </div>
  );
};

export default Card;
