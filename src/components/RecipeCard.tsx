import { Link } from "react-router-dom";
import Recipe from "../models/Recipe";
import "./RecipeCard.css";

interface Props {
  singleSearch: Recipe;
}

const RecipeCard = ({ singleSearch }: Props) => {
  return (
    <div className="RecipeCard">
      <p>{singleSearch.title}</p>
      <Link to={`/recipes/${encodeURIComponent(singleSearch.id)}/information`}>
        <img src={singleSearch.image} alt={singleSearch.title} />
      </Link>
      <p>{singleSearch.id}</p>
    </div>
  );
};

export default RecipeCard;
