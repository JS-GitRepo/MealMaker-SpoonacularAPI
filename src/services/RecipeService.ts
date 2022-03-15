import axios from "axios";
import ComplexSearchResponse from "../models/ComplexSearchResponse";
import SingleRecipeResponse from "../models/SingleRecipeResponse";

const key: string = process.env.REACT_APP_SPOONACULAR_KEY || "";

export const getDefaultRecipes = (): Promise<ComplexSearchResponse> => {
  return axios
    .get("https://api.spoonacular.com/recipes/complexSearch", {
      params: { apiKey: key },
    })
    .then((res) => {
      return res.data;
    });
};
console.log(key);

export const getDetailedRecipe = (
  id: string
): Promise<SingleRecipeResponse> => {
  return axios
    .get(
      `https://api.spoonacular.com/recipes/${encodeURIComponent(
        id
      )}/information`,
      {
        params: { apiKey: key },
      }
    )
    .then((res) => {
      return res.data;
    });
};
