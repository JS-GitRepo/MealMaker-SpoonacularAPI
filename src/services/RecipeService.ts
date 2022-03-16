import axios from "axios";
import { useSearchParams } from "react-router-dom";
import ComplexSearchResponse from "../models/ComplexSearchResponse";
import SearchItem from "../models/SearchItem";
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

export const getUserSearch = (searchQuery: string): Promise<ComplexSearchResponse> => {
  return axios
    .get(`https://api.spoonacular.com/recipes/complexSearch?${searchQuery}`, {
      params: { apiKey: key }
    })
    .then((res) => {
      return res.data;
    });
};
