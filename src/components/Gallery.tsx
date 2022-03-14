import { useEffect, useState } from "react";
import ComplexSearch from "../models/ComplexSearch";
import Recipe from "../models/Recipe";
import { getDefaultRecipes } from "../services/RecipeService";
import "./Gallery.css";
import RecipeCard from "./RecipeCard";

const Gallery = () => {
  const [recipes, setRecipe] = useState<ComplexSearch[]>([]);

  useEffect(() => {
    getDefaultRecipes().then((res) => {
      setRecipe(res.results);
    });
  });
  return (
    <div className="Gallery">
      <ul>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.title} />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
