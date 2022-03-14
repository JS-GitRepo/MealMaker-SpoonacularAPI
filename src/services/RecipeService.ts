import axios from "axios";
import ComplexSearchResponse from "../models/ComplexSearchResponse";

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
