import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { Header } from "./Header";
import { Search } from "./Search";
import { SearchProvider } from "../contexts/SearchContext";

export const Change = () => {
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation(); 

  const handleSearch = () => {
    setIsSearching(true);
  };
  const isSpecialPage =
    location.pathname === "/nutrients" || location.pathname === "/recipe-detail" || location.pathname === "/favorites" || location.pathname === "/tips";

  return (
    <SearchProvider>
      <Header />
      <div className="App">
        {!isSpecialPage && <Search onSearch={handleSearch} />}
        <Outlet />
      </div>
    </SearchProvider>
  );
};
