import { FormEvent, useContext, useState } from "react";
import ItemsContext from "../context/ItemsContext";
import ItemsContextProvider from "../context/ItemsContextProvider";
import SearchItem from "../models/SearchItem";
import "./SearchContainer.css";

const SearchContainer = () => {

  const {addItem} = useContext(ItemsContext);

  const inputHandler = (e: any): void => {
    const targetID = e.target.id;
    if (e.key === "Enter") {
      if (targetID === "include") {
        addItem(e.target.value, "include")
        console.log("Pressed Enter on Include!")
      } else if (targetID === "exclude") {
        addItem(e.target.value, "exclude")
        console.log("Pressed Enter on Exclude!")
      } else if (targetID === "equipment") {
        addItem(e.target.value, "equipment")
        console.log("Pressed Enter on Equipment!")
      } else if (targetID === "custom") {
        addItem(e.target.value, "custom")
        console.log("Pressed Enter on custom!")
      }; 
      e.target.value = "";
    }
  }

  return <div className="search-container">
    <div className="search-labels">
        <ul>
          <li>
            <label htmlFor="include">Include</label>
          </li>
          <li>
            <label htmlFor="exclude">Exclude</label>
          </li>
          <li>
            <label htmlFor="equipment">Equipment</label>
          </li>
        </ul>
      </div>

    <div className="search-inputs">
    <ul>
        <li>
            <input type="text" name="include" id="include" placeholder="enter..." onKeyPress={inputHandler}/>
        </li>
        <li>
          <input type="text" name="exclude" id="exclude" placeholder="enter..." onKeyPress={inputHandler}/>
        </li>
        <li>
          <input type="text" name="equipment" id="equipment" placeholder="enter..." onKeyPress={inputHandler}/>
        </li>
      </ul>
    </div>

    <div className="search-custom">
      <ul>
        <li>
          <input type="text" name="custom" id="custom" onKeyPress={inputHandler} placeholder="add custom search term..."/>
        </li>
      </ul>
    </div>
  </div>;
};

export default SearchContainer;
