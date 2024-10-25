import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/FilteredRecipes.css"; 

export const FilteredRecipes = () => {
  const location = useLocation();
  const { filteredRecipes } = location.state || { filteredRecipes: [] };

  return (
    <div className="filtered-recipes">
      <h1>Gefilterte Rezepte</h1>
      {filteredRecipes.length > 0 ? (
        <div className="recipe-grid">
          {filteredRecipes.map((recipe, index) => (
            <div className="recipe-card" key={index}>
              <h2>{recipe.recipe.label}</h2>
              <img src={recipe.recipe.image} alt={recipe.recipe.label} />
              <p>Kalorien: {Math.round(recipe.recipe.calories)}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Keine Rezepte gefunden.</p>
      )}
    </div>
  );
};
