import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ItemsContext from "../context/ItemsContext";
import Recipe from "../models/Recipe";
import { getDefaultRecipes, getUserSearch } from "../services/RecipeService";
import "./Gallery.css";
import ItemGallery from "./ItemGallery";
import RecipeCard from "./RecipeCard";

const Gallery = () => {
  const [recipes, setRecipe] = useState<Recipe[]>([]);
  const [searchParams] = useSearchParams();
  const searchParamString = searchParams.toString();

  useEffect(() => {
    if (searchParamString === "") {
      getDefaultRecipes().then((res) => {
        setRecipe(res.results);
      });
    } else if (searchParamString.length > 0) {
      getUserSearch(searchParamString).then((res) => {
        setRecipe(res.results);
      });
    }
  }, [searchParamString]);

  return (
    <div className="Gallery">
      <ul className="card-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} singleRecipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
