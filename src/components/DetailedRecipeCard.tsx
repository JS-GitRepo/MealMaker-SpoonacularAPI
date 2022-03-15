import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recipe from "../models/Recipe";
import SingleRecipeResponse from "../models/SingleRecipeResponse";
import { getDetailedRecipe } from "../services/RecipeService";

import "./DetailedRecipeCard.css";
import RecipeCard from "./RecipeCard";

const DetailedRecipeCard = () => {
  const [card, setCard] = useState<SingleRecipeResponse>();

  const id: string | undefined = useParams().id;

  useEffect(() => {
    getDetailedRecipe(id!).then((response) => {
      setCard(response);
    });
  }, [id]);

  return (
    <div className="DetailRecipeCard">
      <div className="Details">
        {card ? 
        <p> {card.title}</p>
       <img src={card.image} alt={card.title} />
        : <p>loading</p>}
      </div>
    </div>
  );
};

export default DetailedRecipeCard;
