import { Link } from "react-router-dom";
import Recipe from "../models/Recipe";
import SingleRecipeResponse from "../models/SingleRecipeResponse";
import "./RecipeCard.css";

interface Props {
  singleSearch: SingleRecipeResponse;
}

const DetailedRecipeCard = ({ singleSearch }: Props) => {
  const summaryString = singleSearch.summary;
  const summaryHtmlNodes:any = new DOMParser().parseFromString(summaryString,"text/html").all;
  const summaryHtmlArray:any = Array.from(summaryHtmlNodes);
  const summaryInnerHtml = summaryHtmlArray.map((element:any)=> element.InnerHTML);
  // const htmlNodes:any = summaryHtmlNodes.all;
  // console.dir(summaryHtmlNodes);
  console.log(summaryHtmlArray);
  console.log(summaryHtmlArray[0]);
  console.log(summaryInnerHtml);
  return (
    <div className="DetailedRecipeCard">
      <p>{singleSearch.title}</p>
      <img src={singleSearch.image} alt={singleSearch.title} />
      {/* {singleSearch.summary} */}
      {summaryHtmlNodes[2].textContent};
    </div>
  );
};
export default DetailedRecipeCard;
