import "./ItemGallery.css";
import plate from "../images/plate-side-profile.png";
import SearchItem from "../models/SearchItem";
import { useContext, useEffect, useState } from "react";
import ItemsContext from "../context/ItemsContext";
import ItemCard from "./ItemCard";

const ItemGallery = () => {
  const {include, exclude, equipment, custom, allItems} = useContext(ItemsContext);

  return <div className="ItemGallery">
    <div className="added-items-container">
      <ul>
        {/* {allItems.map((item)=> item.what)} */}
        {allItems.map((item)=> <ItemCard singleItem={item}/> )}
      </ul>
    </div>
    <img src={plate} alt="Show Recipes Button" />
    </div>;
};

export default ItemGallery;