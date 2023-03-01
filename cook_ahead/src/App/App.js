import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import randomRecipesData from "../APICall/dummyData";
import WeeklyPlan from "../WeeklyDisplay/WeeklyPlan";
import ErrorPage from "../ErrorPage/ErrorPage";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
  //     "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  //   },
  // };

  // // const URL = "https://random.dog/woof.json";
  // const getRandomRecipes = async () => {
  //   const response = await fetch(
  //     "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=4",
  //     options
  //   );
  //   const body = await response.json();
  //   return setRecipes(body.recipes);
  // };
  const getRandomRecipes = () => {
    return setRecipes(randomRecipesData.recipes);
  };

  return (
    <main>
      <Routes>
        <Route
          className="App"
          path="/"
          element={
            <LandingPage
              getRandomRecipes={getRandomRecipes}
              randomRecipes={recipes}
              savedRecipes={savedRecipes}
              setSavedRecipes={setSavedRecipes}
            />
          }
        />
        <Route
          path="/weekly-plan"
          element={<WeeklyPlan savedRecipes={savedRecipes} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
};

export default App;
