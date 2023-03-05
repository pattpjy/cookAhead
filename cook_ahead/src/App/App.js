import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
// import randomRecipesData from "../APICall/dummyData";
import WeeklyPlan from "../WeeklyDisplay/WeeklyPlan";
import ErrorPage from "../ErrorPage/ErrorPage";
import Navbar from "../navbar/Navbar";
import { getFetchRecipes } from "../APICall/APICall";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [savedBTN, setSavedBTN] = useState(false);
  const [hasError, setHasError] = useState("");

  const getRandomRecipes = async () => {
    try {
      // line 20 is for throw error to see styling
      // throw new Error("TRY STYLING");
      const randomData = await getFetchRecipes();

      return setRecipes(randomData);
    } catch (error) {
      setHasError(error.message);
    }
  };
  // const getRandomRecipes = () => {
  //   return setRecipes(randomRecipesData.recipes);
  // };

  return (
    <main className="main-app">
      <Navbar />
      {hasError && (
        <div className="submitErrorMessage">
          <p>
            <strong>{hasError}</strong>
          </p>
        </div>
      )}
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
