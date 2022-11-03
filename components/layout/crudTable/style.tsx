import styled from "styled-components";


export const StyledTable = styled.table.attrs(props => ({
    theme: props.theme,
}))`
    background-color: ${props => props.theme.light_background};
    transition: background-color 0.3s ease-in;
    padding: 30px;
`