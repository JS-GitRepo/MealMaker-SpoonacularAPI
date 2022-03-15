import { createContext } from "react";
import SearchItem from "../models/SearchItem";

interface ItemsContextModel {
    included: string[];
    excluded: string[];
    equipment: string[];
    custom: string[];
    addItem: (what:string , where:string) => void;
}

const defaultValues: ItemsContextModel = {
    included: [],
    excluded: [],
    equipment: [],
    custom: [],
    addItem: () => {}
};

const ItemsContext = createContext(defaultValues);

export default ItemsContext;