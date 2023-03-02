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
    return setSavedRecipes(deleted);
  };

  return (
    <div className="weekly-card">
      <section>
        <p>{title}</p>
        <p>{instruction}</p>
      </section>
      <img src={imageURL} alt="title"></img>

      <button
        className="fa-light fa-xmark"
        onClick={() => onDeleteIdea(id)}
      ></button>
    </div>
  );
};

export default WeeklyCard;
