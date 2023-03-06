import React from "react";
import "./WeeklyCard.css";
import parse from "html-react-parser";

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
        <h3>{title}</h3>
        <p>{parse(instruction)}</p>
      </section>
      <img src={imageURL} alt="title"></img>
      <button className="close-button" onClick={() => onDeleteIdea(id)}>
        <i className="fa-regular fa-rectangle-xmark fa-2xl"></i>
      </button>
    </div>
  );
};

export default WeeklyCard;
