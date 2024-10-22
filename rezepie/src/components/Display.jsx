import "../styles/Display.css"
import {SearchContext} from "../contexts/SearchContext"
import { useContext } from "react";
export const Display = () => {
    const { searchRecepie, query } = useContext(SearchContext);
    const recepieTitle =  query.slice(0, 1).toUpperCase() + query.slice(1)

    return (
      <div className="suchContainer">
        <h1 className="recepie-title">
        recipes found for: {recepieTitle}</h1>
        <div className="recipe-grid">
          {searchRecepie.length > 0 ? (
            searchRecepie.map((recipe, index) => (
              <div className="recipe-card" key={index}>
                <h2>{recipe.recipe.label}</h2>
                <p>Kalorien: {Math.round(recipe.recipe.calories)}</p>
                <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
                Show preparation
                </a>
              </div>
            ))
          ) : (
            <p className="no-recepie">No recipes found.</p>
          )}
        </div>
      </div>
    );
  };