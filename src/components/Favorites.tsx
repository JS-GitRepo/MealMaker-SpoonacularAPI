import { useContext, useEffect } from "react";
import ItemsContext from "../context/ItemsContext";
import "./Favorites.css";
import RecipeCard from "./RecipeCard";

const Favorites = () => {
  
  const {favorites} = useContext(ItemsContext)
  
  return (
    <div className="Favorites">
      <h2>Favorites</h2>
      <ul className="favorites-card-list" >
        {favorites.map((recipe) => (
          <RecipeCard key={recipe.id} singleRecipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
