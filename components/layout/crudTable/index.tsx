import { StyledTable } from "./style"
import { GlobalContext } from "context/GlobalContext";
import { useContext } from "react";
import { FaTrashAlt, FaPlus, FaPen } from "react-icons/fa"

interface DataTable {
    columns: {
        label: string,
        key: string,
        format?: Function
    }[],
    data: any[],
    createFunc?: Function,
    deleteFunc?: Function,
    editFunc?: Function
}

const Table = (props: DataTable) => {
    const { theme } = useContext(GlobalContext);

    return (
        <StyledTable theme={theme}>
            <thead>
                <tr className="custom_head">
                    {props.columns.map((col) => (
                        <th key={col.key}>{col.label}</th>
                    ))}
                    {(props.deleteFunc || props.editFunc) && <th>Ações</th>}
                </tr>
            </thead>
            {(props.data && (props.data.length > 0)) &&
                <tbody>
                    {props.data.map((item) => (
                        <tr key={item.id} className="custom_row">
                            {props.columns.map((col) => (
                                <td key={`${col.key}-${item.id}`}>
                                    {col.format ? col.format(item[col.key]) : item[col.key]}
                                </td>
                            ))}
                            {(props.deleteFunc || props.editFunc) &&
                            <td>
                                {props.deleteFunc && <FaTrashAlt className="delete" onClick={() => {if (props.deleteFunc) {props.deleteFunc(item)}}}/>}
                                {props.editFunc && <FaPen className="edit" onClick={() => {if (props.editFunc) {props.editFunc(item)}}}/>}
                            </td>}
                        </tr>
                    ))}
                    {(props.data.length == 0) &&
                        <span> Nenhum dado encontrado </span>
                    }
                </tbody>
            }
        </StyledTable>
    )
}

export default Table