import { SERVER_PROPS_ID } from 'next/dist/shared/lib/constants'
import Link from 'next/link'
import styled from 'styled-components'
import { Theme } from 'styles/theme'
import { useContext } from 'react'
import { GlobalContext } from 'context/GlobalContext'

// const {theme} = useContext(GlobalContext)
export const StyledMenu = styled.section.attrs(props => ({
    theme: props.theme,
    haha: console.log(props)
}))`
    z-index: 10;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.sky_background};
    transition: background-color 0.7s ease-in;

    .list_menu {
        width: 40%;
        margin: auto auto;
        min-width: 300px;
    }

    .menu_item {
        color: ${props => props.theme.color};
        transition: color 0.7s ease-in, background-color 0.7s, filter 0.05s, transform 0.05s;
        margin: 7px 0;
        text-align: center;
        padding: 10px 0;
        border-radius: 4px;
        text-transform: uppercase;

        svg {
            margin-right: 10px;
        }

        &:nth-child(5n+1) {
            background-color: ${props => props.theme.randomPallete[0]};
        }
        &:nth-child(5n+2) {
            background-color: ${props => props.theme.randomPallete[1]};
        }
        &:nth-child(5n+3) {
            background-color: ${props => props.theme.randomPallete[2]};
        }
        &:nth-child(5n+4) {
            background-color: ${props => props.theme.randomPallete[3]};
        }
        &:nth-child(5n) {
            background-color: ${props => props.theme.randomPallete[4]};
        }

        &:hover {
            cursor: pointer;
            filter: drop-shadow(0px 0px 5px black);
            transform: scale(1.05);
        }
    }
`

export const MenuItem = styled.div`
    color: #fff;
    transition: all 0.05s ease-in;
    margin: 7px 0;
    text-align: center;
    padding: 10px 0;
    border-radius: 4px;
    text-transform: uppercase;

    svg {
        margin-right: 10px;
    }

    &:nth-child(5n+1) {
        background-color: ${Theme.randomPallete[0]};
    }
    &:nth-child(5n+2) {
        background-color: ${Theme.randomPallete[1]};
    }
    &:nth-child(5n+3) {
        background-color: ${Theme.randomPallete[2]};
    }
    &:nth-child(5n+4) {
        background-color: ${Theme.randomPallete[3]};
    }
    &:nth-child(5n) {
        background-color: ${Theme.randomPallete[4]};
    }

    &:hover {
        cursor: pointer;
        filter: drop-shadow(0px 0px 5px black);
        transform: scale(1.05);
    }
`
export const ListMenu = styled.div`
    width: 40%;
    margin: auto auto;
    min-width: 300px;
`
