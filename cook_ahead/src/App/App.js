import React, { useState } from "react";
import Card from "../Card/Card";

const App = () => {
  const [recipes, setRecipes] = useState("");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3174349b86msh3f56cf93786160ep1bcf87jsn6808a68eebaf",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  // const URL = "https://random.dog/woof.json";
  const getRandomRecipes = async () => {
    const response = await fetch(
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=4",
      options
    );
    const body = await response.json();
    console.log(body.recipes);
    return setRecipes(body.recipes);
  };
  const onClickHandler = () => {
    getRandomRecipes();
    // console.log(getUrl);
    // setUrl(getUrl);
  };

  const displayCard = () => {
    const showRecipes = recipes.map((recipe) => {
      return (
        <Card
          cardTitle={recipe.title}
          cardImg={recipe.image}
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
        <button onClick={onClickHandler}> Click me </button>
      </div>
      {displayCard()}
    </div>
  );
};

export default App;
