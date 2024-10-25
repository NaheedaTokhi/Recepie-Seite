import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { Header } from "./Header";
import { Search } from "./Search";
import { SearchProvider } from "../contexts/SearchContext";

export const Change = () => {
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();  // Aktuelle Route abrufen

  const handleSearch = () => {
    setIsSearching(true);
  };

  // Prüfen, ob die aktuelle Route die "Nutrients" oder "RecipeDetails" Seite ist
  const isSpecialPage =
    location.pathname === "/nutrients" || location.pathname === "/recipe-detail";

  return (
    <SearchProvider>
      <Header />
      <div className="App">
        {/* `Search` wird nicht auf den "Nutrients" oder "RecipeDetails" Seiten angezeigt */}
        {!isSpecialPage && <Search onSearch={handleSearch} />}
        <Outlet />
      </div>
    </SearchProvider>
  );
};
