import { StyledTable } from "./style"
import { useState, useEffect } from "react"
import { GlobalContext } from "context/GlobalContext";
import { useContext } from "react";

interface DataTable {
    columns: {
        label: string,
        key: string,
        format?: Function
    }[],
    data: any[]
}

const Table = (props: DataTable) => {
    const { theme } = useContext(GlobalContext);

    return (
        <StyledTable theme={theme}>
            <thead>
                <tr className="custom_row">
                    {props.columns.map((col) => (
                        <th key={col.key}>{col.label}</th>
                    ))}
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
                        </tr>
                    ))}
                </tbody>
            }
        </StyledTable>
    )
}

export default Table