import WeeklyCard from "../WeeklyCard/WeeklyCard";
import "./WeeklyPlan.css";
const WeeklyPlan = ({ savedRecipes, setSavedRecipes }) => {
  const displayCard = () => {
    const showRecipes = savedRecipes.map((recipe, index) => {
      return (
        //use empty <></> to wrap a return, react will not create extra html tag
        <WeeklyCard
          key={index}
          id={recipe.id}
          title={recipe.title}
          imageURL={recipe.image}
          instruction={recipe.instructions}
          savedRecipes={savedRecipes}
          setSavedRecipes={setSavedRecipes}
        />
      );
    });
    return showRecipes;
  };
  return (
    <div className="weekly-display">
      <h2>Weekly Meal Plan</h2>
      {savedRecipes.length === 0 && (
        <p>Please add recipes to weekly meal list</p>
      )}
      <div className="display-saved">{displayCard()}</div>
    </div>
  );
};
export default WeeklyPlan;
