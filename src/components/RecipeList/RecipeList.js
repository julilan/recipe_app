import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../UI/Card/Card";
import Loader from "../UI/Loader/Loader";
import "./RecipeList.css";

const RecipeList = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchFilter, setSearcFilter] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:4001/recipes").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const filteredData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.origin.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearcFilter(filteredData);
  }, [searchInput, data]);

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h2 className="recipe_list">Search for recipes</h2>
      <input
        type="text"
        id="search"
        placeholder="Search by name or country"
        onChange={searchInputHandler}
      />
      <h2 className="recipe_list">Our tasty recipes</h2>
      <div className="cards">
        {searchFilter.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            image={card.image}
            origin={card.origin}
          />
        ))}
      </div>
    </>
  );
};

export default RecipeList;
