import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";
import DetailedRecipeCard from "./components/DetailedRecipeCard";
import DisplayDetails from "./components/DisplayDetails";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import ItemStack from "./components/ItemGallery";
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
            element={<DisplayDetails />}
          />
          {/* <Route path="/gifs/favorites" element={<Favorites />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      <SearchContainer />
      <ItemStack />
    </div>
  );
}

export default App;
