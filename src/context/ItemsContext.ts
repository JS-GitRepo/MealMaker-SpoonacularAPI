import { createContext } from "react";
import SearchItem from "../models/SearchItem";

interface ItemsContextModel {
    include: SearchItem[];
    exclude: SearchItem[];
    equipment: SearchItem[];
    custom: SearchItem[];
    allItems: SearchItem[];
    addItem: (what:string , where:string) => void;
}

const defaultValues: ItemsContextModel = {
    include: [],
    exclude: [],
    equipment: [],
    custom: [],
    allItems: [],
    addItem: () => {}
};

const ItemsContext = createContext(defaultValues);

export default ItemsContext;