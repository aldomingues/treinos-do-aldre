import styled from 'styled-components'

// const {theme} = useContext(GlobalContext)
export const StyledComponent = styled.div.attrs(props => ({
    theme: props.theme,
}))`
    z-index: 10;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.inverse};
    transition: background-color 0.3s ease-in;
`