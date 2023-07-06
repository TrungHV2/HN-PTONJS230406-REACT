import React from 'react'

export default function TableBody({data, columns}) {
    return (
        <tbody>
            {data.map(x => <tr key={x.id}>
                {columns.map(col => <td key={col.field+"_"+x.id}>{x[col.field]}</td>)}
            </tr>)}
        </tbody>
    )
}
