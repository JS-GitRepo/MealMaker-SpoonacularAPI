import "./ItemGallery.css";
import plate from "../images/plate-side-profile.png";
import SearchItem from "../models/SearchItem";
import { useContext, useEffect, useState } from "react";
import ItemsContext from "../context/ItemsContext";
import ItemCard from "./ItemCard";
import { Link, useNavigate } from "react-router-dom";
import { getUserSearch } from "../services/RecipeService";

const ItemGallery = () => {
  const {include, exclude, equipment, custom, allItems} = useContext(ItemsContext);
  const [query,setQuery] = useState("");
  const navigate = useNavigate();
  let includeQuery = (include.length>0)? `&includeIngredients=${include.join()}`:"";
  let excludeQuery = (exclude.length>0)? `&excludeIngredients=${exclude.join()}`:"";
  let equipmentQuery = (equipment.length>0)? `&equipment=${equipment.join()}`:"";
  let customQuery = (custom.length>0)? `&query=${custom.join()}`:"";
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
        {allItems.map((item)=> <ItemCard singleItem={item}/> )}
      </ul>
    </div>
    <img src={plate} alt="Show Recipes Button" onClick={submitHandler}/>
    </div>;
};

export default ItemGallery;