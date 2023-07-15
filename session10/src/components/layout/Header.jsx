import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    const carts = useSelector(s => s.carts)
    return (
        <div className='box'>
            <h1>Header | Giỏ hàng ({carts.length})</h1>
            <nav>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/shop'}>Shop</Link></li>
                </ul>
            </nav>
        </div>
    )
}
