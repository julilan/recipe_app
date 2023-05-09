import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/recipes">Recipes</NavLink>
        </li>
        <li>
          <NavLink to="/add-new">Add new recipe</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
