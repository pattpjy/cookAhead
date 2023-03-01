import WeeklyCard from "../WeeklyCard/WeeklyCard";
const WeeklyPlan = ({ savedRecipes }) => {
  const displayCard = () => {
    const showRecipes = savedRecipes.map((recipe, index) => {
      return (
        <div key={index}>
          <p>{recipe.title}</p>;
        </div>
      );
    });
    return showRecipes;
  };
  return (
    <div>
      <h2>Weekly Meal Plan</h2>
      <div className="display-saved">{displayCard()}</div>
    </div>
  );
};
export default WeeklyPlan;
