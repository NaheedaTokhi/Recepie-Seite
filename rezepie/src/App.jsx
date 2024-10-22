import React, { useState } from "react";
import { SearchProvider } from "./contexts/SearchContext";
import "./App.css";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Display } from "./components/Display";
import { Carousel } from "./components/Carousel";
function App() {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true); 
  };

  return (
    <SearchProvider>
           <Header />
      <div className="App">
        <Search onSearch={handleSearch} />
        {!isSearching ? <Carousel /> : <Display />}
      </div>
    </SearchProvider>
  );
}

export default App;
{/*
import "./App.css";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Carousel } from "./components/Carousel";
import { Display } from "./components/Display";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <SearchProvider>
      <Header />
      <Search/>
      <Carousel/>
      <Display />
    </SearchProvider>
  );
}

export default App;
*/}