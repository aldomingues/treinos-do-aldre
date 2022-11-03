import { StyledSideBar } from "./style"
import { useState, useEffect, useContext } from "react"
import { GlobalContext } from "context/GlobalContext";
import { CrudProvider, CrudContext } from 'context/CrudContext';
import { useRouter } from "next/router";


import { GiDatabase, GiReturnArrow, GiMoon, GiSun } from "react-icons/gi";

const SideBar = () => {
    const { theme, mode, swapMode } = useContext(GlobalContext);
    const { selectMenu, selectedMenu } = useContext(CrudContext);
    const router = useRouter();

    return (
        <StyledSideBar theme={theme}>
            <div>
                <div onClick={() => selectMenu("item")} className="item_menu">
                    <GiDatabase />
                    Item
                </div>
                <div onClick={() => selectMenu("tag")} className="item_menu">
                    <GiDatabase />
                    Categoria
                </div>
            </div>

            <div>
                <div className="footer_item_menu">
                    <GiReturnArrow onClick={() => router.push('/itens')} />
                    {mode == "dark" ? <GiSun onClick={() => swapMode()} /> : <GiMoon onClick={() => swapMode()} />}
                </div>
            </div>
        </StyledSideBar>
    )
}

export default SideBar