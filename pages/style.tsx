import styled from "styled-components";
import { Children, useContext } from "react";
import { GlobalContext } from "context/GlobalContext";

export const StyleTest = styled.div.attrs(props => ({
    theme: props.theme,
    hoje: console.log(props)
}))`
    // background-color: ${props => props.theme.sky_background};
    transition: background-color 0.1s ease-in;
    // color: ${props => props.theme.color};
    height: 100vh;
`


export const GlobalStyleRender = ({ children }: any) => {
    const { theme } = useContext(GlobalContext);
    const GlobalStyle = styled.div`
        background-color: ${theme.sky_background};
        transition: background-color 0.1s ease-in;
        color: ${theme.color};
        height: 100vh;
    `
    return (
        <GlobalStyle>
            {children}
        </GlobalStyle>
    )
}