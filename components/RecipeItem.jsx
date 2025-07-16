import React from "react";

function RecipeItem({ recipe }) {
  return (
    <li className="recipe-item">
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt={recipe.title} width="150" />
      <p>Ready in {recipe.readyInMinutes} minutes</p>
      <p>Cuisines: {recipe.cuisines.join(", ") || "N/A"}</p>
    </li>
  );
}

export default RecipeItem;
