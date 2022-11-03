import { createContext, useEffect, useState } from 'react'
import { Theme, DarkTheme } from 'styles/theme'
import { ThemeProps } from 'styles/theme'
import TestesService from '@services/testes'

export const CrudContext = createContext({} as {
    selectMenu: (menu: "item" | "tag") => void,
    selectedMenu: string
})

export function CrudProvider({ children }: any) {
    const [tags, setTags] = useState<any[] | undefined>(undefined);
    const [items, setItems] = useState<any[] | undefined>(undefined);
    const [selectedMenu, selectMenu] = useState<"item" | "tag">("item");
    const [stage, setStage] = useState<"table" | "edit" | "new">("table");
    const service = TestesService();

    const refreshItems = async () => {
        const res = await service.customRequest("item", "get", "");
        console.log(res);
    }

    const refreshTags = async () => {
        const res = await service.customRequest("tag", "get", "");
        console.log(res);
    }

    useEffect(() => {
        if (selectedMenu && (stage === "table")) {
            switch (selectedMenu) {
                case "item":
                    refreshItems();
                    break;
                case "tag":
                    refreshTags();
                    break;
                default:
                    break;
            }
        }
    }, [selectedMenu, stage])


    return (
        <CrudContext.Provider value={{ selectedMenu, selectMenu }}>
            {children}
        </CrudContext.Provider>
    )
}
