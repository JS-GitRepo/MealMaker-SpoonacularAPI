import { createContext } from "react";
import Recipe from "../models/Recipe";
import SearchItem from "../models/SearchItem";

interface ItemsContextModel {
    include: String[];
    exclude: String[];
    equipment: String[];
    custom: String[];
    allItems: SearchItem[];
    favorites: Recipe[];
    addItem: (what:string , where:string) => void;
    addFavorite: (recipe: Recipe) => void;
    removeFavorite: (id: number) => void;
    isFav: (id: number) => boolean;
}

const defaultValues: ItemsContextModel = {
    include: [],
    exclude: [],
    equipment: [],
    custom: [],
    allItems: [],
    favorites: [],
    addItem: () => {},
    addFavorite: () => {},
    removeFavorite: () => {},
    isFav: () => false,
};

const ItemsContext = createContext(defaultValues);

export default ItemsContext;