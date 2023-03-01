import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  const [url, setUrl] = useState("");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  // const URL = "https://random.dog/woof.json";
  const getRandomDog = async () => {
    const response = await fetch(
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=4",
      options
    );
    const body = await response.json();

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
      </div>
    </div>
  );
};

export default App;
