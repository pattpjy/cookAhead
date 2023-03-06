import React from "react";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
const LandingPage = ({
  getRandomRecipes,
  randomRecipes,
  setRecipes,
  savedRecipes,
  setSavedRecipes,
  hasError,
  savedBTN,
  setSavedBTN,
}) => {
  let navigate = useNavigate();
  const onClickHandler = () => {
    getRandomRecipes();
    // console.log(getUrl);
    // setUrl(getUrl);
  };

  const displayCard = () => {
    const showRecipes = randomRecipes.map((recipe) => {
      return (
        <Card
          cardTitle={recipe.title}
          cardImg={recipe.image}
          randomRecipes={randomRecipes}
          savedRecipes={savedRecipes}
          setSavedRecipes={setSavedRecipes}
          id={recipe.id}
          key={recipe.id}
        />
      );
    });
    return showRecipes;
  };
  return (
    <div className="App">
      <div className="main-board">
        <div className="button-section">
          <button className="get-ideas" onClick={onClickHandler}>
            {" "}
            Get Meal Ideas{" "}
          </button>
          <button
            className="view-weekly"
            onClick={() => navigate("/weekly-plan")}
          >
            See My Weekly Meals
          </button>
        </div>

        <div className="display-random">{displayCard()}</div>
      </div>
    </div>
  );
};

export default LandingPage;
