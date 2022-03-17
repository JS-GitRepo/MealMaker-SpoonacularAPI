import { Link } from "react-router-dom";
import Recipe from "../models/Recipe";
import SingleRecipeResponse from "../models/SingleRecipeResponse";
import "./RecipeCard.css";

interface Props {
  singleRecipe: SingleRecipeResponse;
}

const DetailedRecipeCard = ({ singleRecipe }: Props) => {
  const summaryString = singleRecipe.summary;
  const summaryHtmlNodes:any = new DOMParser().parseFromString(summaryString,"text/html").all;
  const summaryHtmlArray:any = Array.from(summaryHtmlNodes);
  const summaryInnerHtml = summaryHtmlArray.map((element:any)=> element.InnerHTML);
  // const htmlNodes:any = summaryHtmlNodes.all;
  // console.dir(summaryHtmlNodes);
  // console.log(summaryHtmlArray);
  // console.log(summaryHtmlArray[0]);
  // console.log(summaryInnerHtml);
  return (
    <div className="DetailedRecipeCard">
      <Link to={`/`}><i className="fa-solid fa-arrow-left"></i></Link>
      <p>{singleRecipe.title}</p>
      <img src={singleRecipe.image} alt={singleRecipe.title} />
      {/* {singleRecipe.summary} */}
      {summaryHtmlNodes[2].textContent};
      <a href={singleRecipe.sourceUrl}>Original Source Recipe</a>
    </div>
  );
};
export default DetailedRecipeCard;
