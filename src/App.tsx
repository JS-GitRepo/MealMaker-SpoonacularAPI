import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import ItemStack from "./components/ItemStack";
import SearchBar from "./components/SearchBar";
import SearchContainer from "./components/SearchContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <SearchContainer />
      <SearchBar />
      <ItemStack />
    </div>
  );
}

export default App;
