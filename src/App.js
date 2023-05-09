import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./components/Home/Home";
import RecipeList from "./components/RecipeList/RecipeList";
import RecipeSingle from "./components/RecipeSingle";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<RecipeList />} />
          <Route path="add-new" element={<Form />} />
          <Route path="recipes/:recipesingle" element={<RecipeSingle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
