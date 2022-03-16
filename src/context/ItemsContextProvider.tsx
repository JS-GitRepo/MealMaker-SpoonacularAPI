import { ReactNode, useEffect, useState } from "react";
import Recipe from "../models/Recipe";
import SearchItem from "../models/SearchItem";
import { getDefaultRecipes, getUserSearch } from "../services/RecipeService";
import ItemsContext from "./ItemsContext";
 
    interface Props {
        children: ReactNode;
    }
 
    const ItemsContextProvider = ({ children }: Props) => {
        const [include,setInclude] = useState<String[]>([]);
        const [exclude,setExclude] = useState<String[]>([]);
        const [equipment,setEquipment] = useState<String[]>([]);
        const [custom,setCustom] = useState<String[]>([]);
        const [allItems,setAllItems] = useState<SearchItem[]>([]);
        const [favorites, setFavorites] = useState<Recipe[]>([]);

        const addItem = (what: string, where: string): void => {
            const Item:SearchItem = {what,where};
            if (where === "include") {
                setInclude((prev)=> [...prev, what]);
            } else if (where === "exclude") {
                setExclude((prev)=> [...prev, what]);
            } else if (where === "equipment") {
                setEquipment((prev)=> [...prev, what]);
            } else if (where === "custom") {
                setCustom((prev)=> [...prev, what]);
            }
            setAllItems((prev)=> [...prev, Item]);
        }

        const addFavorite = (recipe: Recipe): void => {
            setFavorites((prev)=> [...prev, recipe]);
        }

        const removeFavorite = (id: number): void => {
            setFavorites((prev)=> {
                const index: number = prev.findIndex((item)=> item.id === id);
                return [...prev.slice(0,index), ...prev.slice(index + 1)];
            })
        }

        const isFav = (id: number): boolean => favorites.some((recipe)=> recipe.id === id)


    return (
        <ItemsContext.Provider value={{ include, exclude, equipment, custom, favorites, allItems, addItem, addFavorite, removeFavorite, isFav}}>
        {children}
        </ItemsContext.Provider>
    );
  };


 
  export default ItemsContextProvider;