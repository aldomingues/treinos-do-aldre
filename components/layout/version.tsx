import styled from "styled-components";
import { useContext } from "react";
import { GlobalContext } from "context/GlobalContext";
import pkg from "package.json"


const Version = () => {
    const { theme } = useContext(GlobalContext);
    return (
        <StyledVersion theme={theme}>
            Versão {pkg.version}
        </StyledVersion>
    )
}

export const StyledVersion = styled.div.attrs(props => ({
    theme: props.theme,
}))`
    position: fixed;
    bottom: 5px;
    left: 5px;
    color: ${props => props.theme.inverse};
    font-weight: 300;
`

export default Version