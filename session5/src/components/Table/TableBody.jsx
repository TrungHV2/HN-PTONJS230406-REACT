import React from 'react'

export default function TableBody({data, columns}) {
    return (
        <tbody>
            {data.map(x => <tr>
                {columns.map(col => <td>{x[col.field]}</td>)}
            </tr>)}
        </tbody>
    )
}
