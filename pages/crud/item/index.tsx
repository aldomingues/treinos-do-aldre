import { useContext } from 'react'

import { CrudContext } from 'context/CrudContext';
import { GlobalContext } from "context/GlobalContext";
import Table from '@components/layout/crudTable';

import { StyledComponent } from './style'

const ItemContent = () => {
    const { theme } = useContext(GlobalContext);
    const { selectMenu, selectedMenu } = useContext(CrudContext);

    return (
        <StyledComponent theme={theme}>
            Item
        </StyledComponent>
    )
}

export default ItemContent
