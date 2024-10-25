import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import "../styles/RecipeDetail.css";
import { Footer2 } from "../components/Footer2";

export const RecipeDetail = () => {
  const { selectedRecipe } = useContext(SearchContext);

  if (!selectedRecipe) {
    return <p>No recipe data available. Please go back and select a recipe.</p>;
  }

  return (
    <>
      <div className="recipe-detail">
        <h1>{selectedRecipe.label}</h1>
        <img src={selectedRecipe.image} alt={selectedRecipe.label} />

        <p className="par"><strong>Calories:</strong> {Math.round(selectedRecipe.calories)}</p>

        {selectedRecipe.totalTime > 0 && (
          <p className="par"><strong>Cooking Time:</strong> {selectedRecipe.totalTime} min</p>
        )}

        {selectedRecipe.dishType && (
          <p className="par"><strong>Dish Type:</strong> {selectedRecipe.dishType.join(", ")}</p>
        )}

        {selectedRecipe.mealType && (
          <p className="par"><strong>Meal Type:</strong> {selectedRecipe.mealType.join(", ")}</p>
        )}


        {selectedRecipe.cuisineType && selectedRecipe.cuisineType.length > 0 && (
          <p className="par"><strong>Cuisine Type:</strong> {selectedRecipe.cuisineType.join(", ")}</p>
        )}

        {selectedRecipe.dietLabels && selectedRecipe.dietLabels.length > 0 && (
          <p className="par"><strong>Diet Labels:</strong> {selectedRecipe.dietLabels.join(", ")}</p>
        )}
        {selectedRecipe.healthLabels && selectedRecipe.healthLabels.length > 0 && (
          <p className="par"><strong>Health Labels:</strong> {selectedRecipe.healthLabels.join(", ")}</p>
        )}

        {selectedRecipe.portions && (
          <p className="par"><strong>Servings:</strong> {selectedRecipe.portions}</p>
        )}


        {selectedRecipe.allergens && selectedRecipe.allergens.length > 0 && (
          <p className="par"><strong>Allergens:</strong> {selectedRecipe.allergens.join(", ")}</p>
        )}

        <h2>Ingredients:</h2>
        <ul>
          {selectedRecipe.ingredientLines.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Preparation Tips:</h2>
        <p className="final-text">When preparing this dish, consider using fresh ingredients for the best flavor. Marinating the proteins beforehand can enhance the taste significantly.</p>

        <a href={selectedRecipe.url} target="_blank" rel="noopener noreferrer" className="cooking-seite">View preparation steps</a>
      </div>
      <Footer2 />
    </>
  );
};
