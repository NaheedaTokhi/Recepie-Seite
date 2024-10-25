{/*
import React, { useState } from "react";
import { SearchProvider } from "./contexts/SearchContext";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Display } from "./components/Display";
import { Nutri } from "./components/Nutrients"; 
import { Carousel } from "./components/Carousel";
import { Footer } from "./components/Footer";
import { Footer2 } from "./components/Footer2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

function App() {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
  };

  return (
    <SearchProvider>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Search onSearch={handleSearch} />} />
            <Route path="/display" element={!isSearching ? 
            <Route path="/nutrition" element={<Nutri />} /> 
            <Route path="*" element={<p>404 Not Found</p>} />
          </Routes>
        </div>
        {!isSearching ? <Footer /> : <Footer2 />}
      </Router>
    </SearchProvider>
  );
}

export default App;
*/}



import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";
function App() {

  return (
    <RouterProvider router={router} />

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