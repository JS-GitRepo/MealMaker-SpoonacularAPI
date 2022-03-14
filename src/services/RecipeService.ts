import axios from "axios";
import ComplexSearchResponse from "../models/ComplexSearchResponse";
import RecipeResponse from "../models/RecipeResponse";

const key: string = process.env.REACT_APP_SPOONACULAR_KEY || "";

export const getDefaultRecipes = (): Promise<ComplexSearchResponse> => {
  return axios
    .get("https://api.spoonacular.com/recipes/complexSearch", {
      params: { api_key: key },
    })
    .then((res) => {
      return res.data;
    });
};
console.log(key);
