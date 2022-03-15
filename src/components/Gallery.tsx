import { useEffect, useState } from "react";
import Recipe from "../models/Recipe";
import { getDefaultRecipes } from "../services/RecipeService";
import "./Gallery.css";
import RecipeCard from "./RecipeCard";

const Gallery = () => {
  const [recipes, setRecipe] = useState<Recipe[]>([]);

  useEffect(() => {
    getDefaultRecipes().then((res) => {
      setRecipe(res.results);
    });
  }, []);
  return (
    <div className="Gallery">
      <ul>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.title} singleSearch={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
