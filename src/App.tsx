import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";
import DetailedRecipeCard from "./components/DetailedRecipeCard";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import ItemStack from "./components/ItemStack";
import SearchBar from "./components/SearchBar";
import SearchContainer from "./components/SearchContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/recipes/complexSearch" element={<Gallery />} />
          <Route
            path="/recipes/:id/information"
            element={<DetailedRecipeCard />}
          />
          {/* <Route path="/gifs/favorites" element={<Favorites />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>

      {/* <Header />
      <Gallery />
      <SearchContainer />
      <SearchBar />
      <ItemStack /> */}
    </div>
  );
}

export default App;
