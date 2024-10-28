import "../styles/Search.css";
import { useContext, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { useNavigate,useLocation } from "react-router-dom";

export const Search = ({ onSearch }) => {
  const { setSearchRecepie, query, setQuery } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState(query);
  const navigate = useNavigate();
  const location = useLocation();

  const APP_ID = '712a3480';
  const APP_KEY = '05bed75edd068724d2a9de3432c14e8b';

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${inputValue}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const fetchRecipes = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setSearchRecepie(data.hits);
      onSearch();
    } catch (error) {
      console.error('Fehler beim Abrufen der Daten:', error);
    }
  };

  const handleClick = async () => {
    setQuery(inputValue);
    await fetchRecipes();
    setInputValue('');
    navigate("display");
  };

  return (
    <>
      <div className="container">
        {location.pathname === '/' && (
        <div className="welcome-message">
          <h1>Welcome to Recipe Master!</h1>
          <p>
            Discover, Save, and Enjoy Delicious Recipes! At Recipe Master, we believe that cooking should be a delightful and rewarding experience. Our application allows you to explore a vast array of recipes tailored to your taste and dietary needs.
          </p>
        </div>
      )}
      <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a recipe keyword"
      />
      <button onClick={handleClick}>Search</button>
      </div>
      </div>
      </>
  );
};
