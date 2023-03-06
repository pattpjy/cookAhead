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
  const foundRecipe = randomRecipes.find((recipe) => recipe.id === id);
  const checkDup = savedRecipes.find((recipe) => foundRecipe.id === recipe.id);
  //function to add  saved recipes to state
  const addToWeeklyPlanner = () => {
    // (recipe) => recipe.id !== foundRecipe.id
    if (!checkDup) {
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
      <div className="card-header">
        <p className="card-title">
          <b>{cardTitle}</b>
        </p>
        <i
          className={
            checkDup
              ? "fa-sharp fa-solid fa-bookmark fa-xl"
              : "fa-sharp fa-regular fa-bookmark fa-xl"
          }
        ></i>
      </div>
      <img className="card-img" src={cardImg} alt=""></img>

      <button className="add-btn" onClick={onClickHandler}>
        Add to planner
      </button>
    </div>
  );
};
export default Card;
