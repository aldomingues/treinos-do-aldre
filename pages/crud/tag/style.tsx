import styled from 'styled-components'

// const {theme} = useContext(GlobalContext)
const StyledComponent = styled.div.attrs(props => ({
    theme: props.theme,
}))`
    z-index: 10;
    overflow-x: auto;
    display: block;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.inverse};
    transition: background-color 0.3s ease-in;
`

export default StyledComponent;