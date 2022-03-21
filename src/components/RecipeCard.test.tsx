import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Recipe from "../models/Recipe";
import RecipeCard from "./RecipeCard";

const dummyRecipe: Recipe = {
  id: 12,
  title: "sloppy-joes",
  image: "sloppy-joes.com",
};

test("renders prop title", () => {
  render(
    <BrowserRouter>
      <RecipeCard singleRecipe={dummyRecipe} />
    </BrowserRouter>
  );
  const titleEl = screen.getByText("sloppy-joes");
  expect(titleEl).toBeInTheDocument();
});

test("renders prop image", () => {
  render(
    <BrowserRouter>
      <RecipeCard singleRecipe={dummyRecipe} />
    </BrowserRouter>
  );
  const titleEl = screen.getByRole("img", { name: "sloppy-joes" });
  expect(titleEl).toBeInTheDocument();
});
