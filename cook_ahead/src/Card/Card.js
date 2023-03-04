import React from "react";
import "./Card.css";
const Card = ({
  cardTitle,
  cardImg,
  randomRecipes,
  setRecipes,
  savedRecipes,
  savedBTN,
  setSavedRecipes,
  setSavedBTN,
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
    //   setSavedBTN(false);
    // } else {
    //   setSavedBTN(true);
    // }
  };
  return (
    <div className="card">
      <h3>{cardTitle}</h3>
      <img src={cardImg} alt=""></img>
      <i
        className={
          checkDup
            ? "fa-sharp fa-solid fa-bookmark"
            : "fa-sharp fa-regular fa-bookmark"
        }
      ></i>
      <button onClick={onClickHandler}>Add to planner</button>
    </div>
  );
};
export default Card;

// const checkSavedRecipes = () => {
//   // if id match id in saved array : prompt  you save it msg, if not add to the saved array
// };

// // const removeFromSavedActivities = (grabbedId) =>{
// //   const unbookMarked = savedActivities.filter(activity => activity.id !== grabbedId);
// //   setSavedActivities(unbookMarked);
// //   }

// const onClickHandler = (id) => {
//   addToWeeklyPlanner(id);

//   // if (savedBTN === true) {
//   //   setSavedBTN(false);
//   // } else {
//   //   setSavedBTN(true);
//   // }
// };
