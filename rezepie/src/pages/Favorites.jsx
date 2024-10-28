import React, { useEffect, useState } from "react";
import "../styles/Favorites.css"; 
import { Footer2 } from "../components/Footer2";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (uri) => {
    const updatedFavorites = favorites.filter(recipe => recipe.uri !== uri);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); 
};
  return (
    <>
    <div className="favorites-container">
      <h1 className="favorite-title">Your Favorite Recipes</h1>
      {favorites.length > 0 ? (
        <div className="favorites-list"> 
          {favorites.map((recipe) => (
            <div className="favorite-item" key={recipe.uri}>
              <h2>{recipe.label}</h2>
              <img src={recipe.image} alt={recipe.label} />
              <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                View Full Recipe
              </a>
              <button className="remove-favorite" onClick={() => removeFavorite(recipe.uri)}>&times; 
                </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-recepie">No favorites yet! Go add some.</p>
      )}
    </div>
    <Footer2/>
    </>
  );
};
