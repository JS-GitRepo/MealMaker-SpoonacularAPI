import ComplexSearch from "../models/Recipe";
import "./RecipeCard.css";

interface Props {
  singleSearch: ComplexSearch
};

const RecipeCard = ({singleSearch}: Props) => {
  return <div className="RecipeCard">
    <p>{singleSearch.title}</p>
  </div>;
};

export default RecipeCard;
