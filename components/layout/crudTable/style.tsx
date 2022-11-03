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

        :hover {
            background-color: ${props => props.theme.dark_background};
            color: ${props => props.theme.inverse};
            cursor: default;
        }
    }

    .custom_head {
        background-color: ${props => props.theme.dark_background};
        transition: background-color 0.3s ease-in;
    }
    td, th {
        transition: all 0.3s ease-in;
        padding: 8px 10px;
        text-align: left;
    }

    td:last-child {
        padding: 3px 10px;
        svg {
            padding: 4px;
            height: 1.5rem;
            width: 1.5rem;
            border-radius: 8px;
            background-color: red;
            fill: ${props => props.theme.color};
            transition: all 0.05s ease-in;

            :hover {
                cursor: pointer;
                transform: scale(1.1);
                box-shadow: 0px 0px 3px #101010;
            }

            &.delete {
                // background-color: ${props => props.theme.primary.default};
                background-color: #de381f;
            }
            &.edit {
                background-color: ${props => props.theme.secondary.default};
            }
        }
        svg:not(:first-child) {
            margin-left: 10px;
        }

        @media only screen and (max-width: 768px) {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;

            svg:not(:first-child) {
                margin-left: 0px;
                margin-top: 5px;
            }
        }
    }
`