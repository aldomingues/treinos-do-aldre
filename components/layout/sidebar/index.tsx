import { StyledSideBar } from "./style"
import { useState, useEffect, useContext } from "react"
import { GlobalContext } from "context/GlobalContext";
import { CrudProvider, CrudContext } from 'context/CrudContext';


import { GiDatabase } from "react-icons/gi";

const SideBar = () => {
    const { theme } = useContext(GlobalContext);
    const { selectMenu, selectedMenu} = useContext(CrudContext);

    return (
        <StyledSideBar theme={theme}>
            <div onClick={() => selectMenu("item")} className="item_menu">
                <GiDatabase />
                Item
            </div>
            <div onClick={() => selectMenu("tag")} className="item_menu">
                <GiDatabase />
                Categoria
            </div>
        </StyledSideBar>
    )
}

export default SideBar