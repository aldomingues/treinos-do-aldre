import { useContext } from 'react'

import { CrudContext } from 'context/CrudContext';
import { GlobalContext } from "context/GlobalContext";
import Table from '@components/layout/crudTable';

import StyledComponent from './style'

const ItemContent = () => {
    const { theme } = useContext(GlobalContext);
    const { selectMenu, selectedMenu, items } = useContext(CrudContext);
    const columns = [
        {
            label: "ID",
            key: "id",
        },
        {
            label: "Nome",
            key: "name",
        },
        {
            label: "Data de criação",
            key: "created_at",
            format: (e: any) => {return new Date(e).toLocaleDateString()}
        }
    ];

    return (
        <StyledComponent theme={theme}>
            {/* abc */}
            <Table columns={columns} data={items} />
        </StyledComponent>
    )
}

export default ItemContent
