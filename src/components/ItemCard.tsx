import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemsContext from "../context/ItemsContext";
import Recipe from "../models/Recipe";
import SearchItem from "../models/SearchItem";
import "./RecipeCard.css";

interface Props {
  singleItem: SearchItem;
}

const ItemCard = ({singleItem}: Props) => {
  return (
    <div className={`ItemCard ${singleItem.where}Style`}>
      <p>{singleItem.what}</p>
    </div>
  );
};

export default ItemCard;