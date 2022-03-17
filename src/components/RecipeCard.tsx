import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemsContext from "../context/ItemsContext";
import Recipe from "../models/Recipe";
import "./RecipeCard.css";

interface Props {
  singleRecipe: Recipe;
}

const RecipeCard = ({ singleRecipe }: Props) => {
  const { addFavorite, removeFavorite, isFav} = useContext(ItemsContext);

  return (
    <div className="RecipeCard">
      <p>{singleRecipe.title}</p>
      <Link to={`/recipes/${encodeURIComponent(singleRecipe.id)}/information`}>
        <img src={singleRecipe.image} alt={singleRecipe.title} />
      </Link>
      {isFav(singleRecipe.id)
      ? <i className="fa-solid fa-heart" onClick={()=>removeFavorite(singleRecipe.id)}></i>
      : <i className="fa-regular fa-heart" onClick={()=>addFavorite(singleRecipe)}></i>}
    </div>
  );
};

export default RecipeCard;
