import "../styles/Search.css";
import {useContext,useState} from "react";
import { SearchContext } from "../contexts/SearchContext";

export const Search = ({ onSearch}) => {
  const { setSearchRecepie, query, setQuery } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState(query); 

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
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Zutat eingeben"
      />
      <button onClick={handleClick}>Suchen</button>
    </div>
  );
};

