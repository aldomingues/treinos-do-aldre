import styled from "styled-components";


export const StyledTable = styled.table.attrs(props => ({
    theme: props.theme,
}))`
    background-color: ${props => props.theme.background};
    // border: solid 10px ${props => props.theme.light_background};
    transition: background-color 0.3s ease-in;
    width: 100%;
    border-spacing: 0px;
    padding: 15px 20px;

    td {
        border-top: solid 2px ${props => props.theme.dark_background};
    }
    .custom_row {
        td:not(:first-child), th:not(:first-child) {
            border-left: solid 2px ${props => props.theme.dark_background};
        }
    }
    td, th {
        transition: all 0.3s ease-in;
        padding: 8px 5px;
        text-align: left;
    }
`