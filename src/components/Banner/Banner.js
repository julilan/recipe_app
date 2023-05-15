import React from "react";
import classes from "./Banner.module.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <h4>Realm of Recipes</h4>
      <p>
        Recipe app which is a final task for React basics course for REACT23K
        group
      </p>
      <Link to="/recipes">Browse recipes</Link>
    </div>
  );
};

export default Banner;
