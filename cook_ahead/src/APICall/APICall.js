const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const getFetchRecipes = async () => {
  const response = await fetch(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=4",
    options
  );
  if (!response.ok) {
    throw new Error("Unable To Fetch Your Data. Try Later.");
  }
  const body = await response.json();
  return body.recipes;
};
