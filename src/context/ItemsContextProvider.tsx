import { ReactNode, useState } from "react";
import SearchItem from "../models/SearchItem";
import ItemsContext from "./ItemsContext";
 
    interface Props {
        children: ReactNode;
    }
 
    const ItemsContextProvider = ({ children }: Props) => {
        const [included,setIncluded] = useState<string[]>([]);
        const [excluded,setExcluded] = useState<string[]>([]);
        const [equipment,setEquipment] = useState<string[]>([]);
        const [custom,setCustom] = useState<string[]>([]);

        const addItem = (what: string, where: string): void => {
            if (where === "included") {
                setIncluded((prev)=> [...prev, what]);
            } else if (where === "excluded") {
                setExcluded((prev)=> [...prev, what]);
            } else if (where === "equipment") {
                setEquipment((prev)=> [...prev, what]);
            } else if (where === "custom") {
                setCustom((prev)=> [...prev, what]);
            }
        }

    return (
        <ItemsContext.Provider value={{ included, excluded, equipment, custom, addItem }}>
        {children}
        </ItemsContext.Provider>
    );
  };


 
  export default ItemsContextProvider;