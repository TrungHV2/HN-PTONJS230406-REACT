import React from 'react'

export default function TableHead({columns}) {
    return (
        <thead>
            <tr>
                {columns.map((col, idx) => <th key={idx}>{col.label}</th>)}
            </tr>
        </thead>
    )
}
