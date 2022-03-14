interface Ingredients {
  information: string;
}

export default interface Recipe {
  id: string;
  title: string;
  equipment: string;
  ingredients: Ingredients;
  image: string;
}
