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
  const [title, setTitle] = useState<String>();
  const [searchParams] = useSearchParams();
  const searchParamString = searchParams.toString();

  useEffect(() => {
    if (searchParamString === "") {
      getDefaultRecipes().then((res) => {
        setRecipe(res.results);
        setTitle("Trending Meals");
      });
    } else if (searchParamString.length > 0) {
      getUserSearch(searchParamString).then((res) => {
        setRecipe(res.results);
        setTitle("Search Results")
      });
    }
  }, [searchParamString]);

  return (
    <div className="Gallery">
      <h2>{title}</h2>
      <ul className="card-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} singleRecipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
