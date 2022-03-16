import { ReactNode, useState } from "react";
import SearchItem from "../models/SearchItem";
import ItemsContext from "./ItemsContext";
 
    interface Props {
        children: ReactNode;
    }
 
    const ItemsContextProvider = ({ children }: Props) => {
        const [include,setInclude] = useState<SearchItem[]>([]);
        const [exclude,setExclude] = useState<SearchItem[]>([]);
        const [equipment,setEquipment] = useState<SearchItem[]>([]);
        const [custom,setCustom] = useState<SearchItem[]>([]);
        const [allItems,setAllItems] = useState<SearchItem[]>([]);

        const addItem = (what: string, where: string): void => {
            const Item:SearchItem = {what,where};
            if (where === "include") {
                setInclude((prev)=> [...prev, Item]);
            } else if (where === "exclude") {
                setExclude((prev)=> [...prev, Item]);
            } else if (where === "equipment") {
                setEquipment((prev)=> [...prev, Item]);
            } else if (where === "custom") {
                setCustom((prev)=> [...prev, Item]);
            }
            setAllItems((prev)=> [...prev, Item]);
        }

    return (
        <ItemsContext.Provider value={{ include, exclude, equipment, custom, addItem, allItems }}>
        {children}
        </ItemsContext.Provider>
    );
  };


 
  export default ItemsContextProvider;