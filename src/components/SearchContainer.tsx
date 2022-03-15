import { FormEvent, useContext, useState } from "react";
import ItemsContext from "../context/ItemsContext";
import SearchItem from "../models/SearchItem";
import "./SearchContainer.css";

const SearchContainer = () => {

  const {addItem} = useContext(ItemsContext);

  const inputHandler = (e: any): void => {
    const targetID = e.target.id;
    if (e.key === "Enter") {
      if (targetID === "include") {
        console.log("Pressed Enter on Include!")
      } else if (targetID === "exclude") {
        console.log("Pressed Enter on Exclude!")
      } else if (targetID === "equipment") {
        console.log("Pressed Enter on Equipment!")
      } else if (targetID === "customSearch") {
        console.log("Pressed Enter on customSearch!")
      }; 
    }
  }

  return <div className="search-container">
    SearchContainer works
    <form className="search-form">

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
            {/* <form> */}
              <input type="text" name="include" id="include" placeholder="search..." onKeyPress={inputHandler}/>
            {/* </form> */}
          </li>
          <li>
            <input type="text" name="exclude" id="exclude" placeholder="search..." onKeyPress={inputHandler}/>
          </li>
          <li>
            <input type="text" name="equipment" id="equipment" placeholder="search..." onKeyPress={inputHandler}/>
          </li>
        </ul>
      </div>

      <div className="search-custom">
      </div>
        <input type="text" name="customSearch" id="customSearch" onKeyPress={inputHandler}/>
      </form>
  </div>;
};

export default SearchContainer;
