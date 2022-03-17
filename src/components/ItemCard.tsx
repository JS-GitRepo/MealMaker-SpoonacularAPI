import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemsContext from "../context/ItemsContext";
import Recipe from "../models/Recipe";
import SearchItem from "../models/SearchItem";
import "./ItemCard.css";

interface Props {
  singleItem: SearchItem;
}

const ItemCard = ({singleItem}: Props) => {
  const { removeItem } = useContext(ItemsContext);
  return (
    <div className={`ItemCard ${singleItem.where}Style`}>
      <p>{singleItem.what}</p>
      <i className="fa-solid fa-xmark" onClick={()=>removeItem(singleItem.id!)}></i>
    </div>
  );
};

export default ItemCard;