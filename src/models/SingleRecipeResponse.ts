interface Ingredient {
    name: string;
}

export default interface SingleRecipeResponse {
    extendedIngredients: Ingredient[],
    id: number,
    title: string,
    image: string,
    summary: string,
    sourceUrl: string
};