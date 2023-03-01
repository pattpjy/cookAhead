import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [url, setUrl] = useState("");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3174349b86msh3f56cf93786160ep1bcf87jsn6808a68eebaf",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  // const URL = "https://random.dog/woof.json";
  const getRandomDog = async () => {
    const response = await fetch(
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=5",
      options
    );
    const body = await response.json();
    console.log(body.recipes[0].title);

    return setUrl(body.recipes[0].title);
  };
  const onClickHandler = () => {
    getRandomDog();
    // console.log(getUrl);
    // setUrl(getUrl);
  };
  return (
    <div className="App">
      <div className="main-board">
        <button onClick={onClickHandler}> Click me </button>
        {url}
      </div>
    </div>
  );
};

export default App;
