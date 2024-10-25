import { createContext, useState } from "react"

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchRecepie, setSearchRecepie] = useState("");
  const [query, setQuery] = useState(''); 
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <SearchContext.Provider value={{ searchRecepie, setSearchRecepie, query, setQuery,  selectedRecipe,setSelectedRecipe}}>
    {children}
  </SearchContext.Provider>
  );
};
