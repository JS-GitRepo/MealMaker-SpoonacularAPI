import { Link } from "react-router-dom";
import Recipe from "../models/Recipe";
import SearchItem from "../models/SearchItem";
import "./RecipeCard.css";

interface Props {
  addedItem: SearchItem;
}

const ItemCard = ({ addedItem }: Props) => {
  return (
    <div className="ItemCard">
      <p>{addedItem.title}</p>
    </div>
  );
};

export default ItemCard;