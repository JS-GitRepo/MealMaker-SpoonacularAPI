import "./ItemGallery.css";
import plate from "../images/plate-side-profile.png";
import SearchItem from "../models/SearchItem";
import { useContext, useEffect, useState } from "react";
import ItemsContext from "../context/ItemsContext";
import ItemCard from "./ItemCard";
import { Link, useNavigate } from "react-router-dom";
import { getUserSearch } from "../services/RecipeService";

const ItemGallery = () => {
  const {allItems} = useContext(ItemsContext);
  const navigate = useNavigate();

  const includeObjects = allItems.filter((item)=> item.where === "include");
  const includeStrings = includeObjects.map((item)=> item.what);
  let includeQuery = (includeStrings.length>0)? `&includeIngredients=${includeStrings.join()}`:"";

  const excludeObjects = allItems.filter((item)=> item.where === "exclude");
  const excludeStrings = excludeObjects.map((item)=> item.what);
  let excludeQuery = (excludeStrings.length>0)? `&excludeIngredients=${excludeStrings.join()}`:"";

  const equipmentObjects = allItems.filter((item)=> item.where === "equipment");
  const equipmentStrings = equipmentObjects.map((item)=> item.what);
  let equipmentQuery = (equipmentStrings.length>0)? `&equipment=${equipmentStrings.join()}`:"";

  const customObjects = allItems.filter((item)=> item.where === "custom");
  const customStrings = customObjects.map((item)=> item.what);
  let customQuery = (customStrings.length>0)? `&query=${customStrings.join()}`:"";

  let searchQuery = `${includeQuery}${excludeQuery}${equipmentQuery}${customQuery}`;
  // console.log(searchQuery.toString());
  // console.log(excludeQuery);
  
  
  const submitHandler = () => {
    navigate(`/recipes/complexSearch?${searchQuery}`)
  }

  return <div className="ItemGallery">
    <div className="added-items-container">
      <ul>
        {/* {allItems.map((item)=> item.what)} */}
        {allItems.map((item)=> <ItemCard key={item.id} singleItem={item}/> )}
      </ul>
    </div>
    <div className="submit-plate" onClick={submitHandler}>
      <img src={plate} alt="Show Recipes Button"/>
      <p>Find Meals</p>
    </div>
    </div>;
};

export default ItemGallery;