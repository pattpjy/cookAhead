import React from "react";
import "./WeeklyCard.css";

const WeeklyCard = ({
  id,
  title,
  imageURL,
  instruction,
  savedRecipes,
  setSavedRecipes,
}) => {
  const onDeleteIdea = (id) => {
    const deleted = savedRecipes.filter((recipe) => recipe.id !== id);
    console.log("im deleting!!", deleted);

    return setSavedRecipes(deleted);
  };

  return (
    <div>
      <p>{title}</p>
      <img src={imageURL} alt="title"></img>
      <p>{instruction}</p>
      <button
        className="fa-light fa-xmark"
        onClick={() => onDeleteIdea(id)}
      ></button>
    </div>
  );
};

export default WeeklyCard;
