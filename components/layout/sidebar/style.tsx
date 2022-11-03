import styled from "styled-components";


export const StyledSideBar = styled.div.attrs(props => ({
    theme: props.theme,
}))`
    z-index: 0;
    width: max-content;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.dark_background};
    transition: background-color 0.3s ease-in;
    box-shadow: -3px 0px 5px 2px ${props => props.theme.inverse};
    padding-top: 30px;

    .item_menu {
        color: ${props => props.theme.inverse};
        margin: 20px 40px 0px 40px;
        padding: 10px 30px;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.1s ease-in;
        display: flex;
        align-items: center;

        svg {
            margin-right: 4px;
            fill: ${props => props.theme.inverse};
        }

        &:hover {
            background-color: ${props => props.theme.background}
        }
    }
`