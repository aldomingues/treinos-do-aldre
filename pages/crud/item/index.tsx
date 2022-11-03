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

    const onDelete = async (item: any) => {
        console.log("deletar: ", item.id)
    }

    const onEdit = async (item: any) => {
        console.log("editar: ", item.id)
    }

    return (
        <StyledComponent theme={theme}>
            <Table columns={columns} data={items} deleteFunc={onDelete} editFunc={onEdit}/>
        </StyledComponent>
    )
}

export default ItemContent
