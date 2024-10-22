import { createContext, useState } from "react"

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchRecepie, setSearchRecepie] = useState("");
  const [query, setQuery] = useState(''); 
 

  return (
    <SearchContext.Provider value={{ searchRecepie, setSearchRecepie, query, setQuery }}>
    {children}
  </SearchContext.Provider>
  );
};
