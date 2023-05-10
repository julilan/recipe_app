import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../UI/Card";
import Loader from "../UI/Loader";
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
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
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
      <input
        type="text"
        id="search"
        placeholder="Search for recipes"
        onChange={searchInputHandler}
      />
      <h2>Our tasty recipes</h2>
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
