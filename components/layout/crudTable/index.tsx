import { StyledTable } from "./style"
import { useState, useEffect } from "react"
import { GlobalContext } from "context/GlobalContext";
import { useContext } from "react";

interface DataTable {
    columns: {
        label: string,
        key: string
    }[],
    data: any[]
}

const Table = (props: DataTable) => {
    const { theme } = useContext(GlobalContext);

    return (
        <StyledTable theme={theme}>
            <thead>
                <tr>
                    {props.columns.map((col) => (
                        <th>{col.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {props.data.map((item) => (
                    <tr>
                        {props.columns.map((col) => (
                            <td>{item[col.key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    )
}

export default Table