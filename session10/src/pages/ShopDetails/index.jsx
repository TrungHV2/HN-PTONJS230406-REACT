import React from 'react'
import {useParams} from 'react-router-dom'

export default function ShopDetails() {
    const {id, name} = useParams();
    return (
        <div className='box'>
            <h1>ShopDetails</h1>
            <h2>{name} | {id}</h2>
        </div>
    )
}
