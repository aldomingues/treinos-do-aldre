import styled from "styled-components";


export const StyledSideBar = styled.div.attrs(props => ({
    theme: props.theme,
}))`
    z-index: 0;
    width: 270px;
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
    justify-content: space-between;

    .item_menu {
        color: ${props => props.theme.inverse};
        margin: 20px 40px 0px 40px;
        padding: 10px 30px;
        border-radius: 4px;
        transition: background-color 0.1s ease-in;
        display: flex;
        align-items: center;
        
        
        svg {
            margin-right: 4px;
            fill: ${props => props.theme.inverse};
        }
        
        &:hover {
            cursor: pointer;
            background-color: ${props => props.theme.background};
        }
        
    }

    .footer_item_menu {
        color: ${props => props.theme.inverse};
        margin: 20px 50px;
        border-radius: 4px;
        transition: background-color 0.1s ease-in;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        
        svg {
            margin-right: 4px;
            fill: ${props => props.theme.inverse};
            height: 2.5em;
            width: 2.5em;
            padding: 5px;
            border-radius: 8px;

            :hover {
                cursor: pointer;
                background-color: ${props => props.theme.background};
            }
        }
    }
`