import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
// import randomRecipesData from "../APICall/dummyData";
import WeeklyPlan from "../WeeklyDisplay/WeeklyPlan";
import ErrorPage from "../ErrorPage/ErrorPage";
import Navbar from "../navbar/Navbar";
import { getFetchRecipes } from "../APICall/APICall";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [savedBTN, setSavedBTN] = useState(false);

  const getRandomRecipes = async () => {
    const randomData = await getFetchRecipes();
    return setRecipes(randomData);
  };

  // const getRandomRecipes = () => {
  //   return setRecipes(randomRecipesData.recipes);
  // };

  return (
    <main className="main-app">
      <Navbar />
      <Routes>
        <Route
          className="App"
          path="/"
          element={
            <LandingPage
              getRandomRecipes={getRandomRecipes}
              randomRecipes={recipes}
              setRecipes={setRecipes}
              savedRecipes={savedRecipes}
              setSavedRecipes={setSavedRecipes}
              savedBTN={savedBTN}
              setSavedBTN={setSavedBTN}
            />
          }
        />
        <Route
          path="/weekly-plan"
          element={
            <WeeklyPlan
              savedRecipes={savedRecipes}
              setSavedRecipes={setSavedRecipes}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
};

export default App;
