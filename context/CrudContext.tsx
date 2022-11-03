import { createContext, useEffect, useState } from 'react'
import { Theme, DarkTheme } from 'styles/theme'
import { ThemeProps } from 'styles/theme'
import TestesService from '@services/testes'

export const CrudContext = createContext({} as {
    selectMenu: (menu: "item" | "tag") => void,
    selectedMenu: string,
    items: any[],
    tags: any[]
})

export function CrudProvider({ children }: any) {
    const [tags, setTags] = useState<any[]>([]);
    const [items, setItems] = useState<any[]>([]);
    const [selectedMenu, selectMenu] = useState<"item" | "tag">("item");
    const [stage, setStage] = useState<"table" | "edit" | "new">("table");
    const [loading, setLoading] = useState<boolean>(false);
    const service = TestesService();

    const refreshItems = async () => {
        setLoading(true);
        const res = await service.customRequest("item", "get", "");
        setItems(res.data);
        setLoading(false);
    }

    const refreshTags = async () => {
        setLoading(true);
        const res = await service.customRequest("tag", "get", "");
        setTags(res.data);
        setLoading(false);
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
        <CrudContext.Provider value={{ selectedMenu, selectMenu, items, tags }}>
            {children}
        </CrudContext.Provider>
    )
}
