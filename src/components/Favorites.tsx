import { useContext, useEffect } from "react";
import ItemsContext from "../context/ItemsContext";
import "./Favorites.css";
import RecipeCard from "./RecipeCard";

const Favorites = () => {
  
  const {favorites} = useContext(ItemsContext)
  
  return (
    <div className="Gallery">
      <ul>
        {favorites.map((recipe) => (
          <RecipeCard key={recipe.id} singleRecipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
