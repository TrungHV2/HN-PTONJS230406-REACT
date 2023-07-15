import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import {cartAction} from '../../redux/action'

export default function Shop() {
    const dispatch = useDispatch();
    const {data} = useSelector(state => state.products);
    const handleBuy = (e, data) => {
        e.preventDefault();
        dispatch(cartAction.add(data));
    }
    return (
        <div className='box'>
            <h1>Shop page</h1>
            <h2>List products</h2>
            <table border={1} cellPadding={3} cellSpacing={0} width={'100%'}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(x => <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.price}</td>
                        <td>{x.status ? 'Active' : 'Inactive'}</td>
                        <td>
                            <Link to={`/shop/details/${x.id}/${x.name}`}>Detail</Link> | 
                            <a href='#' onClick={e => handleBuy(e, x)}>Buy</a>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
