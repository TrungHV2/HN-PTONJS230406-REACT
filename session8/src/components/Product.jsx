import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function Product() {
    const [products, setProducts] = useState([
        {id: 1, name: 'Tivi'},
        {id: 2, name: 'Điều hòa'},
        {id: 3, name: 'Máy giặt'},
        {id: 4, name: 'Nồi cơm'},
        {id: 5, name: 'Bình nóng lạnh'}
    ])
    const [searchParams, setSearchParams] = useSearchParams();
    let keySearch = searchParams.get('keySearch');
  return (
    <div>
        <h1>List products</h1>
        <h3>Search by: {keySearch}</h3>
        <form action="/products/search" method='get'>
            <p>
                <input type="text" name='keySearch' />
                <button>Search</button>
            </p>
        </form>
        <table border={1} cellPadding={5} cellSpacing={0}>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
            {products.map(p => <tr>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>
                    <Link to={`/product-details/${p.id}/${p.name}`}>Details</Link>
                </td>
            </tr>)}
        </table>
    </div>
  )
}
