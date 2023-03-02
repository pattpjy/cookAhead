import React from "react";
import "./Card.css";
const Card = ({
  cardTitle,
  cardImg,
  randomRecipes,
  savedRecipes,
  setSavedRecipes,
  id,
}) => {
  //function to add  saved recipes to state
  const addToWeeklyPlanner = (recID) => {
    const foundRecipe = randomRecipes.find((recipe) => recipe.id === recID);
    if (foundRecipe) {
      console.log("Adding to weekly");
      setSavedRecipes((prevState) => [...prevState, foundRecipe]);
    } else {
      return console.log("Nope");
    }
  };
  const onClickHandler = () => {
    addToWeeklyPlanner(id);
  };
  return (
    <div className="card">
      <h3>{cardTitle}</h3>
      <img src={cardImg} alt=""></img>
      <button onClick={onClickHandler}>Add to planner</button>
    </div>
  );
};
export default Card;
