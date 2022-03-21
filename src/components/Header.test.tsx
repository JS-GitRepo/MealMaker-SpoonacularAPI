import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

test("renders title", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const headingElement = screen.getByRole("heading", { name: "MealMaker" });
  expect(headingElement).toBeInTheDocument();
});
test("links to favorites", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkToFavs = screen.getByRole("link", { name: "home-link" });
  expect(linkToFavs).toBeInTheDocument();
});
