import "./ItemGallery.css";
import plate from "../images/plate-side-profile.png";
import SearchItem from "../models/SearchItem";
import { useEffect, useState } from "react";

const ItemGallery = () => {
  const [items, setItem] = useState<SearchItem[]>([]);

  const submitHandler = () => {
    
  }

  return <div className="ItemGallery">
    <div className="added-items-container">
      
    </div>
    <img src={plate} alt="Show Recipes Button" onClick={()=> submitHandler()} />
    </div>;
};

export default ItemGallery;